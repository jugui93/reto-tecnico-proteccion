import { Router } from 'react-router-dom';

function App() {
  return (
    <Router >
      <Route path='/' element={<HeroList />} exact />
    </Router>
  );
}

export default App;
