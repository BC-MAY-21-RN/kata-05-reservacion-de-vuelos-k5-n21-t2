import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import styles from '../../styles/FlightLocations';

const FlightLocations = ({from, to}) => {
  return (
    <View style={styles.flightItem}>
      <View style={styles.flightItemRow}>
        <Text style={styles.flightTextRow1}>{from.shortname}</Text>
        <Icon style={styles.icon} name="airplane" type="ionicon" />
        <Text style={styles.flightTextRow1}>
          {to !== undefined ? to.shortname : null}
        </Text>
      </View>
      <View style={[styles.flightItemRow2, styles.flightItemRow]}>
        <Text style={styles.flightTextRow2}>{from.longname}</Text>
        <Text style={styles.flightTextRow2}>
          {to !== undefined ? to.longname : null}
        </Text>
      </View>
    </View>
  );
};

export default FlightLocations;
