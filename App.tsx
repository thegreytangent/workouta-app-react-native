import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';
import useCacheResources from './hooks/useCacheResources';

export default function App() {
  const isLoaded = useCacheResources();
  console.log("--- ", isLoaded);
  return (
    <>
    <Navigation /> 
      <StatusBar style='auto'></StatusBar> 
    </>
  );
}


