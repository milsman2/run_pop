import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './features/error/ErrorPage'
import Home from './features/home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
