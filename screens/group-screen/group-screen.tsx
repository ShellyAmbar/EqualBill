import { Image } from 'react-native';
import React from 'react';
import styles from './group-screen.styles';

import CollapsingScroll from '@equalbill/components/collapsing-scroll/collapsing-scroll';
import { Box } from '@equalbill/components/controllers/box/box';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ActionsFloatingButton from 'rn-actions-floating-button';
import useGroupScreen from './hooks/useGroupScreen';
import Popup from 'rn-sliding-popup';
import { VisiblePopup } from './hooks/interfaces';
import HorizontalUsersSlider from '@equalbill/components/horizontal-users-slider/horizontal-users-slider';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { LinearGradient } from 'expo-linear-gradient';
import ExpensesList from './expenses-list/expenses-list';
import ExpenseForm from './expense-form/expense-form';
import { Group } from '@equalbill/stores/user/interfaces';
import { observer } from 'mobx-react';
import UserStore from '@equalbill/stores/user/user-store';
import HorizontalTabsSlider from '@equalbill/components/horizontal-tabs-slider/horizontal-tabs-slider';
import PagerView from '@equalbill/components/pager-view/pager-view';

const GroupScreen = observer(({ route, navigation }) => {
  const { group: groupFromProps }: { group: Group } = route.params;

  const onclickBack = () => {
    navigation.goBack();
  };

  const {
    currentVisiblePopup,
    setCurrentVisiblePopup,
    setSelectedUser,
    expenses,
    setExpenseToEdit,
    expenseToEdit,
    updateExpense,
    deleteExpense,
    addExpense,
    group,
    setGroup,
  } = useGroupScreen({ groupItem: groupFromProps });

  return (
    <Box style={styles.container}>
      <Popup
        onClickClose={() => {
          setCurrentVisiblePopup(VisiblePopup.NONE);
        }}
        isVisible={currentVisiblePopup === VisiblePopup.ADD_EXPENSE}
      >
        <ExpenseForm
          titleText="Create Expense"
          buttonText="Add"
          onConfirm={expense => {
            addExpense(expense);
            setCurrentVisiblePopup(VisiblePopup.NONE);
          }}
        />
      </Popup>

      <Popup
        onClickClose={() => {
          setCurrentVisiblePopup(VisiblePopup.NONE);
        }}
        isVisible={currentVisiblePopup === VisiblePopup.EDIT_EXPENSE}
      >
        <ExpenseForm
          titleText="Edit Expense"
          buttonText="Update"
          onConfirm={expense => {
            updateExpense(expense);
            setCurrentVisiblePopup(VisiblePopup.NONE);
          }}
          expense={expenseToEdit}
        />
      </Popup>

      <CollapsingScroll
        scrollProps={{ contentContainerStyle: { paddingBottom: 16 } }}
        onClickBack={onclickBack}
        showBackButton
        constantTopBackground={() => (
          <Box style={{ width: '100%', height: '100%' }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent']}
              start={[0, 1]}
              end={[1, 1]}
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
            />
            <Image
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}
              source={{
                uri: group?.url
                  ? group.url
                  : 'https://www.treehugger.com/thmb/IAlZGVzhRLGZL_E0zSv7qbzyGRA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg',
              }}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'transparent']}
              start={[1, 1]}
              end={[1, 0]}
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
            />
          </Box>
        )}
        image={() => (
          <Box style={{ width: '100%', height: '100%' }}>
            <TextFactory style={styles.title} type="h2">
              {group?.name ?? ''}
            </TextFactory>
          </Box>
        )}
      >
        <Box style={styles.container}>
          <HorizontalTabsSlider
            isDeletable={true}
            isMultySelection={true}
            dataList={[
              { index: 0, name: 'hgjh' },
              {
                index: 1,
                name: 'hjghjgjhg',
                url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg',
              },
              { index: 2, name: 'gjhgjhg', url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' },
              { index: 3, name: 'hjghjg' },
              { index: 4, name: 'hjgh', url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' },
              { index: 5, name: 'hjghg', url: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' },
            ]}
          />
          <PagerView />

          <TextFactory type="h4" style={styles.subTitle}>
            {'Participents: '}
          </TextFactory>
          <HorizontalUsersSlider
            data={[...group.users, UserStore.user]}
            onPressItem={item => {
              setSelectedUser(item);
            }}
          />
          <Spacer size={16} />
          <TextFactory type="h4" style={styles.subTitle}>
            {'Expenses: '}
          </TextFactory>
          <Spacer size={16} />
          <ExpensesList
            data={expenses}
            onDeleteExpense={expense => {
              deleteExpense(expense);
            }}
            onEditExpense={expense => {
              setExpenseToEdit(expense);
              setCurrentVisiblePopup(VisiblePopup.EDIT_EXPENSE);
            }}
          />
        </Box>
      </CollapsingScroll>
      <ActionsFloatingButton
        style={{ position: 'absolute', bottom: 150, end: 50 }}
        actionButtons={[
          {
            id: 0,
            icon: () => <MaterialIcons name="create" size={30} color="#FFFF" />,
            onClick: () => {
              navigation.navigate('GroupGenerator', {
                groupToUpdate: group,
                onUpdate: (groupToUpdate: Group) => {
                  setGroup(groupToUpdate);
                },
              });
            },
          },
          {
            id: 1,
            icon: () => <Ionicons name="add" size={30} color="#FFFF" />,
            onClick: () => {
              setCurrentVisiblePopup(VisiblePopup.ADD_EXPENSE);
            },
          },
        ]}
        animateMainButton
      />
    </Box>
  );
});

export default GroupScreen;
