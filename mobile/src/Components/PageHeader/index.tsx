import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

function PageHeader () {

  const { navigate } = useNavigation();

  function handleGoBack (){
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain'/>       
        </BorderlessButton>    
        <Image source={logoImg} resizeMode='contain'/>             
      </View>
    </View>
  );
}

export default PageHeader;