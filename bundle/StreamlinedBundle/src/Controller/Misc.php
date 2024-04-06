<?php

namespace Wyverr\StreamlinedBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Misc extends AbstractController
{
    #[Route('/tos', name: 'app_tos')]
    public function termsAndConditions(): Response
    {
        return $this->render('@StreamlinedBundle/tos.html.twig');
    }

    #[Route('/privacy', name: 'app_privacy')]
    public function privacy(): Response
    {
        return $this->render('@StreamlinedBundle/privacy.html.twig');
    }

    #[Route('/faq', name: 'app_faq')]
    public function faq(): Response
    {
        return $this->render('@StreamlinedBundle/faq.html.twig');
    }

    #[Route('/manage-my-instances', name: 'app_manage_instances')]
    public function manageMyInstances(): Response
    {
        return $this->render('@StreamlinedBundle/manage_my_instances.html.twig');
    }
}
