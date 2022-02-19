import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';
import useCacheResources from './hooks/useCacheResources';

export default function App() {
  const isLoaded = useCacheResources();
  if (isLoaded) {
    return (
      <>
      <Navigation /> 
        <StatusBar style='auto'></StatusBar> 
      </>
    );
  } else {
    return null;
  }

}


