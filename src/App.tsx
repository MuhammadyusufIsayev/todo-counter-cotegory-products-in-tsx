import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Todo from "./features/todo/Todo";
import Categories from "./features/categories/Categories";
import Products from "./features/products/Products";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <h1>App</h1>
      <div className="links">
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
