import {screen, render} from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import InputField from "../components/InputField";


describe('should render input field correctly', () => {
 
  it('email input field should accept email', () => {
  render(<InputField placeholder='Enter email..'/>) 
  const email = screen.getByPlaceholderText<HTMLInputElement>('Enter email..')
  fireEvent.change(email, {target: {value: 'ofemlucy@gmail.com'}})
  expect(email.value).toBe('ofemlucy@gmail.com')
  expect(email).toBeInTheDocument()
  })

  it('password input field should be type password', () => {
    render(<InputField placeholder='Enter password' type='password'/>)
    const password = screen.getByPlaceholderText<HTMLInputElement>('Enter password')
    fireEvent.change(password, {target: {value: "1234567"}})
    expect(password.value).toBe("1234567")
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toBeInTheDocument()
  })
})