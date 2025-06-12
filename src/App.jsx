import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List_movies from './components/Home/micro/List_movies'; 
import Movies_list_layout from './components/Home/Movies/Movies_list_layout'; 
import Layout from './components/Layout/Layout'; // Assuming you have a Layout component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/List_movies" element={<List_movies />} />
        <Route path="/movies" element={<Movies_list_layout />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;