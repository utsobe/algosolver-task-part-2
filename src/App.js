import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header';

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Header>
    </>
  );
}

export default App;
