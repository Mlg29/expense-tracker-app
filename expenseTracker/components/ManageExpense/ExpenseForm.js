import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert } from "react-native"
import ManageExpenseInput from './ManageExpensenput'
import Buttons from '../UI/Buttons';
import { getFormattedDate } from '../../utils/date';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValue }) {
    const [inputs, setInputs] = useState({
        amount: { value: defaultValue ? defaultValue.amount.toString() : '', isValid: true},
        date: { value: defaultValue ? getFormattedDate(defaultValue.date) : '', isValid: true},
        description: { value: defaultValue ? defaultValue.description : '', isValid: true}
    });


    const inputChangeHandler = (inputIdentifier, enteredValue) => {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            }
        })
    }

    const onSubmitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || descriptionIsValid) {
           setInputs((currentInput) => {
               return {
                   amount: {value: currentInput.amount.value, isValid: amountIsValid},
                   date: {value: currentInput.date.value, isValid: dateIsValid},
                   description: {value: currentInput.description.value, isValid: descriptionIsValid}
               }
           })
            return
        }

        onSubmit(expenseData)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.formDiv}>
                <ManageExpenseInput isValid={!inputs.amount.isValid} label="Amount" textInputConfig={{
                    keybordType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value

                }} style={styles.rowInput} />
                <ManageExpenseInput isValid={!inputs.date.isValid} label="Date" textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value
                }} style={styles.rowInput} />
            </View>
            <ManageExpenseInput isValid={!inputs.description.isValid} label="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value
            }} />

            <View style={styles.buttons}>
                <Buttons style={styles.button} mode="flat" onPress={onCancel}>Cancel</Buttons>
                <Buttons style={styles.button} onPress={onSubmitHandler}>{submitButtonLabel}</Buttons>
            </View>
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    formDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})