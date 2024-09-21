import React , { useEffect, useState }from 'react';
// import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import LogoutButton from '../components/LogoutButton';
import WorkoutTracker from '../components/WorkoutTracker';
// import ProgressChart from '../components/ProgressChart';
import styles from '../styles/Dashboard.module.css';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Welcome to Your Dashboard</h1>
//       <p>Track your fitness activities and view your progress.</p>

//       <WorkoutTracker /> {/* Add WorkoutTracker here */}

//       <LogoutButton />
//     </div>
//   );
// };
const Dashboard = () => {
    const [workouts, setWorkouts] = useState([]);
    
    useEffect(() => {
        const fetchWorkouts = async () => {
        const workoutCollection = collection(db, 'workouts');
        const workoutSnapshot = await getDocs(workoutCollection);
        const workoutList = workoutSnapshot.docs.map(doc => doc.data());
        setWorkouts(workoutList);
        };
    
        fetchWorkouts();
    }, []);
      
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to Your Dashboard</h1>
          <p className={styles.subtitle}>Track your fitness activities and view your progress.</p>
          <WorkoutTracker />
          <LogoutButton className={styles.logoutButton} />
        </div>
      );

};
export default Dashboard;
