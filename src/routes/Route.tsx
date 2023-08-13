import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppWriteContext} from '../appWrite/AppWriteContext';
import Loader from '../components/Loader/Loader';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Route = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const {isLoggedIn, setLoggedIn, appwrite} = useContext(AppWriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setLoading(false);
        if (response) {
          setLoggedIn(true);
        }
      })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
      });
  }, [appwrite, setLoggedIn]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Route;
