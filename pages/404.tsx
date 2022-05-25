import Image from 'next/image';
import React from 'react'
import Layout from '../components/Layout';

const Custom404= ():JSX.Element => {
  return (
    <Layout
        customMeta={{
        title: '404 - Page Not Found',
        }}
    >
        <div  style={{ display:'flex', justifyContent:"center", alignItems:'center', flexDirection:'column', marginTop: 30}}>
        <h1>Oops! Page Not Found!</h1>
        <Image src={'/images/404.png'} width={170} height={200}/>
        </div>
    </Layout>
  )
}

export default Custom404;
