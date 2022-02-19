
import { useEffect, useState } from "react";
import * as Font from 'expo-font';

export default function useCacheResources() {
    // isLoadingComplete -> value, setIsLoadingComplete -> mutator
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        console.log("useEffect executed");
       async function loadResourcesAndDataAsync() {
            try {
            console.log("Load fonts");
            await Font.loadAsync({
                   "shizuru" : require("../assets/fonts/Shizuru-Regular.ttf"),
                   "tacFont" : require("../assets/fonts/SyneTactile-Regular.ttf") 
                })
                console.log("Font loaded");
            } catch (e) {
                console.warn(e);
            } finally {
                setIsLoadingComplete(true)
            }
        }
        loadResourcesAndDataAsync();
    }, [])

    return isLoadingComplete;


} 