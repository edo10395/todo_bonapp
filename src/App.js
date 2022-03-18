import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import configStore from './store';
import TodoList from "./pages/TodoList"
import Detail from "./pages/Detail"

const { store, persistor } = configStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/idTodo/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
export default App;
