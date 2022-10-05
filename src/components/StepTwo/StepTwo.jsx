import { useState } from 'react';

// components:
import Button from '../Button/Button';
import Links from '../Links/Links';
import SelectInput from '../SelectInput/SelectInput';

// svg:
import backArrow from '../../svg/back_arrow.svg';

// style:
import './StepTwo.scss';

const StepTwo = ({ setCurrentStep, loader, stepOne }) => {

    const [selectedOptions, setSelectedOptions] = useState(
        {
            providers: '',
            speed: '',
            broadband: ''
        });

    // data for inputs:
    const providersArr = ['BT', 'Sky', 'Consumer Choices', 'Virgin media', 'vodafone'];
    const speedArr = ['0 - 30mbps', '30 - 60mbps', '60mbps +'];
    const broadbandArr = ['DSL', 'cable modem', 'fiber', 'wireless', 'satellite', 'BPL'];

    const handleGoToStepOne = () => setCurrentStep(stepOne);

    const handleGoToStepThree = () => setCurrentStep(loader);

    const btnDisabled = Object.values(selectedOptions).includes("");

    return (
        <main className="step-two">
            <SelectInput
                name={'providers'}
                valuesArr={providersArr}
                label={'Who provides your current Broadband?'}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
            />
            <SelectInput
                name={'speed'}
                valuesArr={speedArr}
                label={'What’s your ideal speed?'}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
            />
            <SelectInput
                name={'broadband'}
                valuesArr={broadbandArr}
                label={'What’s your ideal speed?'}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
            />
            <div className="step-two__btns-wrap">
                <div className="step-two__txt-wrap" onClick={handleGoToStepOne}>
                    <img src={backArrow} className='step-two__arrow' alt="back arrow icon" />
                    <p className='step-two__txt-back'>Back</p>
                </div>
                <Button
                    txt={'Continue'}
                    onClick={handleGoToStepThree}
                    disabled={btnDisabled}
                />
            </div>
            <Links />
        </main >
    );
}

export default StepTwo;