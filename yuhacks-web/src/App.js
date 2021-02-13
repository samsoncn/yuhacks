import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
