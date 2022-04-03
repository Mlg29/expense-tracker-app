import React from 'react'
import {StyleSheet, Text, View} from "react-native"
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

function RecentExpenses() {
  return (
    <ExpensesOutput expensesPeriod="Last 7 Days" />
  )
}

export default RecentExpenses