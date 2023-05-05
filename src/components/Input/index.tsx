import { InputHTMLAttributes } from 'react'
import { InputContainer } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <InputContainer {...props} />
}
