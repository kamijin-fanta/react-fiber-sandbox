import React, { useState } from 'react';
import './App.css';

export function App () {
  const [count, setCount] = useState(0);

  const fiber = document.getElementById('root')._reactRootContainer._internalRoot;

  const simpleClickHandler = () => {
    setCount(count + 1);
    console.log('App fiber node', fiber.current.child);
    debugger;
  };
  const multipleClickHandler = () => {
    setCount(1);
    setCount(2);
    setCount(3);
    setCount(4);
    console.log('App fiber node', fiber.current.child);
    debugger;
  };
  const fnClickHandler = () => {
    setCount(state => state + 1);
    setCount(state => state * 2);
    console.log('App fiber node', fiber.current.child);
    debugger;
  };

  return (
    <div className="App">
      <p>
        <label>Current Value: </label>
        <input disabled value={count} />
      </p>
      <div className="examples">
        <div>
          <h3>単一のDispatch</h3>
          <pre>
            setCount(count + 1);
          </pre>
          <button onClick={simpleClickHandler}>execute</button>
        </div>
        
        <div>
          <h3>複数のDispatch</h3>
          <pre>
            {`setCount(1);
            setCount(2);
            setCount(3);
            setCount(4);
            `}
          </pre>
          <button onClick={multipleClickHandler}>execute</button>
        </div>

        <div>
          <h3>Actionに関数を指定</h3>
          <pre>
            {`setCount(state => state + 1);
            setCount(state => state * 2);
            `}
          </pre>
          <button onClick={fnClickHandler}>execute</button>
        </div>
      </div>
      <div>
        <h3>利用方法</h3>
        <p>
          executeボタンをクリックすると、表示されているコードが実行されます。
        </p>
        <p>
          Dispatchした直後にFiberノードをコンソールに表示し、<code>debugger;</code>を行っています。<br />
          Chrome/Firefox等のDeveloprToolsで値の確認を行ってください。
        </p>
        <p>
          ソースコード: <a href="https://github.com/kamijin-fanta/react-fiber-sandbox/blob/master/src/App.js">https://github.com/kamijin-fanta/react-fiber-sandbox/blob/master/src/App.js</a>
        </p>
      </div>
    </div>
  );
}
