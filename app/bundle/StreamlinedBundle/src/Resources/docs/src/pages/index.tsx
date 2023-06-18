import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={
        { background: "#4F46E5", color: "#fff" }
    }>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle" style={
            {
                fontSize: '1.2rem',
                marginBottom: '2.5rem'
            }
        }>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started - 15 minutes ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Streamlined is a web platform that acts as a bridge between documentation and a specific instance of a service. It allows you to create links that navigate directly to specific pages or features within the service. This can be useful in contexts such as troubleshooting, configuration, or guided setup, by making it easier for users to find and access the right parts of the service. The platform is designed with user privacy in mind, as all data is only stored locally in the user's browser.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
