
import { useEffect, useState } from 'react';
import { Workout } from '../types/data';
import { getWorkOuts } from '../storage/workout'
import { useIsFocused } from '@react-navigation/native';

export const useWorkOuts = () => {
    const [workouts, setWorkout] = useState<Workout[]>([]);
    const isFocused = useIsFocused();
    useEffect(() => {
        const getData = async () => {
            const _getWorkout = await getWorkOuts();
            setWorkout(_getWorkout);
        }
        getData();
    }, [isFocused])

    return workouts;
}
