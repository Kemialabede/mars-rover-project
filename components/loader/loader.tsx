import React from 'react';
import styles from './loader.module.scss';

const GridLoader = () => (
  <div className={styles.skeleton__grid}>
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
    <div className={styles.skeleton__item} />
  </div>
);

export default GridLoader;
