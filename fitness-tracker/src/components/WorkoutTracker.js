import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState(''); // State for workout name
  const [weight, setWeight] = useState(''); // State for weight
  const [date, setDate] = useState(''); // State for workout date
  const [workouts, setWorkouts] = useState([]); // State to hold list of workouts
  const [isEditing, setIsEditing] = useState(false); // State for toggling edit mode
  const [currentWorkoutId, setCurrentWorkoutId] = useState(null); // State for current workout being edited

  // Fetch workouts from Firestore when component mounts
  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutsCollection = collection(db, 'workouts');
      const workoutSnapshot = await getDocs(workoutsCollection);
      const workoutList = workoutSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWorkouts(workoutList);
    };
    fetchWorkouts();
  }, []);

  // Function to handle adding a new workout
  const handleAddWorkout = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'workouts'), { name: workout, weight, date });
      setWorkouts([...workouts, { id: docRef.id, name: workout, weight, date }]);
      setWorkout('');
      setWeight('');
      setDate('');
    } catch (error) {
      console.error("Error adding workout: ", error);
    }
  };

  // Function to handle editing a workout
  const handleEditWorkout = (id, name, weight, date) => {
    setIsEditing(true);
    setCurrentWorkoutId(id);
    setWorkout(name);
    setWeight(weight);
    setDate(date);
  };

  // Function to update an existing workout
  const handleUpdateWorkout = async (e) => {
    e.preventDefault();
    const workoutDoc = doc(db, 'workouts', currentWorkoutId);
    await updateDoc(workoutDoc, { name: workout, weight, date });
    setWorkouts(workouts.map((w) => (w.id === currentWorkoutId ? { ...w, name: workout, weight, date } : w)));
    setWorkout('');
    setWeight('');
    setDate('');
    setIsEditing(false);
  };

  // Function to delete a workout
  const handleDeleteWorkout = async (id) => {
    await deleteDoc(doc(db, 'workouts', id));
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <div>
      <h2>Track Your Workouts</h2>
      <form onSubmit={isEditing ? handleUpdateWorkout : handleAddWorkout}>
        <input
          type="text"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          placeholder="Enter workout"
          required
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">{isEditing ? 'Update Workout' : 'Add Workout'}</button>
      </form>

      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            {w.name} - {w.weight} kg - {w.date}
            <button onClick={() => handleEditWorkout(w.id, w.name, w.weight, w.date)}>Edit</button>
            <button onClick={() => handleDeleteWorkout(w.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutTracker;
