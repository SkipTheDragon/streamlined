---
sidebar_position: 6
---

# Configuration

Editing the configuration file `streamlined_bundle.yaml` located inside the `config/packages` directory allows you to customize the platform to your liking.  In case it doesn't exist please create it.

In the below configuration we will showcase and describe the configuration of the application/bundle with all available options.


```yaml
streamlined_bundle:
  links:
    user_website: "https://www.wyverr.com" # the link to your main website
    downloads: # will display the icons in footer if set
      android: "https://play.google.com/store/apps/details?id=com.example" 
      ios: "https://apps.apple.com/us/app/example/id1234567890"
    overridable: # in case you have external faq/privacy/tos pages, or you don't want to use the default templates.
      faq: "https://www.example.com/faq" # default is empty
      privacy: "https://www.example.com/privacy" # default is empty
      tos: "https://www.example.com/terms" # default is empty
  app:
    name: "Streamlined" # the name of the app
    description: "A cool platform built by Wyverr Inc."  # a description of the app, only used in the meta tags
    motto: "" # a motto for the app, only used in the footer
    disable_destination_obfuscation: false # if set to true, the destination will always be shown in the url and the option to obfuscate it will be hidden
    always_instant_redirect: false # if set to true, the redirect will always be instant and the option to disable it will be hidden
    logo: "./bundles/streamlined/images/logo.svg" # the logo of the app
    logo_dark: "./bundles/streamlined/images/logo_dark.svg" # the logo of the app in dark mode
    favicon: "./bundles/streamlined/images/favicon.svg" # the favicon of the app
    favicon_dark: "./bundles/streamlined/images/favicon_dark.svg" # the favicon of the app in dark mode
    allow_dark_mode: true # if set to false, the dark mode switch will be hidden
  svg: # settings for the generated images you can see a preview at https://your-app.com/
    icon_background_color: "#4F46E5" # the background color of the icons
    text_background_color: "#080C13" # the background color of the text
    textColor: "white" # the color of the text
  apps: # your apps
    wordpress:
      name: "WordPress"
      shared_with: "custom_app" # in case this is not an app and just another page/section of an existent app you can set this to the app key (in this case custom_app) and both apps will share their cookies.
    custom_app:
      name: "CustomApp" # app name
      icon: "%kernel.project_dir%/public/bundles/streamlined/images/defaulticon.svg" # show a custom icon for the app
      custom_icon_width: 50 # leave this value to 50 to use automatically detected size
      custom_icon_height: 50 # leave this value to 50 to use automatically detected size
```

All values are the default ones, unless specified otherwise. You can change them to your liking :) .
