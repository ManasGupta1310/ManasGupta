import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
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
        <div className={styles.aboutFirst}>
          <p style={{ fontSize: 18 }}>Hi my name is Manas Gupta.
            I am a second year UG student at Indian Institute of Technology, Kanpur,
            doing by Bachlelors in Computer Science and Engineering. 
            <br/>
             <br/>
            I live in Kanpur. I have shifted a lot over my life so I did my schooling in cities like Kanpur,
             Ghaziabad and Delhi and lived in Nepal and Kota as well. Living in Kota would obviously mean preparing for JEE.
             <br/>
             <br/>
            Having managed to get through my first year, I had learned various things
            during that time.
          </p>
        </div>
        <div className={styles.personalImg}>
          <Image src="/images/dp.jpg" width={300} height={300} />
        </div>
      </div>
      <div className={styles.socials}>
        <ul>
          <a href="https://github.com/ManasGupta1310" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/github.png" alt="github" /></li></a>
          <a href="https://www.instagram.com/__manasgupta__/" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/instagram-new.png" alt="instagram" /></li></a>
          <a href="https://linkedin.com/in/manasg20/" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/linkedin.png" alt="linkedin" /></li></a>
          <a href="mailto:manasg20@iitk.ac.in" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/apple-mail.png" alt="mail" /></li></a>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
