import { useState } from 'react';

// components:
// import Button from '../Button/Button';
// import Input from '../Input/Input';
// import ListItem from '../ListItem/ListItem';

// data:
// import { adresses } from '../../dataForApp/adresses';

// style:
import './StepTwo.scss';

const StepTwo = () => {


    // const adressData = adresses;

    const handleGoToStepOne = () => { };

    const handleGoToStepThree = () => { };

    return (
        <main className="step-two">
            <h2 className="step-one__subtitle">{`Who provides your current Broadband?`}</h2>
            {/* <form className="step-one__form" onSubmit={handleBtnSearchAdress}>
                <Input
                    txt='eg. SW1A 1AA'
                    value={inputAdress}
                    onChange={handleInputAdress}
                />
                {renderBtnFindAddressVisible}
            </form>
            {renderNumberOfResults}
            <div className="step-one__list">
                {renderSearchAdressResult}
            </div>
            {renderBtnNoAddress}
            {renderBtnContinueVisible} */}
        </main >
    );
}

export default StepTwo;