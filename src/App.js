import React from 'react';
import './App.css';
import axios from 'axios'
class App extends React.Component {
    state = { advice: '' };
    componentDidMount() {
        //calling the method innto the function
        this.fetchAdvice()
    }

    //declaring a method
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                //distructing the advice and taking it from the console.log
                const { advice } = response.data.slip;
                // console.log(response.data.slip.advice)
                console.log(advice)
                this.setState({ advice })

            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        const { advice } = this.state;
        return ( <
            div className = "app" >
            <

            div className = "card" >
            <
            h1 className = "heading" > { this.state.advice } < /h1>

            <

            button className = "button"
            onClick = { this.fetchAdvice } >

            <
            span > GIVE ME ADVICE < /span> < /
            button > < /div >

            <
            /div>
        );

    }
}
export default App;