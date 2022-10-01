import './Circle.scss';

const Circle = (props) => {
    const { active, number } = props;

    const displayActiveClass = active ? 'active' : '';

    return (
        <div className={`circle ${displayActiveClass}`}>{number}</div>
    );
}

export default Circle;