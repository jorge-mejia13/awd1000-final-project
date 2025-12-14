import { useEffect, useState } from 'react'
import Header from './components/Header'
import WorkoutForm from './components/WorkoutForm'
import WorkoutList from './components/WorkoutList'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import './App.css'

const KEY = 'workouts';

function App() {
  // load workouts in local storage
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem(KEY);

    if (savedWorkouts) {
      return JSON.parse(savedWorkouts);
    }
    
    return [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  // save new workouts to localstorage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(workouts))
  }, [workouts])

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />
          <SearchBar setSearchTerm={setSearchTerm} />
          <WorkoutList workouts={workouts} setWorkouts={setWorkouts} searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
