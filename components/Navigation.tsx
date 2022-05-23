import Link from 'next/link';
import React from 'react';
import styles from '../styles/navigation.module.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Divider } from '@mui/material';

const links = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <InfoIcon />,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <AccountTreeIcon />,
  },
]

const Navigation = (): JSX.Element => {

  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };
  
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">
          <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
        </Link>
        <Link href="/projects">
          <a className="text-gray-900 dark:text-white px-6 py-4">Projects</a>
        </Link>
        <a href="https://drive.google.com/file/d/1aXZaxbsJytJFZiFHltxpM75I494b4XoU/view?usp=sharing" target='_blank' rel="noreferrer">
          <a className="text-gray-900 dark:text-white px-6 py-4">Resume</a>
        </a>
      </nav>
      <div className={styles.navMob}>
          <Button onClick={toggleDrawer(true)} sx={{padding:0}}><MenuIcon className="text-gray-900 dark:text-white" sx={{ opacity:'50%'}}/></Button>
          <Drawer
            anchor={'left'}
            open={state}
            onClose={toggleDrawer(false)}
          >
           <Box
              sx={{ width: 250, height:'100%' }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className="bg-white dark:bg-black text-gray-900 dark:text-white vsc-initialized"
            >
              <List sx={{marginTop: '50px'}}>
                {links.map((text, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton href={text.href} >
                      <ListItemIcon sx={{color:'gray'}}>
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText primary={text.name} sx={{textDecoration: 'none'}} className="text-gray-900 dark:text-white"/>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider/>
            </Box>
          </Drawer>
    </div>
    </div>
  );
};

export default Navigation;
