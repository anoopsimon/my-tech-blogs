import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Learn Testing Automation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        AutoAssure Tech is crafted to simplify your journey into the world of testing automation. With straightforward tutorials and user-friendly guides, you'll be up and running with the latest in testing technology in no time.
      </>
    ),
  },
  {
    title: 'Dive Deep into Testing Trends',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Stay ahead in the fast-evolving landscape of software testing. AutoTest Innovator brings you the latest trends, cutting-edge methodologies, and industry insights. Immerse yourself in content that matters – the future of automated testing.
      </>
    ),
  },
  {
    title: 'Empowering Your Testing Infrastructure',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Harness the power of advanced testing frameworks and infrastructure. With AutoTest Innovator, gain access to in-depth resources on building robust testing environments, leveraging tools like Selenium, Cypress, and more. We make complex concepts accessible, allowing you to enhance your testing capabilities with ease.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
