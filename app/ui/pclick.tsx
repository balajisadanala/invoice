'use client';

import React from 'react'
import { useState } from 'react';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

const Pclick = () => {
    var [clicked,setClicked]= useState(false)
  return (
    <>
    <div
    className={styles.shape}
  />

    <p className={`${lusitana.className} text-xl cursor-pointer ${clicked?`text-gray-800`:`text-blue-800`} md:text-3xl md:leading-normal`} onClick={() => setClicked(prev => !prev)}>
    <strong>Welcome to Acme.</strong> This is the example for the{' '}
    <a href="https://nextjs.org/learn/" className="text-blue-500">
      Next.js Learn Course
    </a>
    , brought to you by Vercel.
  </p>
  </>
  )
}

export default Pclick