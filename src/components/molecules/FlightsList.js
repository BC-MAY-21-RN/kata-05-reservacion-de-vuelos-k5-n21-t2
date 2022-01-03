import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/FlightsList';
import flights from '../../utils/testflights'

const FlightItem = ({item, passengersString}) => {
  return (
    <View style={styles.flightItem}>
      <View style={styles.flightItemRow}>
        <Text style={styles.flightTextRow1}>{item.from.shortname}</Text>
        <Icon style={styles.icon} name="airplane" type="ionicon" />
        <Text style={styles.flightTextRow1}>{item.to.shortname}</Text>
      </View>
      <View style={[styles.flightItemRow2, styles.flightItemRow]}>
        <Text style={styles.flightTextRow2}>{item.from.longname}</Text>
        <Text style={styles.flightTextRow2}>{item.to.longname}</Text>
      </View>
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
