import './App.css';
import ExplainCode from './components/ExplainCode'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {

  return (
    <div className=" backdrop" >
      <Navigation />
      <ExplainCode />
      <Footer />
    </div >
  );
}

export default App;
