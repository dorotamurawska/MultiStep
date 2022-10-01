// svg: 
import bt from '../../svg/bt.svg';
import sky from '../../svg/sky.svg';
import cc from '../../svg/cc.svg';
import vm from '../../svg/vm.svg';
import vodafone from '../../svg/vodafone.svg';

// style:
import './Providers.scss';

const Providers = () => {

    const svgArr = [
        { svg: bt, alt: "bt" },
        { svg: sky, alt: "sky" },
        { svg: cc, alt: "consumer choices" },
        { svg: vm, alt: "virgin media" },
        { svg: vodafone, alt: "vodafone" },
    ];

    const renderSvg = svgArr.map(svg => (
        <div key={svg.svg} className="providers__wrap-img">
            <img src={svg.svg} className={`providers__img`} alt={svg.alt} />
        </div>));

    return (
        <div className="providers">
            {renderSvg}
        </div>
    );
}

export default Providers;