import React from 'react';
import puzzle from '../../img/puzzle.png';
import programming from '../../img/programming.png';

const InfoBox = ()=>{
    return (
        <section className="info">
            <div className="info-box">
                <div className="info-box__content">
                    <div className="info-box__content--columns">
                        <img alt="Programming" src={programming} className="info-box__img"/>
                    </div>
                    <div className="info-box__content--columns">
                        <h2 className="info-box__content--title">Built for programmers by programmers</h2>
                        <p className="info-box__content--subtitle">
                            Yea, its cool but blah blah blah blah blah
                            blahblah blah blahblah blah blah blah blah 
                            blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah blah
                            blahblah blah blah blahblah blah blahblah blah blah blah blah 
                            blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah blah
                            blahblah blah blah
                        </p>
                    </div>
                </div>
            </div>
            <div className="info-box">
                <div className="info-box__content">
                    <div className="info-box__content--columns">
                    <h2 className="info-box__content--title">Easy to use even on the most complex of projects</h2>
                        <p className="info-box__content--subtitle">
                            Yea, its cool but blah blah blah blah blah
                            blahblah blah blahblah blah blah blah blah 
                            blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah blah
                            blahblah blah blah blahblah blah blahblah blah blah blah blah 
                            blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah
                            blah blahblah blah blahblah blah blahblah blah blahblah blah
                            blahblah blah blah
                        </p>
                    </div>
                    <div className="info-box__content--columns">
                        <img alt="Puzzle" src={puzzle} className="info-box__img"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoBox;