import React, { Component } from 'react'

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    state = {
        username: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;

        if(!username.length) return;

        localStorage.setItem('@TwitterWeek:username', username);

        this.props.history.push('/timeline');
    };

    handleInputChange = e => {
        this.setState({ username: e.target.value })
    };

    render() {
        return (
            <div className='login-wrapper'>
                <img src={twitterLogo} alt='twiiterWeek' />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} value={this.state.username} placeholder='Nome do usuário' />
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        )
    }
}
