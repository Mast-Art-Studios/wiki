import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Build a Portfolio',
    Svg: require('../../static/img/undraw_social_update_re_kdu4.svg').default,
    description: (
      <>
        Build an art portfolio by customizing your page and posting art.
      </>
    ),
  },
  {
    title: 'Organize your Work',
    Svg: require('../../static/img/undraw_folder_re_j0i0.svg').default,
    description: (
      <>
        Organize posted works into folders - display your art how you want 
        it to be displayed.
      </>
    ),
  },
  {
    title: 'Connect with Others',
    Svg: require('../../static/img/undraw_connection_re_lcud.svg').default,
    description: (
      <>
        Interact and share artwork by other artists! It is an easy way to 
        reach a wider audience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
