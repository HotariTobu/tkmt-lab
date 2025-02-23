import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import IndexContents from './_index-contents.md';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.wbr)}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/main/git">
            必読するべき👀
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/extra/debug">
            余裕があれば🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default () => (
  <Layout>
    <HomepageHeader />
    <main className={styles.mainContainer}>
      <IndexContents />
    </main>
  </Layout>
)
