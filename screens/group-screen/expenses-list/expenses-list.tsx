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
        <FlatList
          data={data}
          style={Styles.list}
          ItemSeparatorComponent={() => <Spacer size={5} />}
          contentContainerStyle={Styles.content}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }: { item: Expense; index: number }) => {
            return (
              <SwipeActions
                key={item.id}
                style={Styles.swipe_item}
                onPressButton={() => {}}
                onEndSwipeLeft={() => {
                  onDeleteExpense && onDeleteExpense(item);
                }}
                rightActionsTotalWidthInPrecentages="50%"
                leftAction={{
                  name: 'delete',
                  buttonStyle: { backgroundColor: 'red' },
                  textStyle: { color: '#FFFF' },
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
            );
          }}
        />
      </Box>
    </GestureHandlerRootView>
  );
};

export default ExpensesList;
