import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import SearchPage from './Pages/Search';

import Header from './Components/Header';
import ErrorBoundary from './Components/ErrorBoundary';

import './App.scss';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
