import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CardComponent = ({stateName, confirmed, death, recovered}) => {
  const sortData = data => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.confirmed > b.confirmed) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };
  return (
    <View style={styles.row}>
      <Text style={styles.state}>{stateName}</Text>
      <View style={styles.card}>
        <View style={styles.confirmed}>
          <Text style={styles.typeHeader}>CONFIRMED</Text>
          <Text style={styles.blueBody}>Total</Text>
          <Text style={styles.blueNumber}>{confirmed}</Text>
        </View>
        <View style={styles.recovered}>
          <Text style={styles.typeHeader}>RECOVERED</Text>
          <Text style={styles.greenBody}>Total</Text>
          <Text style={styles.greenNumber}>{recovered}</Text>
        </View>
        <View style={styles.death}>
          <Text style={styles.typeHeader}>DEATH</Text>
          <Text style={styles.redBody}>Total</Text>
          <Text style={styles.redNumber}>{death}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  typeHeader: {
    color: '#808080',
    marginBottom: 10,
    fontSize: 15,
  },
  blueBody: {
    marginBottom: 10,
    color: '#0080ff',
  },
  blueNumber: {
    marginBottom: 5,
    fontSize: 15,
    color: '#0080ff',
    fontSize: 20,
  },
  redBody: {
    marginBottom: 10,
    color: '#ff001e',
  },
  redNumber: {
    marginBottom: 5,
    fontSize: 20,
    color: '#ff001e',
  },
  greenBody: {
    marginBottom: 10,
    color: '#05b520',
  },
  greenNumber: {
    marginBottom: 5,
    fontSize: 20,
    color: '#05b520',
  },

  row: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 15,
    padding: 10,
  },
  state: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
});

export default CardComponent;
