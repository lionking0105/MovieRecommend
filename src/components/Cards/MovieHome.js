import React from 'react';
import StarRating from 'react-native-star-rating';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
const MovieHome = ({movie}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: movie.movieImage}} style={styles.img} />
      <View style={styles.detail}>
        <Text style={styles.name}>{movie.movieTitle}</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={Number(movie.mean_rating)}
          containerStyle={styles.star}
          starSize={10}
          selectedStar={rating => this.onStarRatingPress(rating)}
          fullStarColor={'red'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    borderRadius: 20,
    marginRight: 8,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  detail: {
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0.8,
  },
  name: {
    left: '10%',
    top: '0%',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
  starStyle: {
    margin: -11,
  },
  star: {
    left: '-2%',
    top: '2%',
    width: 40,
  },
});
export default MovieHome;
