import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './expenses-list.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { FlatList } from 'react-native';
import ExpensesListProps from './interfaces';
import { Expense } from '@equalbill/stores/user/interfaces';
import SwipeActions from 'rn-swipe-actions-button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
const ExpensesList = ({ data, onDeleteExpense, onEditExpense }: ExpensesListProps) => {
  return (
    <GestureHandlerRootView style={Styles.container}>
      <Box style={Styles.container}>
        <TextFactory type="h3" style={Styles.title}>
          {'Expenses: '}
        </TextFactory>
        <FlatList
          data={data}
          style={Styles.list}
          ItemSeparatorComponent={() => <Spacer size={5} />}
          contentContainerStyle={Styles.content}
          renderItem={({ item, index }: { item: Expense; index: number }) => (
            <SwipeActions
              key={item.id}
              style={{
                backgroundColor: '#FFFF',

                shadowColor: 'gray',
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 2,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                borderRadius: 10,
                overflow: 'hidden',
              }}
              onPressButton={() => {}}
              rightActionsTotalWidthInPrecentages="50%"
              leftAction={{
                name: 'delete',
                buttonStyle: { backgroundColor: 'red' },
                textStyle: { color: '#FFFF' },

                onPress: () => {
                  onDeleteExpense(item);
                },
              }}
              rightActions={[
                {
                  name: 'edit',
                  buttonStyle: { backgroundColor: 'grey' },
                  textStyle: { color: '#FFFF' },
                  onPress: () => {
                    onEditExpense(item);
                  },
                },
              ]}
            >
              <Box key={item.id} style={Styles.list_item}>
                <TextFactory type="h5" style={Styles.item_title}>
                  {item.name}
                </TextFactory>
                <TextFactory type="h6" numberOfLines={2} style={Styles.item_text}>
                  {item.amount}
                </TextFactory>
              </Box>
            </SwipeActions>
          )}
        />
        {/* {data.map(item => (
          <Box
            style={{
              width: '100%',
            }}
          >
            <SwipeActions
              key={item.id}
              style={{
                backgroundColor: '#FFFF',

                shadowColor: 'gray',
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 2,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                borderRadius: 10,
                overflow: 'hidden',
              }}
              onPressButton={() => {}}
              rightActionsTotalWidthInPrecentages="50%"
              leftAction={{
                name: 'delete',
                buttonStyle: { backgroundColor: 'red' },
                textStyle: { color: '#FFFF' },

                onPress: () => {},
              }}
              rightActions={[
                {
                  name: 'edit',
                  buttonStyle: { backgroundColor: 'grey' },
                  textStyle: { color: '#FFFF' },
                  onPress: () => {},
                },
                {
                  name: 'save',
                  buttonStyle: { backgroundColor: 'purple' },
                  textStyle: { color: '#FFFF' },
                  onPress: () => {},
                },
                {
                  name: 'go',
                  buttonStyle: { backgroundColor: 'pink' },
                  textStyle: { color: '#FFFF' },
                  onPress: () => {},
                },
              ]}
            >
              <Box key={item.id} style={Styles.list_item}>
                <TextFactory type="h5" style={Styles.item_title}>
                  {item.name}
                </TextFactory>
                <TextFactory type="h6" numberOfLines={2} style={Styles.item_text}>
                  {item.amount}
                </TextFactory>
              </Box>
            </SwipeActions>
            <Spacer size={5} />
          </Box>
        ))} */}
      </Box>
    </GestureHandlerRootView>
  );
};

export default ExpensesList;
