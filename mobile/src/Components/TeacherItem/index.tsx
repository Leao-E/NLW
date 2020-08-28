import React, { useState } from 'react';

import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface Teacher{
  id: number,
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string,
}

interface TeacherItemProps {
  teacher: Teacher,
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function handleFavoriteButton(){
    setIsFavorited(!isFavorited);
  }

  function handleLinkToWhatsApp(){
    Linking.openURL(`whatsapp://send?text=Hello World!&phone=${teacher.whatsapp}`);    
  }

  const [ isFavorited, setIsFavorited ] = useState(false);  

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: teacher.avatar}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora{'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost},00 </Text>
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
          <RectButton onPress={handleLinkToWhatsApp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;