import React, { Component } from 'react';
import { connect } from  'react-redux';
// import StateTest from '../components/StateTest';
import { changeSearchFieldInput } from '../actions/actions';
import Header from '../components/Header/Header';
import FeatureBox from '../components/FeatureBox/FeatureBox';
import Footer from '../components/Footer/Footer';
import InfoBox from '../components/InfoBox/InfoBox';

const mapStateToProps = state => ({
    searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearchChange : (e) => dispatch(changeSearchFieldInput(e.target.value))
});

class App extends Component{
    constructor(){
        super();
        this.state = {
            //APP STAT GOES HERE
            fetchedProducts : [],
        }
    }

    componentDidMount() {
        fetch('https://eazy-food.firebaseio.com/products.json')
        .then(res => res.json())
        .then(data => {this.setState({fetchedProducts : data})}
        ).catch(e => console.log(e));
    }

    render(){
        return (
            <main>
                <Header/>
                <FeatureBox/>
                <InfoBox/>
                <Footer/>
                {/* <StateTest inputValue={this.props.searchField} changeInput = {this.props.onSearchChange}/> */}
                {/* {(!this.state.fetchedProducts.length) ? 'No products found' : this.state.fetchedProducts.map(e => <p>{e.name}</p>)} */}
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);