// style:
import './Input.scss';

const Input = (props) => {
    const { txt, value, onChange } = props;
    return (
        <input
            value={value}
            onChange={onChange}
            className="input"
            placeholder={txt}
            maxLength= {15}
        />
    );
}
export default Input;