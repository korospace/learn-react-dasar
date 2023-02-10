import { BrowserRouter,Routes,Route } from 'react-router-dom';

// component
import Home  from './pages/Home';
import Movie from './pages/Movie/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'      element={<Home />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
