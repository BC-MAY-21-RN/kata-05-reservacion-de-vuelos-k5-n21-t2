import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../styles/FlightsList';
import FlightLocations from './FlightLocations';

const FlightItem = ({item}) => {
  return (
    <View style={styles.flightItem}>
      <FlightLocations from={item.from} to={item.to} />
      <View style={styles.flightItemRow}>
        <Text style={styles.flightTextRow3}>{item.date}</Text>
        <Text style={styles.flightTextRow3}>{item.passengersString}</Text>
      </View>
    </View>
  );
};

const FlightsList = ({flights}) => {
  const renderItem = ({item}) => {
    let passengersString = item.passengers + ' passenger';
    if (item.passengers !== '1') {
      passengersString += 's';
    }
    item.passengersString = passengersString;

    return <FlightItem item={item} />;
  };

  return (
    <>
      {flights.length > 0 ? null : (
        <Text style={styles.empty}>No se encontraron vuelos</Text>
      )}
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default FlightsList;
