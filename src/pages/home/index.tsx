import React from 'react';
import './home.scss';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__content">
                <h1 className="home__title">Deriv Bot</h1>
                <p className="home__subtitle">Build trading bots without coding</p>
                <div className="home__buttons">
                    <button className="home__btn home__btn--primary">Get Started</button>
                    <button className="home__btn home__btn--secondary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
