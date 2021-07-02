import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import InputBox from '../src/components/InputBox';
import TodoList from '../src/components/TodoList';
import ShowModal from '../src/components/ShowModal';
import EditContent from '../src/components/EditContent';
import BottomTabs from '../src/components/BottomTabs';

import { TodoContext, TodoProvider } from '../src/context/TodoContext';
import { ModalProvider, ModalContext } from '../src/context/ModalContext';

function HomeScreen() {
  useStatusBar('dark-content');
 
   const { state, addTodo, getLocalData, saveData } = useContext(TodoContext);
  const { state: isVisible } = useContext(ModalContext);
  const { container, title } = styles;

  useEffect(() => {
    getLocalData();
  }, []);

  useEffect(() => {
    saveData(state);
  }, [state]);
  return (
    <View style={styles.container}>
     <View style={styles.fixToText}>
      
      </View>
       <StatusBar
        backgroundColor="#2680c2"
        barStyle="light-content"
        translucent
      />
      
      <InputBox initialState="" iconName="edit-2" callback={addTodo} />
      <TodoList />
      <BottomTabs />
      <ShowModal isVisible={isVisible}>
        <EditContent />
      </ShowModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    marginTop: StatusBar.currentHeight
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#2680c2',
    color: '#fff',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#84c5f4',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10
  }
});
export default () => {
  return (
    <TodoProvider>
      <ModalProvider>
        <HomeScreen />
      </ModalProvider>
    </TodoProvider>
  );
};
