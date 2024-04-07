<?php

namespace Wyverr\StreamlinedBundle\Controller;

use League\HTMLToMarkdown\HtmlConverter;
use SVG\Nodes\Shapes\SVGPath;
use SVG\Nodes\Shapes\SVGRect;
use SVG\Nodes\Texts\SVGText;
use SVG\Nodes\Texts\SVGTextPath;
use SVG\Nodes\Texts\SVGTSpan;
use SVG\SVG;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class Builder extends AbstractController
{

    #[Route('/', name: 'app_index')]
    public function index(): Response
    {
        return $this->render('@StreamlinedBundle/app_create_link.html.twig');
    }

    #[Route('/', name: 'app_create_link')]
    public function createLink(): Response
    {
        return $this->render('@StreamlinedBundle/app_create_link.html.twig', []);
    }

    #[Route('/get-svg/{app}/{label}', name: 'app_get_svg', methods: ["GET"])]
    public function getImage(
        string                                                       $app,
        string                                                       $label,
        #[Autowire(service: "service_container")] ContainerInterface $container,
        TranslatorInterface                                          $translator
    ): Response
    {
        $config = $container->getParameter('streamlined_bundle.streamlined');
        $currentApp = $config["apps"][$app] ?? null;

        if (is_null($currentApp)) {
            $message = $translator->trans('Could not generate image because the app does not exist.', domain: 'StreamlinedBundle');
            return new Response($message, 400);
        }

        $html = $this->generateSVG(
            $this->processImage($currentApp["icon"]),
            $label,
            $config["svg"]["icon_background_color"],
            $config["svg"]["text_background_color"],
            [
                $currentApp["custom_icon_width"],
                $currentApp["custom_icon_height"]
            ]
        );

        return new Response($html, 200, [
            'Content-Type' => 'image/svg+xml'
        ]);
    }


    #[Route('/process-form', name: "process_form", methods: ["POST"])]
    public function processForm(
        Request                                                      $request,
        #[Autowire(service: "router.default")] UrlGeneratorInterface $urlGenerator,
        #[Autowire(service: "service_container")] ContainerInterface $container,
        TranslatorInterface                                          $translator
    ): JsonResponse
    {
        // Retrieve form data
        $app = $request->request->get('app');
        $query = $request->request->get('query');
        $label = $request->request->get('label');

        $config = $container->getParameter('streamlined_bundle.streamlined');
        $currentApp = $this->findElementByName($config["apps"], $app);
        $altMessage = $translator->trans('Redirect to your %app% instance', ['%app%' => $currentApp["name"]], 'StreamlinedBundle');

        $app = $currentApp["key"];

        $hideUrlCheckbox = $request->request->has('hide-url-checkbox');
        $instantRedirect = $request->request->has('instant_redirect');
        $showRedirectUrlCheckbox = $request->request->has('show-redirect-url-checkbox');

        if ($hideUrlCheckbox && $showRedirectUrlCheckbox) {
            $query .= "streamlined-unique-show-url=true";
        }

        $pointer = urlencode($query);
        $route = "app_redirect_user";

        if ($hideUrlCheckbox) {
            $pointer = base64_encode($query);
        }

        if ($instantRedirect) {
            $route = "app_redirect_user_instant";
        }


        $theLink = $urlGenerator->generate($route, [
            "app" => $app,
            "pointer" => $pointer
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $url = $urlGenerator->generate('app_get_svg', [
            "app" => $app,
            "label" => $label
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $html = "<a href='$theLink' target='_blank'>";
        $html .= "<img src='$url' alt='$altMessage'>";
        $html .= "</a>";
        $converter = new HtmlConverter();

        return $this->json([
            "raw" => $theLink,
            "html" => $html,
            "markdown" => $converter->convert($html)
        ]);
    }

    private function processImage(string $input): string
    {
        // Check if the input is a link
        if (preg_match('/^(https?:\/\/[^\s]+)/i', $input, $matches)) {
            $link = $matches[0];
            // Return the link as HTML
            return '<img src="' . $link . '"/>';
        }

        // if the input is a filesystem path:
        if (preg_match('/^([a-z]:)?[\/\\\\]/i', $input)) {
            // Return the path as HTML
            return file_get_contents($input);
        }

        // Check if the input is an SVG
        return $input;
    }

    private function extractNumericValue(string $value): float
    {
        $numericValue = preg_replace('/[^0-9.]/', '', $value);
        return floatval($numericValue);
    }

    private function findElementByName(array $array, string $name)
    {
        foreach ($array as $key => $element) {
            if (isset($element['name']) && $element['name'] === $name) {
                return [...$element, 'key' => $key];
            }
        }

        return null; // Element not found
    }

    /**
     *
     * Example values:
     *
     *   $iconSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" x="12px" y="5px" viewBox="0 0 24 24"><title/><g id="Complete"><g id="alert-circle"><g><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/><circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g>/svg>';
     *   $text = 'ANALYTICS';
     *   $firstBgColor = '#555';
     *   $secondBgColor = '#03a9f4';
     *
     * @param string $iconSVG xml/svg
     * @param string $text
     * @param string $firstBgColor
     * @param string $secondBgColor
     * @param array $customIconDimensions
     * @return string xml string
     */
    private function generateSVG(string $iconSVG, string $text, string $firstBgColor, string $secondBgColor, array $customIconDimensions = [50, 50]): string
    {
        $iconWidth = 0.3 * 154;  // 30% of the image width
        $iconHeight = 28;
        $textWidth = strlen($text) * 6; // Assuming each character occupies 10 units of width

        if ($textWidth < 100) $textWidth = 90; // Minimum width of 100 units (pixels

        $svgWidth = $textWidth * 1.8; // Increase SVG width by 30% of text width
        $svgHeight = 28;

        // Create SVG document
        $svg = new SVG($svgWidth, $svgHeight);
        $doc = $svg->getDocument();

        $doc->setAttribute('style', 'border-radius: 4px');

        // Create the first background rectangle
        $firstBgRect = new SVGRect(0, 0, $iconWidth, $iconHeight);
        $firstBgRect->setAttribute('fill', $firstBgColor);
        $doc->addChild($firstBgRect);

        // Create the second background rectangle
        $secondBgRect = new SVGRect($iconWidth, 0, $svgWidth - $iconWidth, $iconHeight);
        $secondBgRect->setAttribute('fill', $secondBgColor);
        $doc->addChild($secondBgRect);

        $iconSvg = SVG::fromString($iconSVG);
        if ($iconSvg !== null) {
            $iconDoc = $iconSvg->getDocument();
            // Calculate the position to center the icon inside the first rectangle
            $width = $iconDoc->getWidth();
            $height = $iconDoc->getHeight();

            // In case width or height is not set, use the default icon dimensions
            if ($width === null) {
                $width = $customIconDimensions[0];
            }

            if ($height === null) {
                $height = $customIconDimensions[1];
            }

            // In case the icon dimensions are different from the default ones, use them.
            if ($customIconDimensions[0] !== 50 || $customIconDimensions[1] !== 50) {
                $width = $customIconDimensions[0];
                $height = $customIconDimensions[1];
            }

            $iconX = ($iconWidth - $this->extractNumericValue($width)) / 2;
            $iconY = ($iconHeight - $this->extractNumericValue($height)) / 2;

            $iconSvg->getDocument()->setAttribute('x', $iconX);
            $iconSvg->getDocument()->setAttribute('y', $iconY);

            $doc->addChild($iconSvg->getDocument());
        }

        // Create the text element
        $textElement = new SVGText($text);
        $textElement->setAttribute('font-weight', 'bold');
        $textElement->setAttribute('fill', '#fff');
        $textElement->setAttribute('font-size', '13');

        // Calculate the center position of the second rectangle
        $textX = $iconWidth + ($svgWidth - $iconWidth) / 2;
        $textY = $iconHeight / 2;

        $textElement->setAttribute('x', $textX);
        $textElement->setAttribute('y', $textY);
        $textElement->setAttribute('text-anchor', 'middle');
        $textElement->setAttribute('dominant-baseline', 'central');
        $doc->addChild($textElement);

        return $svg->toXMLString();
    }
}
