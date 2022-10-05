import { useState } from 'react';

// components:
import Button from '../Button/Button';
import Input from '../Input/Input';
import ListItem from '../ListItem/ListItem';

// data:
import { adresses } from '../../dataForApp/adresses';

// style:
import './StepOne.scss';

const StepOne = ({ setCurrentStep, stepTwo }) => {

    const [inputAdress, setInputAdress] = useState('');
    const [searchAdressResult, setSearchAdressResult] = useState([]);
    const [btnFindAddressVisible, setFindAddressVisible] = useState(true);
    const [btnNoAddressVisible, setBtnNoAddressVisible] = useState(false);
    const [numberOfResultsVisible, setNumberOfResultsVisible] = useState(false);
    const [activeListElem, setActiveListElem] = useState(undefined);

    const adressData = adresses;

    const handleInputAdress = (e) => {
        setInputAdress(e.target.value);
        setFindAddressVisible(true);
        setBtnNoAddressVisible(false);
        setNumberOfResultsVisible(false);
        setSearchAdressResult([]);
        setActiveListElem(undefined);
    };

    const btnDisabled = inputAdress === '' ? true : false;

    const handleBtnSearchAdress = (e) => {
        e.preventDefault();
        const searchAdress = adressData.filter(adress => adress.postcode === inputAdress.toUpperCase());
        setSearchAdressResult(searchAdress);
        setBtnNoAddressVisible(true);
        setNumberOfResultsVisible(true);
        setFindAddressVisible(false);
    };

    const handleActiveListElement = (e) => setActiveListElem(e.currentTarget.id);

    const handleGoToStepTwo = () => setCurrentStep(stepTwo);

    const renderBtnFindAddressVisible = btnFindAddressVisible ?
        <Button
            txt={'Find address'}
            disabled={btnDisabled}
        /> : null;

    const renderSearchAdressResult = searchAdressResult.map(result => <ListItem key={result.id} data={result} onClick={handleActiveListElement} active={result.id === parseInt(activeListElem)} />);

    const renderNumberOfResults = numberOfResultsVisible ? <p className="step-one__number-of-results">{`${searchAdressResult.length} Results`}</p> : null;
    const renderBtnNoAddress = btnNoAddressVisible ? <button className="step-one__btn-no-adress" onClick={handleGoToStepTwo}>My address is not on the list</button> : null;

    const renderBtnContinueVisible = activeListElem !== undefined ?
        <div className="step-one__form">
            <Button
                txt={'Continue'}
                disabled={btnDisabled}
                onClick={handleGoToStepTwo}
            />
        </div> : null;

    return (
        <main className="step-one">
            <h1 className="step-one__title">Find great broadband deals in your area</h1>
            <h2 className="step-one__subtitle">{`What’s your postcode?`}</h2>
            <p className="step-one__description">{`Enter your postcode and click ‘Find address’. Then choose your address`}</p>
            <form className="step-one__form" onSubmit={handleBtnSearchAdress}>
                <Input
                    txt='eg. SW1A 1AA'
                    value={inputAdress}
                    onChange={handleInputAdress}
                    name={'postcode'}
                />
                {renderBtnFindAddressVisible}
            </form>
            {renderNumberOfResults}
            <div className="step-one__list">
                {renderSearchAdressResult}
            </div>
            {renderBtnNoAddress}
            {renderBtnContinueVisible}
        </main >
    );
}

export default StepOne;