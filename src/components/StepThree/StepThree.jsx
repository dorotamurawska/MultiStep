import { useState } from 'react';

// components:
import Button from '../Button/Button';
import Input from '../Input/Input';
import Links from '../Links/Links';

// svg:
import backArrow from '../../svg/back_arrow.svg';

// style:
import './StepThree.scss';

const StepThree = ({ setCurrentStep }) => {

    // const [selectedOptions, setSelectedOptions] = useState(
    //     {
    //         providers: '',
    //         speed: '',
    //         broadband: ''
    //     });

    // data for inputs:
    // const providersArr = ['BT', 'Sky', 'Consumer Choices', 'Virgin media', 'vodafone'];
    // const speedArr = ['0 - 30mbps', '30 - 60mbps', '60mbps +'];
    // const broadbandArr = ['DSL', 'cable modem', 'fiber', 'wireless', 'satellite', 'BPL'];

    const handleGoToStepTwo = () => setCurrentStep(2);

    const handleFinish = () => setCurrentStep(4);

    return (
        <main className="step-three">
            <Input />

            <div className="step-three__btns-wrap">
                <div className="step-three__txt-wrap" onClick={handleGoToStepTwo}>
                    <img src={backArrow} className='step-two__arrow' alt="back arrow icon" />
                    <p className='step-three__txt-back'>Back</p>
                </div>
                <Button
                    txt={'Continue'}
                    onClick={handleFinish}
                />
            </div>
            <Links />
        </main >
    );
}

export default StepThree;