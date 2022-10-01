// style:
import './Button.scss';

const Button = (props) => {
    const { txt } = props;
    return (
        <button className="button">{txt}</button>
    );
}
export default Button;