import React from 'react'
import {View, Text, TextInput, StyleSheet} from "react-native"
import { GlobalStyles } from '../../constants/styles'

function ManageExpenseInput({label, textInputConfig, style, isValid}) {


  let inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if (isValid) {
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, isValid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}  />
    </View>
  )
}

export default ManageExpenseInput


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,

  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50
  }
})