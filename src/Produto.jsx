import React from 'react'

const Produto = ({product}) => {
  return (
    <div className='produto'>
      <style>
        {`
          .produto {
            border: 1px solid #eee;
            border-radius: 10px;
            padding: 10px;
            margin: 10px 0;
            width: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          img {
            width: 100%;
            border-radius: 10px;
            margin-top: 30px;
          }

          h1 {
            font-size: 1.5rem;
            margin: 10px 0;
          }

          p {
            font-size: 1.2rem;
            margin: 10px 0;
            text-align: center;
          }
        `}
      </style>
      <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
      <h2>{product.nome}</h2>
      <p>R$ {Number(product.preco).toFixed(2).replace('.', ',')}</p>
      <p>{product.descricao}</p>

      <button>Comprar</button>
    </div>
  )
}

export default Produto
