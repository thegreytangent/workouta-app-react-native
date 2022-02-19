
import { useEffect, useState } from "react";
import * as Font from 'expo-font';
import { storeData, getData, containsKey } from '../storage/index';
import data from '../data.json';

export default function useCacheResources() {
    // isLoadingComplete -> value, setIsLoadingComplete -> mutator
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        console.log("useEffect executed");
       async function loadResourcesAndDataAsync() {
            try {
            if ( !(await containsKey("workout-data"))) {
                console.log("store key");
                await storeData("workout-data", data);
            }
           
            await Font.loadAsync({
                   "shizuru" : require("../assets/fonts/Shizuru-Regular.ttf"),
                   "tacFont" : require("../assets/fonts/SyneTactile-Regular.ttf") 
                })
                console.log("Font loaded");
            } catch (e) {
                console.warn(e);
            } finally {
                const workouts = await getData('workout-data');
                console.log("----", workouts);
                setIsLoadingComplete(true)
            }
        }
        loadResourcesAndDataAsync();
    }, [])

    return isLoadingComplete;


} 