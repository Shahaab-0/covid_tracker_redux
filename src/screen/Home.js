import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect, useSelector} from 'react-redux';
import {getState, getApi} from '../actions/HomeAction';
import CardComponent from './CardComponent';

const Home = props => {
  const [state, setstate] = useState(true);
  useEffect(() => {
    props.getApi();
    setTimeout(() => {
      setstate(false);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>COVID-19 Tracker Live Data</Text>
      <Text style={styles.subText}>Type the state name</Text>
      <View style={styles.searchSection}>
        <Feather style={styles.searchIcon} name="search" color="black" />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="black"
          value={props.getInputState}
          onChangeText={value => {
            props.getState(value);
          }}
        />
      </View>
      {state ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={{height: 550}}>
          <FlatList
            data={props.getStateApi}
            initialNumToRender={40}
            renderItem={({item}) => (
              <CardComponent
                stateName={item.state}
                confirmed={item.confirmed}
                death={item.deaths}
                recovered={item.recovered}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0080ff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  searchSection: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingVertical: 2,
    marginBottom: 15,
  },
  header: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  subText: {
    color: 'white',
    fontSize: 16,
    width: '85%',
    alignSelf: 'center',
  },
  input: {
    fontSize: 17,
  },
  searchIcon: {
    paddingRight: 10,
    fontSize: 20,
  },
});

function mapStateToProps(state) {
  return {
    getInputState: state.home.state,
    getStateApi: state.home.api,
  };
}

export default connect(mapStateToProps, {
  getState,
  getApi,
})(Home);
