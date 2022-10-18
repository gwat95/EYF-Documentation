import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Education!',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn the fundamentals of Financial Literacy. Topics such as Investing, 
        Real Estate, Continued Education and more! Through a series of videos, 
        quizzes and in-game activities you'll learn all the basics of Fin Lit!
      </>
    ),
  },
  {
    title: 'Fun!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Just because it's educational doesn't mean it has to be boring. 
        PLay the game, level your character up, build your financial empire 
        and take off to the stars! Financial Literacy is one of the most important 
        life skills so let's have fun!
      </>
    ),
  },
  {
    title: 'Opportunities!',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        What's the point of education with no application? We have partnered with 
        an assortment of universities, non-profits, government entities, scholarship foundations, 
        and more to provide you with as many resources and opportunities for success!
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
