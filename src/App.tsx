import './App.css';
import { Footer } from './Footer';
// import axios from 'axios';
import { QuotesCard } from './QuotesCard';
import { Time } from './TimeCard';

function App() {



  return (
    <div className='App-header'>
      <Time />
      <QuotesCard />
      <Footer />
    </div>
  );
}

export default App;
