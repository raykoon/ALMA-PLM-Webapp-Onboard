import React, { useEffect, useState } from 'react';
import styles from './404.module.scss';
import { useRouter } from 'next/router';

export default function Custom404Com({ code }) {
  const useAlmaRouter = useRouter();

  return (
    <div className={styles.alma404Warper}>
      <div className={styles.almaLeft}></div>
      <div className={styles.almaLogo}></div>
      <div className={styles.almaRight}></div>
      <div className={styles.title}>
        {code === 401 ? 'Oops, are you lost?' : 'Oops, nothing here.'}
      </div>
      <div className={styles.text}>
        {code === 401
          ? 'You are not authorized to visit that page… or it never existed on this planet.'
          : 'The page you’re looking for is not found... or never existed on this planet.'}
      </div>
      <div
        className={styles.btn}
        onClick={() => {
          useAlmaRouter.push('/dashboard');
        }}
      >
        Take me Back
      </div>
      {code === 401 ? (
        <div className={styles.img401}></div>
      ) : (
        <div className={styles.img}></div>
      )}
    </div>
  );
}
