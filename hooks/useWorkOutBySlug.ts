import { useEffect, useState } from 'react';

import { getWorkoutBySlug } from '../storage/workout';
import { Workout } from '../types/data';


export const useWorkOutBySlug = (slug: string) => {
    const [workoutBySlug, setWorkoutBySlug] = useState<Workout>();
    
    useEffect(() => {
        const getData = async () => {
            const _getWorkout = await getWorkoutBySlug(slug);
            setWorkoutBySlug(_getWorkout);
        }
        getData();
    }, [])

    return workoutBySlug;
}
