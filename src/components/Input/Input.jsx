// style:
import './Input.scss';

const Input = (props) => {
    const { txt, value, onChange, label, name, type, required, className = '' } = props;
    return (
        <div className={`wrap ${className}`}>
            {label ? <label className={`label ${className}`} htmlFor={name}>{label}</label> : null}
            <input
                id={name}
                value={value}
                onChange={onChange}
                className={`input ${className}`}
                placeholder={txt}
                maxLength={100}
                type={type || 'text'}
                required={required}
            />
        </div>
    );
}
export default Input;