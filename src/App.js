import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Weather defaultCity='London'/>
      <footer>This project was created by Saario and is  
      <a href='https://github.com/Saario91/react-weather-project' target="_blank" rel="noreferrer">
        OpenSourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}
