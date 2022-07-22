import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import "./style.scss"
import "./media-query.css"
import About from './pages/About';
import AddEditBlog from './pages/AddEditBlog';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Header />
      <ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/about" element={<About />} exact />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/create" element={<AddEditBlog />} />
				<Route path="/update/:id" element={<AddEditBlog />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
