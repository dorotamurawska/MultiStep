// components:
import Button from '../Button/Button';

// svg:
import CC from '../../svg/cc_big.svg';
import amazon from '../../svg/amazon.svg';
import checked from '../../svg/checked.svg';

// style:
import './Card.scss';

const Card = () => {

    const features = ['Unlimited Superfast Broadband', 'No Price Increases', '£25 Amazon Gift card'];
    const renderFeatures = features.map(feature => (<div key={feature} className="card_features">
        <img src={checked} className="card_img" alt="checked" />
        <p className="card_feature">{feature}</p>
    </div>))

    return (
        <div className="card">
            <header className="card__header">
                <p className="card__number">1</p>
                <p className="card__info">{`We’ve found you an offer!`}</p>
            </header>
            <main className="card__content">
                <p className="card__txt">Offered by:</p>
                <div className="card__imgs-wrap">
                    <img src={CC} className="card_img" alt="consumer choices" />
                    <img src={amazon} className="card_img" alt="amazon" />
                </div>
                <p className="card__txt">Monthly Cost From:</p>
                <p className="card__price">£17.95</p>
                <p className="card__txt p">*Subject to availability in your area</p>
                <p className="card__txt">Features included:</p>
                {renderFeatures}
                <Button txt={'Find Out More'} />

            </main>

        </div>
    );
}

export default Card;
