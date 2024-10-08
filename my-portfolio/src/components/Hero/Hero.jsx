import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Tyler Roth
            </h1>
            <p className={styles.description}>
                I'm a computer science student at the University of North Carolina at Chapel Hill.
            </p>
            <a className={styles.contactBtn} href="mailto:tylertho@ad.unc.edu">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/headshot.png")} alt="Headshot of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>
    )
}