import { useEffect, useState } from 'react';
import './App.css';

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
    </>
  );
}

export default App;
