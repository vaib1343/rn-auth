import React, {useContext} from 'react';
import {FAB} from '@rneui/themed';
import Snackbar from 'react-native-snackbar';
import {StyleSheet, Text, View} from 'react-native';
import {AppWriteContext} from '../appWrite/AppWriteContext';

type userObject = {
  name: string;
  email: string;
};

const Home = () => {
  const {setLoggedIn, appwrite} = useContext(AppWriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setLoggedIn(false);
      Snackbar.show({
        text: 'Logout successfully',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
