import React, { useEffect } from 'react';
import styles from './Signup.module.scss';

interface SignupProps {
    image?: string;
  }

  
export default function Signup({
    image = '/mainheader-img.png',
  }: SignupProps) {
  
    return (
      <header className={styles.header} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" className={styles.logo} height={50} width={1000} />
        </div>
  
  
        <div className={styles.scrollDown}>
          <span className={styles.arrow}></span>
        </div>
      </header>
    );
  }
  
