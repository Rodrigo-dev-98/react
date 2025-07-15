import React from 'react';
import Produto from './Produto';

const App = () => {
  const[product, setProduct] = React.useState(null);
  const[loading, setLoading] = React.useState(null);

  async function handleClick(e) {
    setLoading(true);
    const r = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    );
    const json = await r.json();
    setProduct(json);
    setLoading(false);
  }

  return (
    <div>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>smartphone</button>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>tablet</button>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>notebook</button>
      {loading && <p>Carregando...</p>}
      {!loading && product && <Produto product={product}/>}
      
    </div>
  );
};

export default App;
