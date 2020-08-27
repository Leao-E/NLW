import React, { useState } from 'react';

import { View, Image, Text } from 'react-native';
import Br from '../Utils/Br';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem () {

  function handleFavoriteButton(){
    setIsFavorited(!isFavorited);
  }

  const classPrice = (Math.random() * 100);

  const [ isFavorited, setIsFavorited ] = useState(false);  

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/Leao-E.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Emanuel Leão</Text>
          <Text style={styles.subject}>React Native</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu blandit nisi.   
        <Br/><Br/>
        In condimentum, dolor id molestie scelerisque, nunc justo efficitur mi, vehicula aliquam justo magna nec ante. Sed eros quam, interdum sit amet nisi nec, mollis tristique dolor.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'   '}
          <Text style={styles.priceValue}>R$ {classPrice.toFixed(2)}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={isFavorited
            ? [styles.favoriteButton, styles.favorited]
            : [styles.favoriteButton]}
            onPress={handleFavoriteButton}
          >
            {isFavorited  
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }                
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;