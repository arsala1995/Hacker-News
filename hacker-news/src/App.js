import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import NewsPage from './Components/NewsPage/NewsPage'
function App() {
  return (
    <div className="App">
     <div> <Nav /> </div>
     <NewsPage />
     
    </div>
  );
}

export default App;
