import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import MainStack from './MainStack';
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query';

const queryClient = new QueryClient()

const Router = () => {
  const [loaded, error] = useFonts({
    'bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });


  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Router;