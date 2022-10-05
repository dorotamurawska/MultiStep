import { useState } from 'react';

// components:
import Button from '../Button/Button';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Links from '../Links/Links';

// svg:
import backArrow from '../../svg/back_arrow.svg';

// style:
import './StepThree.scss';

const StepThree = ({ setCurrentStep, stepTwo, finish }) => {

    const [inputsValue, setInputsValue] = useState(
        {
            firstName: '',
            lastName: '',
            telephone: '',
            emailAddress: '',
            checkbox: false,
        });

    const handleGoToStepTwo = () => setCurrentStep(stepTwo);

    const handleFinish = () => setCurrentStep(finish);

    const btnDisabled = Object.values(inputsValue).includes("") || Object.values(inputsValue).includes(false);

    const renderCheckboxActive = inputsValue.checkbox ? 'active' : '';

    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.id;
        const checked = e.target.checked;
        name === 'checkbox' ?
            setInputsValue(prevState => ({
                ...prevState,
                [name]: checked
            })) :
            setInputsValue(prevState => ({
                ...prevState,
                [name]: value
            }));
    };

    return (
        <main className="step-three">
            <Card />
            <form className="step-three__form">
                <Input label={'First Name'} txt={'First Name'} name={'firstName'} required value={inputsValue.firstName} onChange={handleInput} />
                <Input label={'Last Name'} txt={'Last Name'} name={'lastName'} required value={inputsValue.lastName} onChange={handleInput} />
                <Input label={'Telephone'} txt={'Telephone'} name={'telephone'} type={'tel'} required value={inputsValue.telephone} onChange={handleInput} />
                <Input label={'Email Address'} txt={'Email Address'} name={'emailAddress'} type={'email'} required value={inputsValue.emailAddress} onChange={handleInput} />
                <Input
                    label={'If you would like to receive the best deals on Broadband and other offers from SwapMyBills.com, please tick this box.'}
                    txt={'Email Address'}
                    name={'checkbox'}
                    type={'checkbox'}
                    required
                    className={`checkbox ${renderCheckboxActive}`}
                    onChange={handleInput} />
                <Button
                    txt={'Continue'}
                    onClick={handleFinish}
                    disabled={btnDisabled}
                />
            </form>
            <p className="step-three__txt">{`By clicking “Continue”, you agree to our Privacy Policy and to be contacted by a Broadband Specialist.`}</p>
            <div className="step-three__txt-wrap" onClick={handleGoToStepTwo}>
                <img src={backArrow} className='step-three__arrow' alt="back arrow icon" />
                <p className='step-three__txt-back'>Back</p>
            </div>
            <Links />
        </main >
    );
}

export default StepThree;