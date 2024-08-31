import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/headshot.png")} alt="me" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("about.cursoIcon.png")} alt="also me"
                        className={styles.aboutImage}/> */}
                        <div className={styles.aboutItemText}>
                            <h3>
                                Software Developer
                            </h3>
                            <p>
                                I'm a software developer.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("about.serverIcon.png")} alt="also me"/> */}
                        <div className={styles.aboutItemText}>
                            <h3>
                                Computer Science Student
                            </h3>
                            <p>
                                I'm a computer science student at the University of North Carolina at Chapel Hill.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("about.uhhh.png")} alt="also me"/> */}
                        <div className={styles.aboutItemText}>
                            <h3>
                                Hobbies
                            </h3>
                            <p>
                                Aside from programming, I'm an avid sports fan. My favorite teams are the Packers, Manchester United, Suns, and UNC.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
    )
}