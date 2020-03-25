import React , { useState }from 'react';

import Header from './Header';

function App() {

  // Retorna um array do tipo
  // [valorAtual, function atualizacao()]
  const [counter, setCounter] = useState(0); //inicializar

  function increment()
  {
    setCounter(counter + 1);
  }


  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
