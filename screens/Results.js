import React, { useState, useCallback, useEffect, useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API_KEY } from '@env';
import { SearchContext } from '../SearchContext';

const Results = ({ navigation, route }) => {
  const { search } = route.params;
  const { imageData, setImageData, setImageFocus } = useContext(SearchContext);
  const [pageValue, setPageValue] = useState(1);

  const getData = useCallback(async () => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&page=${pageValue}`;
    const results = await fetch(url);
    if (results.ok) {
      const data = await results.json();
      data.total > 0
        ? setImageData((prevData) => [...prevData, ...data.hits])
        : setImageData(false);
    }
    setPageValue(pageValue + 1);
  }, [pageValue]);

  useEffect(() => {
    setImageData([]);
    setPageValue(1);
    getData();
  }, [search]);

  return (
    <View style={styles.container}>
      {imageData ? (
        <FlatList
          numColumns={2}
          data={imageData}
          keyExtractor={(item) => item.id}
          style={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setImageFocus(item);
                navigation.push('Details');
              }}
            >
              <Image
                style={styles.pictures}
                source={{ uri: item.previewURL }}
              />
            </TouchableOpacity>
          )}
          onEndReached={getData}
          onEndReachedThreshold={0.3}
        />
      ) : (
        <Text>Sorry, there were no results for your query.</Text>
      )}
      <Image
        style={styles.pixabayImage}
        source={{
          uri: 'https://pixabay.com/static/img/logo.png',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  },
  pictures: {
    width: 195,
    height: 195,
  },
  pixabayImage: {
    width: 280,
    height: 50,
  },
});

export default Results;
