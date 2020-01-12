import React from 'react'
import {Label, Input, Span} from './styles'

const TextInput = ({onChange, maxLength, value, ...props}) => {
  const cunstomOnChange = event => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <Label>
      <Input
        maxLength={maxLength}
        onChangeText={cunstomOnChange}
        value={value}
        {...props}
      />

      <Span>{`${value ? value.length : 0}/${maxLength}`}</Span>
    </Label>
  )
}

export default TextInput
