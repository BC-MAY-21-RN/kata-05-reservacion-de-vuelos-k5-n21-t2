import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/FlightsList';

const flights = [
  {
    id: '123123123',
    date: 'september 3, 2020',
    passengers: '2',
    from: {
      longname: 'Serbia',
      shortname: 'BEG',
    },
    to: {
      longname: 'Netherlands',
      shortname: 'AMS',
    },
  },
  {
    id: '123123423',
    date: 'November 3, 2021',
    passengers: '4',
    from: {
      longname: 'Serbia4',
      shortname: 'BEGG',
    },
    to: {
      longname: 'Netherlands4',
      shortname: 'AMS4',
    },
  },
  {
    id: '223123123',
    date: 'september 5, 1020',
    passengers: '2',
    from: {
      longname: 'Serbi6',
      shortname: 'BEG6',
    },
    to: {
      longname: 'Netherlands',
      shortname: 'AMS6',
    },
  },
  {
    id: '123123133',
    date: 'september 7, 2020',
    passengers: '7',
    from: {
      longname: 'Serbia7',
      shortname: 'BEG7',
    },
    to: {
      longname: 'Netherlands7',
      shortname: 'AMS7',
    },
  },
];

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
