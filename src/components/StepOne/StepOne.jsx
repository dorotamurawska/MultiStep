// components:
import Button from '../Button/Button';
import Input from '../Input/Input';

// style:
import './StepOne.scss';

const StepOne = () => {

    return (
        <main className="step-one">
            <h1 className="step-one__title">Find great broadband deals in your area</h1>
            <h2 className="step-one__subtitle">{`What’s your postcode?`}</h2>
            <p className="step-one__description">{`Enter your postcode and click ‘Find address’. Then choose your address`}</p>
            <Input
                txt='eg. SW1A 1AA'
            />
            <Button
                txt={'Find address'}
            />
        </main>
    );
}

export default StepOne;