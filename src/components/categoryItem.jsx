import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Pressable, View, Dimensions, Image , FlatList} from 'react-native';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from "../features/Shop/shopSlice";
import Card from './Card';
import { colors } from '../constants/colors';

import { useGetMoviesByCategoryLimit10Query } from "../services/shopService";

const { width: screenWidth } = Dimensions.get('window');

const CategoryItem = ({ genre, navigation }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const { data: moviesFetched, error: errorFromFetch, isLoading } = useGetMoviesByCategoryLimit10Query(genre);

  useEffect(() => {
    if (moviesFetched) {
      setMovies(moviesFetched);
    }
  }, [moviesFetched]);

  const handleNavigate = () => {
    dispatch(setCategorySelected(genre));
    navigation.navigate('ItemListCategory', { genre });
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
  
  return (
      <Card style={styles.card}>
        <Pressable onPress={handleNavigate} style={styles.pressable}>
          <Text style={styles.text}>{genre}</Text>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={true}
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                snapToInterval={screenWidth / 3.5}
              />          
        </Pressable>
      </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
    marginVertical: 5,
    marginHorizontal: 0, 
  },
  text: {
    color: colors.platinum,
    textAlign: 'left',
    justifyContent: 'flex-start',
    fontSize: 22,
    marginStart: 30,
    marginTop:30,
  },
  pressable: {
    marginBottom: 0,
    width: '100%',
  },
  slide: {
    height: 240,
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    top: -40,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
});

export default CategoryItem;
