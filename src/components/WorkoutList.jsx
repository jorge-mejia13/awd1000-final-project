import { useState } from "react";

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


    return (
        <div className="card card-body">
            <h5>Work List</h5>

            {workouts.length === 0 && <p>No workouts added yet.</p>}

            {workouts.length > 0 && (
                <ul className="list-group">
                    {workouts.map((workout) => {
                        return (
                            <li key={workout.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {editingId === workout.id ? (
                                // ✏️ EDIT MODE
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

                                    <button className="btn btn-sm btn-danger" onClick={() => deleteWorkout(workout.id)}>
                                        <i className="fas fa-trash">X</i>
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
                                        <i className="fas fa-edit">Edit</i>
                                    </button>
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