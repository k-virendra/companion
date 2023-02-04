import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FONTS } from '@/theme/fonts';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export function Button({ style, textStyle, title, ...rest }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor:'#192537' }, style]}
      {...rest}
    >
      <Text style={[{ color: '#FFFFFF',fontSize:18,fontFamily: FONTS.PoppinsRegular, fontWeight: '600', fontStyle:'normal', }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
