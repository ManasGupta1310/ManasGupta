import React from 'react';
import Layout from '../components/Layout';
import styles from "../styles/contact.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Contact - Manas Gupta',
      }}
    >
      <h1>Contact</h1>
      <div className={styles.contactPara}>
          <p style={{fontSize: 18}}>
        Feel free to reach me or mail me!
        <br/>
        <br/>
        <b>Email:</b> <a href="mailto:manasg20@iitk.ac.in" target="_blank" rel='noreferrer'>mmanasggupta@gmail.com</a>
        <br/>
        <b>IITK Email:</b> <a href="mailto:manasg20@iitk.ac.in" target="_blank" rel='noreferrer'>manasg20@iitk.ac.in</a>

        <br/>
        <br/>
        Do ping me to discuss with me anything on <a href="https://discord.com/users/773440115930914816" target="_blank" rel='noreferrer'>Discord </a> 
        or  whatever socials.
        </p>
      </div>
      <hr className='mb-1 text-sm text-gray-500 dark:text-gray-400'/>
      <div className={styles.socials}>
        <ul>
          <a href="https://github.com/ManasGupta1310" target="_blank" rel='noreferrer'><li><GitHubIcon sx={{ height: 45, width: 45}} className={styles.icons}/></li></a>
          <a href="https://www.instagram.com/__manasgupta__/" target="_blank" rel='noreferrer'><li><InstagramIcon sx={{ height: 45, width: 45}} className={styles.icons}/></li></a>
          <a href="https://linkedin.com/in/manasg20/" target="_blank" rel='noreferrer'><li><LinkedInIcon sx={{ height: 45, width: 45}} className={styles.icons}/></li></a>
          <a href="https://twitter.com/mmanasgupta" target="_blank" rel='noreferrer'><li><TwitterIcon sx={{ height: 45, width: 45}} className={styles.icons}/></li></a>
          <a href="mailto:manasg20@iitk.ac.in" target="_blank" rel='noreferrer'><li><EmailIcon sx={{ height: 45, width: 45}} className={styles.icons}/></li></a>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
