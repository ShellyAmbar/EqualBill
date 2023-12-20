import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './expense-form.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import ReactiveTextInput from 'rn-reactive-text-input';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import KeyboardAvoidingView from 'rn-keyboard-avoiding-view';
import Button from '@equalbill/components/controllers/button/button';
import { GlobalColors } from '@equalbill/styles/global-colors';
import ExpenseFormProps from './interfaces';
import useExpenseForm from './hooks/useExpenseForm';

const ExpenseForm = ({ titleText, buttonText, expense, onConfirm }: ExpenseFormProps) => {
  const { expenseToEdit, setExpenseToEdit } = useExpenseForm();
  return (
    <Box scroll style={Styles.container}>
      <KeyboardAvoidingView>
        <TextFactory type="h2" style={Styles.title}>
          {titleText}
        </TextFactory>
        <Spacer size={16} />
        <TextFactory type="h4" style={Styles.subtitle}>
          {"What's the name of the expense?"}
        </TextFactory>
        <ReactiveTextInput
          textInputStyle={Styles.textInput}
          defaultValue={expense ? expense.name : ''}
          placeholder={expense ? expense.name : 'Expense name'}
          onChangeText={text => {
            expenseToEdit.name = text;
            setExpenseToEdit(expenseToEdit);
          }}
        />
        <Spacer size={12} />
        <TextFactory type="h4" style={Styles.subtitle}>
          {"What's the amount?"}
        </TextFactory>
        <ReactiveTextInput
          textInputStyle={Styles.textInput}
          defaultValue={expense ? expense.amount : ''}
          placeholder={expense ? expense.amount : 'Expense emount'}
          onChangeText={text => {
            expenseToEdit.amount = text;
            setExpenseToEdit(expenseToEdit);
          }}
        />
        <Spacer size={60} />
        <Button
          onPress={() => onConfirm(expenseToEdit)}
          label={buttonText}
          style={{
            width: '70%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 30,
            borderColor: GlobalColors.Brand.primary,
            alignSelf: 'center',
          }}
          lableStyle={{ color: GlobalColors.Brand.primary }}
        />
        <Spacer size={60} />
      </KeyboardAvoidingView>
    </Box>
  );
};

export default ExpenseForm;
