
interface Props{
  children: string,
  className: string,
  color?: string
  htmlFor?: string}

const Label = (props: Props) => {
  return (
    <label htmlFor={props.htmlFor} className={props.className} color={props.color}>{props.children}</label>
  )
}

export default Label