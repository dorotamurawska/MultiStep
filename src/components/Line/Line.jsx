import './Line.scss';

const Line = (props) => {
    const { active } = props;

    const displayActiveClass = active ? 'active' : '';

    return (
        <div className={`line ${displayActiveClass}`}></div>
    );
}

export default Line;