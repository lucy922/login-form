import Login from "../components/Login"; 
import { render, screen} from "@testing-library/react";


describe('Login component tests', () => {

  it("render login component correctly with initial documents", () =>{
    render(<Login/>)
    const form = screen.getByTestId('login-form')
    expect(form).toBeInTheDocument()
    expect(form.querySelector("[data-testid='email-input']")?.getAttribute('name')).toBe('email')
    expect(form.querySelector("[data-testid='password-input']")?.getAttribute('name')).toBe('password')
  })
})

