import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Manas Gupta',
      }}
    >
      <h1>About</h1>
      <div className='aboutPara'>
        <div className="aboutFirst">
          <p style={{ fontSize: 22 }}>Hi my name is Manas Gupta.
            I am a second year UG student at Indian Institute of Technology, Kanpur,
            doing by Bachlelors in Computer Science and Engineering. I live in Kanpur.
            Having managed to get through my first year, I had learned various things
            during that time.
          </p>
        </div>
        <div className="personalImg">
          <Image src="/images/dp.jpg" width={300} height={300} />
        </div>
      </div>
      <p style={{ fontSize: 20, marginTop: 50 }}>
        Some of the things which I like to do in
        my free time include reading, drawing, watching
        hollywood movies and anime (Yeah, I am a weeb!!),
        playing video games, playing guitar, beatboxing,
        coding (not a pro) and talk about the cosmos just to
        fry someone&apos;s brain.
        I am fascinated by any technology or software related topics. Talk to me about any topic and
        I shall show my utmost interest in it.
      </p>
      <div className="socials">
        <ul>
          <a href="https://github.com/ManasGupta1310" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/github.png" alt="github" /></li></a>
          <a href="https://www.instagram.com/__manasgupta__/" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/instagram-new.png" alt="instagram" /></li></a>
          <a href="linkedin.com/in/manasg20/" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/linkedin.png" alt="linkedin" /></li></a>
          <a href="mailto:manasg20@iitk.ac.in" target="_blank" rel='noreferrer'><li><img src="https://img.icons8.com/nolan/50/apple-mail.png" alt="mail" /></li></a>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
