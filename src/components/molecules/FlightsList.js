import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../styles/FlightsList';
import flights from '../../utils/testflights'
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

const FlightsList = ({iconColor, iconSize}) => {
  const renderItem = ({item}) => {
    let passengersString = item.passengers + ' passeger';
    if (item.passengers !== '1') {
      passengersString += 's';
    }
    item.passengersString = passengersString;

    return <FlightItem item={item} />;
  };

  return (
    <FlatList
      data={flights}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FlightsList;
