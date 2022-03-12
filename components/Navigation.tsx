import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <a href="https://drive.google.com/file/d/1aXZaxbsJytJFZiFHltxpM75I494b4XoU/view?usp=sharing" target='_blank' rel="noreferrer">
        <a className="text-gray-900 dark:text-white px-6 py-4">Resume</a>
      </a>
    </nav>
  );
};

export default Navigation;
