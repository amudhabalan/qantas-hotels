import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelsList from './pages/HotelsList';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HotelsList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
