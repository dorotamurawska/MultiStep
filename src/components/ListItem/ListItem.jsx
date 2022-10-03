// svg:
import check from '../../svg/check_circle.svg';

// style:
import './ListItem.scss';

const ListItem = ({ data, active, onClick }) => {
    const isActive = active ? 'active' : '';
    return (
        <div className={`list-item ${isActive}`} onClick={onClick} id={data.id}>
            <div className="list-item__wrap-txt">
                <p className="list-item__txt">{`${data.id}, ${data.street}, ${data.postcode}`}</p>
                <p className="list-item__txt">{data.town}</p>
            </div>
            <div className="list-item__circle">
                <img src={check} className="list-item__check" alt="check circle" />
            </div>
        </div>
    );
}

export default ListItem;
