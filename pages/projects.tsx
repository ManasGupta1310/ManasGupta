import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/projects.module.css';
export const Projects = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Manas Gupta',
      }}
    >
        <h1>Projects</h1>
        <div className={styles.projects}>
            <div className={styles.project}>
            </div>
        </div>
    </Layout>
  );
};

export default Projects;
