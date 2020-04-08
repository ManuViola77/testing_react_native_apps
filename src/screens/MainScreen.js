import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const MainScreen = ({navigation}) => {
  const goToAnotherScreen = () => navigation.navigate('AnotherScreen');

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goToAnotherScreen}>
        <Text>Press here to go to another screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
