import React from 'react';

import style from './style';
import {Image, View, ScrollView} from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/display-picture-11.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/display-picture-2.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/display-picture-3.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/display-picture-4.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/display-picture-5.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;