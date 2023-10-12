import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

const HomeworkCheck = () => (
  <h1>Homework Check</h1>
);
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <HomeworkCheck/>
  </div>
);
