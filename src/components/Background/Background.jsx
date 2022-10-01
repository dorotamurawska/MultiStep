// svg: 
import arrows from '../../svg/arrows.svg';
import ellipseBlue from '../../svg/ellipse_blue.svg';
import ellipsePurple from '../../svg/ellipse_purple.svg';

// style:
import './Background.scss';

const Background = () => {

    const svgArr = [
        { svg: ellipseBlue, className: 'ellipse-blue', alt: "blue ellipse" },
        { svg: ellipsePurple, className: 'ellipse-purple', alt: "purple ellipse" },
        { svg: arrows, className: 'arrows', alt: "arrows" },
    ];

    const renderSvg = svgArr.map(svg => (
        <div key={svg.svg} className="background__wrap-img">
            <img src={svg.svg} className={`background__${svg.className}`} alt={svg.alt} />
        </div>));

    return (
        <div className="background">
            {renderSvg}
        </div>
    );
}

export default Background;