import { getData, containsKey, storeData, removeItem } from ".";
import data from "../data.json";
import { Workout } from "../types/data";


export const getWorkOut = async (): Promise<Workout[]> => {
    return await getData("workout-data");
}

export const initWorkout = async (): Promise<Boolean> => {
    if ( !(await containsKey("workout-data"))) {
        console.log("storing data ... ");
        await storeData("workout-data", data);
        return true;
    } 
    return false;


}

export const clearData = async () => {
    await removeItem("workout-data")
}