import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Your Fitness Journey</h1>
        <p className={styles.subtitle}>Track your workouts, monitor your progress, and achieve your fitness goals.</p>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Workout Tracking</h2>
          <p>Keep a log of your workouts, including weights, reps, and personal records.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Progress Monitoring</h2>
          <p>Visualize your progress over time with insightful charts and graphs.</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Community Support</h2>
          <p>Connect with other fitness enthusiasts for motivation and advice.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
