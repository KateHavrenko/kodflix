import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            welcomeMessage: 'Welcome to the details, WIP :)'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'The best is yet to come!'
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <p>{this.state.welcomeMessage}</p>
                <Link to='/'>Back to home</Link>
            </div>
        );
    }
  
}