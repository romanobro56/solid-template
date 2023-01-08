import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import Home from './pages/Home';
import Nav from './components/Nav';

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
