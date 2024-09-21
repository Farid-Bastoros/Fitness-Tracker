import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.brand}>Fitness Tracker</h2>
      <ul className={styles.navLinks}>
        <li>
          <Link className={styles.navLink} to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link className={styles.navLink} to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className={styles.navLink} to="/" onClick={() => auth.signOut()}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className={styles.navLink} to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link className={styles.navLink} to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
