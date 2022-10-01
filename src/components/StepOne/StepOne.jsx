import { useState } from 'react';

// components:
import Button from '../Button/Button';
import Input from '../Input/Input';

// data:
import { adresses } from '../../dataForApp/adresses';

// style:
import './StepOne.scss';

const StepOne = () => {

    const [inputAdress, setInputAdress] = useState('');
    const adressData = adresses;
    // console.log(adressData);

    const handleInputAdress = (e) => setInputAdress(e.target.value)

    return (
        <main className="step-one">
            <h1 className="step-one__title">Find great broadband deals in your area</h1>
            <h2 className="step-one__subtitle">{`What’s your postcode?`}</h2>
            <p className="step-one__description">{`Enter your postcode and click ‘Find address’. Then choose your address`}</p>
            <form action="" className="step-one__form">
                <Input
                    txt='eg. SW1A 1AA'
                    value={inputAdress}
                    onChange={handleInputAdress}
                />
                <Button
                    txt={'Find address'}
                />
            </form>

        </main>
    );
}

export default StepOne;