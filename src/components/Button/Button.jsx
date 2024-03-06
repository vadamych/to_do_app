import './Button.scss'
const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`confirm-button ${props.className}`}>
      {children}
    </button>
  )
}

export default Button
