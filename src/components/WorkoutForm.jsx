import { useState } from "react";

const WorkoutForm = ({ workouts, setWorkouts }) => {

    const [workout, setWorkout] = useState({
        name: '',
        type: '',
        duration: '',
        calories: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkout({ ...workout, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWorkout = {
            ...workout,
            id: Date.now(),
            duration: parseInt(workout.duration),
            calories: parseInt(workout.calories)
        }

        setWorkouts([...workouts, newWorkout])

        setWorkout({
            name: '',
            type: '',
            duration: '',
            calories: ''
        });
    }

    return (
        <form className="py-4" onSubmit={handleSubmit}>
            <h4 className="mb-3">Add New Workout</h4>

            <div className="row">
                <div className="col-md-3 mb-3">
                    <label htmlFor="name" className="mb-2">Workout Name</label>
                    <input type="text" className="form-control" placeholder="Workout Name" id="name" name="name" value={workout.name} onChange={handleChange} required/>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="Type" className="mb-2">Type</label>
                    <input type="text" className="form-control" placeholder="Type (cardio, strength)" id="type" name="type" value={workout.type} onChange={handleChange} required/>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="duration" className="mb-2">Duration</label>
                    <input type="number" className="form-control" placeholder="Duration (minutes)" id="duration" name="duration" value={workout.duration} onChange={handleChange} required/>
                </div>
                <div className="col-md-3 mb-3">
                    <label htmlFor="calories" className="mb-2">Calories Burned</label>
                    <input type="text" className="form-control" placeholder="Calories Burned" id="calories" name="calories" value={workout.calories} onChange={handleChange} required/>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add Workout</button>
        </form>
    )
}

export default WorkoutForm;