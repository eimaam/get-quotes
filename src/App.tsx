import React from 'react';
import './App.css';
import { Footer } from './Footer';
// import axios from 'axios';
import { QuotesCard } from './QuotesCard';
import { Time } from './Time';

function App() {

// axios.get('https://free-quotes-api.herokuapp.com/').then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  return (
    <div className='App-header'>
      <Time />
      <QuotesCard />
      <Footer />
    </div>
  );
}

export default App;
