import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const WorkoutList = ({ workouts, setWorkouts, searchTerm }) => {
    const deleteWorkout = (id) => {
        const updatedWorkouts = workouts.filter((workout) => {
            return workout.id !== id;
        });

        setWorkouts(updatedWorkouts);
    }

    const [editingId, setEditingId] = useState(null);
    const [editWorkout, setEditWorkout] = useState({
        name: '',
        type: '',
        duration: '',
        calories: ''
    });

    const saveEdit = (id) => {
        const updatedWorkouts = workouts.map((workout) => {
            if (workout.id === id) {
            return {
                ...workout,
                ...editWorkout,
                duration: Number(editWorkout.duration),
                calories: Number(editWorkout.calories)
            };
            }
            return workout;
        });

        setWorkouts(updatedWorkouts);
        setEditingId(null);
    };

    const filteredWorkouts = workouts.filter((workout) => {
        return (
            workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            workout.type.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })


    return (
        <div className="mb-5">
            <h5>Workout List</h5>

            {filteredWorkouts.length === 0 && <p>No workouts added yet.</p>}

            {workouts.length > 0 && (
                <ul className="list-group">
                    {filteredWorkouts.map((workout) => {
                        return (
                            <li key={workout.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {editingId === workout.id ? (
                                <div className="w-100">
                                    <input
                                        className="form-control mb-1"
                                        value={editWorkout.name}
                                        onChange={(e) =>
                                        setEditWorkout({ ...editWorkout, name: e.target.value })
                                        }
                                    />
                                    <input
                                        className="form-control mb-1"
                                        value={editWorkout.type}
                                        onChange={(e) =>
                                            setEditWorkout({ ...editWorkout, type: e.target.value })
                                        }
                                    />
                                    <input
                                        type="number"
                                        className="form-control mb-1"
                                        value={editWorkout.duration}
                                        onChange={(e) =>
                                            setEditWorkout({ ...editWorkout, duration: e.target.value })
                                        }
                                    />
                                    <input
                                        type="number"
                                        className="form-control mb-2"
                                        value={editWorkout.calories}
                                        onChange={(e) =>
                                            setEditWorkout({ ...editWorkout, calories: e.target.value })
                                        }
                                    />

                                    <button
                                        className="btn btn-sm btn-success me-2"
                                        onClick={() => saveEdit(workout.id)}
                                    >
                                        Save
                                    </button>

                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => setEditingId(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                ) : (
                                <>
                                    <div>
                                        <div>{workout.name}</div>
                                        <div>{workout.type}</div>
                                        <div>{workout.duration} min</div>
                                        <div>{workout.calories} cal</div>
                                    </div>

                                    <div>
                                        <button className="btn btn-sm btn-danger mx-2" onClick={() => deleteWorkout(workout.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>

                                        <button className="btn btn-sm btn-warning" 
                                            onClick={() => {
                                                setEditingId(workout.id)
                                                setEditWorkout({
                                                    name: workout.name,
                                                    type: workout.type,
                                                    duration: workout.duration,
                                                    calories: workout.calories
                                                })
                                            }}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    </div>
                                </>
                                )}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default WorkoutList;