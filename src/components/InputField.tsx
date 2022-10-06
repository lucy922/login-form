import * as React from 'react'
import classes from '../classes/InputField.classes';

 export interface IinputFieldClasses{
   base: string
}

 export interface Props extends React.HTMLAttributes<HTMLInputElement>{
  type?: string,
  placeholder?: string,
  name?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void ,
  value?: string
}



const InputField = (props: Props) => {
  return (
       <input {...props}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            className={classes.base}
          />
  )
}

export default InputField