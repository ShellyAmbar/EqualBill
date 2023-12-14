import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import DirectionDown from '@equalbill/assets/images/direction-down.svg';
import DirectionUp from '@equalbill/assets/images/direction-up.svg';
const DropDown = ({
  listOfOptions = [],
  style,
  onSelectedItem,
  defaultSelectedIndex = 0,
}: {
  listOfOptions?: any[];
  style?: any;
  onSelectedItem?: (itemIndex: number) => void;
  defaultSelectedIndex?: number;
}) => {
  const [isopen, setisopen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(defaultSelectedIndex);
  }, [defaultSelectedIndex]);

  const selectScaleHandler = (index: number) => {
    setSelectedIndex(index);
    setisopen(false);
  };

  return (
    <View style={[styles.vertical, { ...style }]}>
      <TouchableOpacity
        style={styles.horizontal}
        onPress={() => {
          setisopen(!isopen);
        }}
      >
        <Text style={styles.regularText}>{listOfOptions[selectedIndex]}</Text>

        {isopen ? <DirectionUp /> : <DirectionDown />}
      </TouchableOpacity>

      {isopen && (
        <View style={styles.circularRectangle}>
          {listOfOptions &&
            listOfOptions.map((option, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    selectScaleHandler(option);
                  }}
                  key={option.foodScaleId}
                  style={styles.optionItem}
                >
                  <Text style={styles.textItem}>{option.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      )}
    </View>
  );
};

export default DropDown;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#261E33',
    fontWeight: '600',
    marginBottom: 20,
  },

  circularRectangle: {
    top: 10,
    width: '100%',
    marginTop: 20,
    zIndex: 1000,
    position: 'absolute',

    paddingVertical: 20,

    backgroundColor: '#FBFDFF',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  regularText: {
    color: '#9B0BF9',
    fontSize: 16,
    flex: 1,
  },

  horizontal: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  vertical: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',

    zIndex: 1000,
  },
  optionItem: {
    paddingVertical: 10,
  },
  textItem: {
    fontSize: 16,
    color: '#950BEF',
    alignSelf: 'flex-start',
  },
});
