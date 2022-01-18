import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import styles from '../../styles/FlightLocations';

const GetMonthName = monthNumber => {
  const monthNames = [
    '',
    'January',
    'February',
    'March',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  return monthNames[parseInt(monthNumber)];
};

const NiceDate = date => {
  let dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const day = parseInt(dateObj.getDate()) + 1;
  const month = parseInt(dateObj.getMonth()) + 1;
  const result = `${GetMonthName(month)} ${day}, ${year}`;
  return result;
};

const FlightLocations = ({from, to, date, passengers}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flightItem}>
        <View style={styles.flightItemRow}>
          <Text style={styles.flightTextRow1}>{from.shortname}</Text>
          <Icon style={styles.icon} name="airplane" type="ionicon" />
          <Text style={[styles.flightTextRow1, styles.rightText]}>
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
      <View style={styles.footerRow}>
        <Text style={styles.date}>
          {date !== undefined ? NiceDate(date) : null}
        </Text>
        {passengers !== undefined ? (
          <Text style={styles.date}>{passengers} passengers</Text>
        ) : null}
      </View>
    </View>
  );
};

export default FlightLocations;
