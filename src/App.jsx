import './App.css';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import NavBar from './components/layouts/navBar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './components/context/github/GithubContext';
import User from './components/users/User';
function App() {
  return (
    <GithubProvider>

    <Router>
    <div className="main">
        <NavBar/>
        <section className=' container mx-auto px-3'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:login' element={<User/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </section>
        <Footer/>
    </div>
    </Router>
    </GithubProvider>

  );
}

export default App;
