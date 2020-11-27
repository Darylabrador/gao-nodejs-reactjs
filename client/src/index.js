import React from 'react'
import ReactDOM from "react-dom";
import Navigation from './components/Navigation';
import './App.css';

if (document.getElementById('main')) {
  ReactDOM.render(<Navigation />, document.getElementById('main'));
}