import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchContext } from '../SearchContext';

const Details = ({ navigation }) => {
  const { imageFocus } = useContext(SearchContext);
  const tagArray = imageFocus.tags.split(',');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageFocus.largeImageURL }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.userText}>Author: {imageFocus.user}</Text>
      <Text style={styles.labelText}>Tags: </Text>
      <FlatList
        data={tagArray}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push('Results', { search: item });
            }}
          >
            <Text style={[styles.tagText, styles.shadow]}>{item}</Text>
          </TouchableOpacity>
        )}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEB47B',
  },
  userText: {
    marginTop: 60,
    marginBottom: 90,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 1,
    backgroundColor: '#765285',
    color: '#fff',
  },
  image: {
    height: 300,
    width: 500,
  },
  tagText: {
    marginHorizontal: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#351C4D',
    color: '#fff',
  },
  labelText: {
    marginVertical: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Details;
