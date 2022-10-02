// style:
import './Button.scss';

const Button = (props) => {
    const { txt, disabled } = props;
    return (
        <button className="button" disabled={disabled}>{txt}</button>
    );
}
export default Button;