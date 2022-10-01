// components:
import Line from '../Line/Line';
import Circle from '../Circle/Circle';

// style:
import './ProgressBar.scss';

const ProgressBar = () => {

    return (
        <div className='progress-bar'>
            <Circle number={'1'} active/>
            <Line />
            <Circle number={'2'} />
            <Line />
            <Circle number={'3'} />
        </div>
    );
}

export default ProgressBar;