import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { setField, updateTime, resetForm } from './redux.js';
import moment from 'moment';
import Input from './Input.js';

const closeTime = moment('2018-04-02 10:00');

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  bFood: false,
  bAgreeTerm: false,
  countdown: ''
};

class App extends Component {
  state = initialState;
  a;
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const {
      name,
      email,
      ticketType,
      bFood,
      bAgreeTerm,
      countdown,
      setField,
      resetForm
    } = this.props;
    return (
      <section className="section">
        <div className="container">
          <h1 className="title"> Master React Redux Form </h1>{' '}
          <h1 className="title"> Registration will be closed in {countdown}</h1>
          <Input
            value={name}
            onChange={value => setField('name', value)}
            placeholder="Chris Redfield"
            label="Name"
          />
          <Input
            value={email}
            onChange={value => setField('email', value)}
            placeholder="Ex. perjerz@gmail.com"
            label="Email"
          />
          <div className="field">
            <label className="label"> Ticket Type </label>{' '}
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => setField('ticketType', e.target.value)}
                >
                  <option> Select type... </option>{' '}
                  <option value="regular"> Regular - 100 THB </option>{' '}
                  <option value="premium"> Regular - 300 THB </option>{' '}
                </select>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="field">
            <label className="label"> Add food ? </label>{' '}
            <div className="control">
              <label className="radio">
                <input
                  checked={bFood}
                  onClick={() => setField('bFood', true)}
                  type="radio"
                  name="question"
                />{' '}
                Yes(+50 THB){' '}
              </label>{' '}
              <label className="radio">
                <input
                  checked={!bFood}
                  onClick={() => setField(bFood, false)}
                  type="radio"
                  name="question"
                />{' '}
                No + 0{' '}
              </label>{' '}
            </div>{' '}
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={bAgreeTerm}
                  onChange={e => setField('bAgreeTerm', e.target.checked)}
                />{' '}
                I agree to the <a href="#"> terms and conditions </a>{' '}
              </label>{' '}
            </div>{' '}
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link"> Register </button>{' '}
            </div>{' '}
            <div className="control">
              <button className="button is-text" onClick={() => resetForm()}>
                {' '}
                Reset{' '}
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>
    );
  }
}

export default connect(state => state, { setField, updateTime, resetForm })(
  App
);
