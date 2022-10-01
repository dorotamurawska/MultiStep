// style:
import './Input.scss';

const Input = (props) => {
    const { txt } = props;
    return (
        <input className="input"
            placeholder={txt}
        />
    );
}
export default Input;