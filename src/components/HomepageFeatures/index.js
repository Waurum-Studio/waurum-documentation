import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Thanks to <a href="https://docusaurus.io">Docusaurus</a> sleek design, navigating through knowledge has never been that easy.<br/>
        Oh and we also worked, a bit 🥲
      </>
    ),
  },
  {
    title: 'Work in Progress',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Documentation is being built block by block with the help of generous contributors.<br/>
        <a href="#">Join the brotherhood of compulsive writers now!</a>
      </>
    ),
  },
  {
    title: 'Localization Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Image sucks, but <a href="#">cool translators</a> are on their way to make your best wish come true: <br/>
        read technical shits in your own language ❤️
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
        <h3>{title}</h3>
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
