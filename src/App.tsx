import { useState } from 'react';
import './App.css';

// Header Component
function Header() {
  return <h1>Welcome to My React App</h1>;
}

// Main Component
function Main() {
  return <p>This is the main content area.</p>;
}

// Footer Component
function Footer() {
  return <footer>© 2024 My React App</footer>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
         
        </p>
      </div>
      <Footer />
      <p className="read-the-docs">
        
      </p>
    </>
  );
}

export default App;
