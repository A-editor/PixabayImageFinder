import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = useCallback(() => {
    if (!searchValue) {
      Alert.alert('Please enter a search term');
    } else {
      navigation.navigate('Results', { search: searchValue });
      setSearchValue('');
    }
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.shadow]}
        value={searchValue}
        onChangeText={setSearchValue}
        maxLength={100}
        placeholder={'Enter a search term...'}
        placeholderTextColor={'#765285'}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={[styles.submitButton, styles.shadow]}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FEB478',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '75%',
    borderWidth: 2,
    borderColor: '#FE7E5F',
    backgroundColor: '#fff',
    padding: 20,
  },
  submitButton: {
    backgroundColor: '#765285',
    padding: 20,
    borderWidth: 2,
    borderColor: '#351C4D',
  },
  submitText: {
    color: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default Search;
