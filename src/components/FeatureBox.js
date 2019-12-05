import React from 'react';
import {ReactComponent as Dashboard} from '../svgs/home.svg';
import {ReactComponent as Grid} from '../svgs/hash-key.svg';
import {ReactComponent as Font} from '../svgs/font.svg';

const FeatureBox = ()=>{
    return (
        <section className="featurebox">
            <div className="featurebox__boxes">
                <div className="featurebox__boxes--box">
                    <div className="featurebox__boxes--box__content">
                        <div className="featurebox__boxes--box__content--icon featurebox__boxes--box__content--icon--1">
                            <Dashboard/>
                        </div>
                        <div className="featurebox__boxes--box__content--title">
                            Customizable Elements
                        </div>
                        <div className="featurebox__boxes--box__content--subtitle">
                            Ready to use components that are well crafted with React and SCSS which you can easily customise.
                        </div>
                    </div>
                </div>
                <div className="featurebox__boxes--box">
                    <div className="featurebox__boxes--box__content">
                        <div className="featurebox__boxes--box__content--icon featurebox__boxes--box__content--icon--2">
                            <Grid/>
                        </div>
                        <div className="featurebox__boxes--box__content--title">
                            {`Grid & Layout`}
                        </div>
                        <div className="featurebox__boxes--box__content--subtitle">
                            Ready to use components that are well crafted with React and SCSS which you can easily customise.
                        </div>
                    </div>
                </div>
                <div className="featurebox__boxes--box">
                <div className="featurebox__boxes--box__content">
                        <div className="featurebox__boxes--box__content--icon featurebox__boxes--box__content--icon--3">
                            <Font/>
                        </div>
                        <div className="featurebox__boxes--box__content--title">
                            Google Fonts
                        </div>
                        <div className="featurebox__boxes--box__content--subtitle">
                            The kit uses Google's free fonts which you could also change according to your preference
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureBox;