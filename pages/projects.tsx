import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/projects.module.css';
import Button, {ButtonProps} from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: grey[100],
  backgroundColor: grey[900],
  '&:hover': {
    backgroundColor: grey[800],
    color: grey[100],
  },
}));


type project={
  title:string,
  href: string,
  desc: string,
  img: string,
}
const projects:project[]=[
  {
    title: 'StoreIt',
    desc: "Collaborated in a team of 10 students. Developed a retail software for CS253 course to automate and ease the shopping experience of buyers and sellers. Used ReactJS framework with MUI library for Frontend with Springboot Java as backend framework.",
    href: "https://github.com/ManasGupta1310/store-it-frontend",
    img: '/images/storeit.png',
  },
  {
    title: 'Sudoku PySAT solver',
    desc: "Implemented sudoku solver using PySAT library. The solver is build upon logic using CNF for encoding sudoku constraints. The solver is capable of solving sudoku puzzles of any size but it takes time. Repo is private for security reasons. Will make it public soon enough",
    href: "https://github.com/ManasGupta1310/Sudoku-PySAT-Solver-Generator",
    img: '/images/sudoku.png',
  },
]
export const Projects = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Manas Gupta',
      }}
    >
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div className={styles.project} key={index}>
              <div className={styles.card} style={{backgroundImage: `url(${project.img})`}} >
                  <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>
                        <h2>{project.title}</h2>
                      </div>
                      <div className={styles.cardDesc}>
                        {project.desc}
                      </div>
                      <div className={styles.cardLink}>
                        <CustomButton variant="contained" color="primary" href={project.href} sx={{borderRadius: 2}}>Here<ArrowForwardIcon/></CustomButton>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
    </Layout>
  );
};

export default Projects;
