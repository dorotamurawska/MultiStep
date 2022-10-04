import { useState } from 'react';

// svg:
import arrow from '../../svg/select_arrow.svg';

// style:
import './SelectInput.scss';

const SelectInput = (props) => {
    const [open, setOpen] = useState(false);

    const { name, valuesArr = [], label, selectedOptions, setSelectedOptions } = props;

    const handleSelect = (e) => {
        const value = e.currentTarget.dataset.value;
        const name = e.currentTarget.dataset.name;
        setSelectedOptions(prevState => ({
            ...prevState,
            [name]: value
        }));
        setOpen(false);
    };

    const handleOpen = () => setOpen(prevState => !prevState);

    const renderOptions = valuesArr.map((option) => (
        <div key={option} className="select-input__option" data-name={name} data-value={option} onClick={handleSelect}>
            <p className="select-input__txt">{option}</p>
            <p className={`select-input__circle ${selectedOptions[name] === option ? 'active' : ''}`}></p>
        </div>));

    const renderSelectedOption = selectedOptions[name] === '' ? 'Please select' : selectedOptions[name];

    return (
        <div className="select-input">
            <p className="select-input__label">{label}</p>
            <div className="select-input__select" name={name} id={name} >
                <div className="select-input__option" onClick={handleOpen}>
                    <p className="select-input__txt">{renderSelectedOption}</p>
                    <img src={arrow} className={`select-input__arrow ${open ? 'active' : ''}`} alt="arrow icon" />
                </div>
                {open ? renderOptions : null}
            </div>
        </div>
    );
}
export default SelectInput;