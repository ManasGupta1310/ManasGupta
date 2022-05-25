import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/projects.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    desc: "Implemented sudoku solver using PySAT library. The solver is build upon logic using CNF for encoding sudoku constraints. The solver is capable of solving sudoku puzzles of any size but it takes time. Repo is private for security reasons. Will mkae it public soon enough",
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
              <Card sx={{ maxWidth: 335, border:1, borderColor: '#ECF0F1'}} className="bg-white dark:bg-black text-gray-900 dark:text-white vsc-initialized">
                <CardMedia
                  component="img"
                  image={project.img}
                  alt="storeit"
                  sx={{height: 200}}
                  className={styles.projectImg}
                />
                <CardContent sx={{ padding: 2}}>
                  <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}} component="div" className="text-gray-900 dark:text-white">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-900 dark:text-white">
                    {project.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: 3}}>
                  <Button size="small" href={project.href} target='_blank' sx={{fontWeight:600}}>Explore more <ArrowForwardIcon/> </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
    </Layout>
  );
};

export default Projects;
