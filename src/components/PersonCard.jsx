import React, { Component } from 'react';

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const {age} = this.state;
        const birthday = () => this.setState({age: this.state.age + 1});

        return(
                <div>
                    <h1>{lastName}, {firstName}</h1> 
                    <p>Age: {age}</p>
                    <button className="btn btn-success" onClick={birthday}>Birthday Button for {firstName}</button>
                    <p>Hair Color: {hairColor}</p>
                </div>
        )
    }
}

export default PersonCard