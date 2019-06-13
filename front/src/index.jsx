import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const Hello = ({ name }) => (
  <div>
    <Header />
    <div>
      <h1>Hello {name}</h1>
    </div>
  </div>
);

let App = document.getElementById('app');

ReactDOM.render(<Hello name='Freja' />, App);
