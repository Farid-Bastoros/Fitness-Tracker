import React from 'react';
import LogoutButton from '../components/LogoutButton';
import WorkoutTracker from '../components/WorkoutTracker'; // Import the WorkoutTracker component

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
    return (
      <div>
        <h1>Welcome to Your Dashboard</h1>
        <p>Dashboard content is rendering!</p>
        <WorkoutTracker />
        <LogoutButton />
      </div>
    );
  };
export default Dashboard;
