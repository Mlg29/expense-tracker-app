import React from 'react'

import {StyleSheet, FlatList, Text} from "react-native"
import ExpenseItem from './ExpenseItem'


const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />
}
function ExpensesList({expenses}) {
  return (
   <FlatList 
    data={expenses}
    keyExtractor={(item) => item.id}
    renderItem={renderExpenseItem}
   />
  )
}

export default ExpensesList