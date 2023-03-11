import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SearchPage from './pages/Search';
import MovieDetials from './pages/MovieDetails';
import Subscription from './pages/Subscription';

function App() {
  return (
    <main className='min-h-screen w-screen bg-[#181a20] overflow-hidden text-white pb-8'>
      <Navbar />
      <div className='pt-[80px] container-fluid mx-auto px-[20px] xs:px-[40px] sm:px-[60px] md:px-[100px] relative'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/subscriptions' element={<Subscription />} />
          <Route path='/movie/:id' element={<MovieDetials />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
