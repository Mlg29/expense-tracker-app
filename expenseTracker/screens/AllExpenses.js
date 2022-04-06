import React, {useEffect} from   'react'
import {StyleSheet, Text, View} from "react-native"
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import {useDispatch, useSelector} from "react-redux"
import {getDataFunction} from "../store/dummyData"

function AllExpenses() {
  const dummy = useSelector(state => state.dummyData.dummyDatas)
  const dispatch = useDispatch()



  useEffect(() => {
      dispatch(getDataFunction())
  }, [])

  return (
    <ExpensesOutput expenses={dummy} expensesPeriod="Total" fallback="No registered expenses found" />
  )
}

export default AllExpenses