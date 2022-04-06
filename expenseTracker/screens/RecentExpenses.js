import React, {useEffect} from 'react'
import {StyleSheet, Text, View} from "react-native"
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import {useDispatch, useSelector} from "react-redux"
import {getDataFunction} from "../store/dummyData"
import { getDateMinusDays} from "../utils/date"


function RecentExpenses() {
  const dummy = useSelector(state => state.dummyData.dummyDatas)
  const dispatch = useDispatch()

  const recentExpenses = dummy?.filter(data => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return data.date >= date7DaysAgo;

  })


  useEffect(() => {
      dispatch(getDataFunction())
  }, [])

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallback="No expenses registered for the last 7 days" />
  )
}

export default RecentExpenses