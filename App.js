import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Navbar from './Navbar';
function App() {
  return (
      <>
    <div className="App">
         <h1>CS 230L</h1>
    <h2>Section - 01</h2>
    <p>WVU ID: 800385067</p>
    <p>Hi, I am Maverick</p>
    </div>
  <div className="card-container">
    <Card title="Card 01" content="Some quick example teext to build on the card title and make up the bulk of the card's content." />
    <Card title="Card 02" content="Some quick example teext to build on the card title and make up the bulk of the card's content." />
    <Card title="Card 03" content="Some quick example teext to build on the card title and make up the bulk of the card's content." />
  </div>
  </>
  );
}

export default App;