import { useEffect } from 'react';

// style:
import './Loader.scss';

const Loader = ({ setCurrentStep, stepThree }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentStep(stepThree);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="loader">
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
        </div>
    );
}

export default Loader;