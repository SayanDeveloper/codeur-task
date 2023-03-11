import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/Search';
import MovieDetials from './pages/MovieDetails';
import Subscription from './pages/Subscription';

function App() {
  return (
    <main className='min-h-screen w-screen bg-[#181a20] overflow-hidden text-white'>
      <Navbar />
      <div className='pt-[80px] container mx-auto px-[20px]'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/subscriptions' element={<Subscription />} />
          <Route path='/movie/:id' element={<MovieDetials />} />
        </Routes>
      </div>
      <h1 className="text-3xl font-bold">
        Trending
      </h1>
    </main>
  );
}

export default App;
