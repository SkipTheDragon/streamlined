# Simplified Connectivity: Bridging Documentation and Products

Crafting instructions and tutorials for your clientele consumes valuable time that could be allocated elsewhere. However, disregarding this aspect risks financial loss, which isn't conducive to business success. With Simplified Connectivity, just share a link and simplify your workload!

The code is in bundle/StreamlinedBundle. I added Symfony inside the repo just for easier testing and deploy.

# Demo

You can see the demo [here](https://projects.wyverr.com/streamlined).

## Local

To run the project locally,
you need to have [docker](https://docs.docker.com/get-docker/) and [lando](https://lando.dev/download/) installed.
Then after you have cloned the project, open your terminal and run the following commands:

```bash
cd streamlined/
lando start # This will start/fetch the docker containers, install the dependencies (yarn and composer) and migrate and seed manticore data
cd bundle/StreamlinedBundle/
lando yarn watch # This will build the assets in case they are not built already
```

Then access the website at [http://streamlined.lndo.site](http://streamlined.lndo.site).

## Website

Or just click the [link](https://projects.wyverr.com/streamlined) to the website.

## An Illustrative Example:

**Identified Issue:**

Consider the typical process of instructing users/customers to activate registration on their WordPress website. Typically, it entails the following steps (excerpted from an online source):

1. Log in to the Admin section of your WordPress.
2. Navigate to Settings > General.
3. Enable the "Anyone can register" option.
4. Save changes.

**Proposed Solution:**

Avoid verbosity and time wastage by utilizing the following concise method:

*Simply click: [![Redirect to your WordPress Instance](https://projects.wyverr.com/streamlined/get-svg/wordpress/My%20General%20Settings)](https://projects.wyverr.com/streamlined/pointing-to/wordpress/?pointer=sadas), and check the "Anyone can register" box.*

**Rationale:**
This approach streamlines the process, alleviating common user concerns such as uncertainty and missed steps.

**Additional Functionalities:**
- Automated form completion (where applicable)
- Auto-scrolling
- Text highlighting

Key Features:
- Compatible with various platforms (WordPress, WooCommerce, etc.)
- Reduces confusion, enhances customer satisfaction, and bolsters sales.
- User-friendly and simple installation.
- Translations
- Customizable
- Primarily designed for developers but accessible to all (requires minimal programming knowledge, mainly YAML).

## Inspired by HomeAssistant's "My HomeAssistant" tool: [https://my.home-assistant.io/](https://my.home-assistant.io/)
