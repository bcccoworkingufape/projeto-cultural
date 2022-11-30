import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets//images/logo.svg';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function landingPage() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
	    <Footer/>
        </div>
    );
  }
  
  export default landingPage;
