import { useEffect, useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState<any>();

  useEffect(() => {
    fetch('https://www.ifconfig.me/ip', { method: 'get' })
      .then((r) => {
        return r.text();
      })
      .then((r) => {
        console.log(r);
        setCount(r);
      });
  }, []);

  return (
    <>
      <div>{count}</div>
      <Link to={'/list'}> list</Link>
    </>
  );
}

export default App;
