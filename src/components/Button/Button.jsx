// style:
import './Button.scss';

const Button = (props) => {
    const { txt, disabled, onClick } = props;
    return (
        <button className="button" disabled={disabled} onClick={onClick}>{txt}</button>
    );
}
export default Button;