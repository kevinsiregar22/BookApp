import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Poppins = ({type = 'Regular', children, color = 'black', size = 14}) => {
  //styled
  const style = StyleSheet.create({
    text: {
      fontFamily: `Poppins-${type}`,
      color: color,
      fontSize: size,
    },
  });
  return (
    <Text testID="text component" style={style.text}>
      {children}
    </Text>
  );
};

export default Poppins;
