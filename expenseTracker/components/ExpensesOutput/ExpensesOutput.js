import React from 'react'
import { View, StyleSheet } from "react-native"
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 19.89,
        date: new Date('2021-02-01')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-02-19')
    },
    {
        id: 'e4',
        description: 'Another Book',
        amount: 39.21,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'A list of books',
        amount: 19.89,
        date: new Date('2021-02-01')
    },
    {
        id: 'e6',
        description: 'Some mangos',
        amount: 5.99,
        date: new Date('2021-02-19')
    },
    {
        id: 'e7',
        description: 'Another Movie title',
        amount: 39.21,
        date: new Date('2022-02-19')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}  />
        </View>
    )
}


export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
})