import './button.styles.scss';

export const BUTTON_TYPES = {
    google : 'google-sign-in',
    inverted : 'inverted'
}

const Button = ({children,buttonType,...otherProps}) => {
    return (
        <button {...otherProps} className={`button-container ${BUTTON_TYPES[buttonType]}`}>
         {children}
        </button>
    )
}
export default Button;