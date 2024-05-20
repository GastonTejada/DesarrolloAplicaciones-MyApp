import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from "../services/shopService";

const Avatar = () => {

  const dispatch = useDispatch()

  const {localId} = useSelector(state => state.auth.value)
  const {data: imageFromBase} = useGetProfileImageQuery(localId)

  return (
    <View style={[styles.container]}>
        {imageFromBase ?(
            <Image
                source={{uri: imageFromBase.image}}
                style={[styles.image, {  }]}
                resizeMode="cover"
            />
        )
        :(
            <Image
                source={require('../images/defaultProfile.png')}
                style={[styles.image, {  }]}
                resizeMode="cover"                
            />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.white,    
  },
  image: {
    borderRadius: 25,
    width: 25,
    height: 25
  },
});

export default Avatar;
