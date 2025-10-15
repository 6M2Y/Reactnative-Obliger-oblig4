import React from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { Location } from '../Utility/Types';
import Styles from '../Utility/Styles';
import ButtonComponent from './ButtonComponent';

const LocationCard = (props: Location) => {
  return (
    <View style={Styles.locationCardStyles}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {props.locationName}
      </Text>
      <Image source={props.img} style={{ height: 150 }} />
      <Text style={{ fontSize: 16 }}>{props.text}</Text>
      <ButtonComponent
        title="les mer her"
        color="#97e2f0ff"
        action={props.action}
      />
    </View>
  );
};

export default LocationCard;
