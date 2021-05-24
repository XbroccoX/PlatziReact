import React from 'react';
import ReactDom from 'react-dom';
// -------{}
import './global.css';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

// ReactDom(__qué__, __dónde__)
// ReactDom.render(<Badge
//     firstName='Santiago'
//     lastName='Correa'
//     profession='Software Engineer'
//     twitter='Brocco22'
//     avatarUrl="https://s.gravatar.com/avatar/6b7a9105844e2507dab439c603cd50bb?s=80"
//     hashtag='platziConf'
// />,container);

ReactDom.render(<BadgeNew/>,container);