import React, { Component } from 'react';
import Header from './Header';
import FeatureBox from './FeatureBox';
// import StateTest from './StateTest';

class App extends Component{
    constructor(){
        super();
        this.state = {
            //APP STAT GOES HERE
            fetchedProducts : [],
            inputValue : '',
        }
    }

    componentDidMount() {
        fetch('https://eazy-food.firebaseio.com/products.json')
        .then(res => res.json())
        .then(data => {this.setState({fetchedProducts : data})}
        ).catch(e => console.log(e));
    }

    // changeInput = (e)=>{
    //     this.setState({
    //         inputValue : e.target.value
    //     });
    // }

    render(){
        return (
            <main>
                <Header/>
                <FeatureBox/>
                {/* <StateTest inputValue={this.state.inputValue} changeInput = {this.changeInput}/> */}
                {(!this.state.fetchedProducts.length) ? 'No products found' : this.state.fetchedProducts.map(e => <p>{e.name}</p>)}
            </main>
        );
    }
}

export default App;