import React from 'react';
import Layout from '../components/Layout';
import styles from "../styles/about.module.css";

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Manas Gupta',
      }}
    >
      <h1>About</h1>
      <div className={styles.aboutPara}>
        <p style={{ fontSize: 18 }}>Hi my name is Manas Gupta.
          I am a second year UG student at Indian Institute of Technology, Kanpur,
          doing by Bachlelors in Computer Science and Engineering.
          <br />
          <br />
          I live in Kanpur. I have shifted a lot over my life so I did my schooling in cities like Kanpur,
          Ghaziabad and Delhi and lived in Nepal and Kota as well. Living in Kota would obviously mean preparing for JEE.
          <br />
          <br />
          Having managed to get through my first year, I had learned various things
          during that time.
          <br />
          <br />
          I am interested in WebDev and ML and I frequently involve myself in Competitive Programming. Delving deep to solve
          some lame or some fascinating problem si really the sort of thing I am looking for.
        </p>
      </div>
    </Layout>
  );
};

export default About;
