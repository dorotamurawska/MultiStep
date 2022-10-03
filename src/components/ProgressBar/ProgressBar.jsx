// components:
import Line from '../Line/Line';
import Circle from '../Circle/Circle';

// style:
import './ProgressBar.scss';

const ProgressBar = ({ currentStep }) => {

    return (
        <div className='progress-bar'>
            <Circle number={1} active={currentStep >= 1} />
            <Line active={currentStep >= 2} />
            <Circle number={2} active={currentStep >= 2} />
            <Line active={currentStep === 3} />
            <Circle number={3} active={currentStep === 3} />
        </div>
    );
}

export default ProgressBar;