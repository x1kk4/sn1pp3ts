import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Pack of VS Code snippets",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Ready to use snippet pack for web development</>,
  },
  {
    title: "Extension for VS Code",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Soon...</>,
  },
  {
    title: "Simple online configurator",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Soon...</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className='text--center'>
        <Svg
          className={styles.featureSvg}
          role='img'
        />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}