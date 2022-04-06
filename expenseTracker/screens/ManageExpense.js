import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from "react-native"

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from "../constants/styles"
import {addFunction, deleteFunction, updateFunction, getDataFunction} from "../store/dummyData"
import {useDispatch, useSelector} from "react-redux"
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId
  const dispatch = useDispatch()

  const dummy = useSelector(state => state.dummyData.dummyDatas)

  const [amount, setAmount] = useState()
  const [description, setDescription] = useState()

  const editData = dummy?.find(data => data.id === expenseId)

  useEffect(() => {
    dispatch(getDataFunction())
  }, [expenseId])

  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])


  const deleteHandler = () => {
    dispatch(deleteFunction(expenseId))
    console.log("delete")
    navigation.goBack();
  }

  const cancelHandler = () => {
      navigation.goBack();
  }

  const confirmHandler = (expenseData) => {
    var updateData = expenseData
    updateData.id = expenseId
    // navigation.goBack();
    if(isEditing) {
      dispatch(updateFunction(updateData))
    }
    else {
      dispatch(addFunction(expenseData))
    }
    navigation.goBack();
  }


  return (
    <View style={styles.container}>
      <ExpenseForm defaultValue={editData} onSubmit={confirmHandler} onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} />
 
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteHandler} />
        </View>
      )}
    </View>
  )
}

export default ManageExpense


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },

  input: {
    padding: 8,
    marginVertical: 10,
    border: '1px solid white',
    borderRadius: 10,
    color: 'white'
  }
})