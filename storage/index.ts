import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
        console.error(error.message)
    }
}

export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }   
     } catch (e:any) {
        console.error(e.message);
    }
}

export const containsKey = async (key:string) => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    } catch (error:any) {
        console.log(error.mesage);
    }
}

export const removeItem = async (key: string) => {
     try {
        await AsyncStorage.removeItem(key);
    } catch (err:any) {
        console.error(e.message);
    }

}