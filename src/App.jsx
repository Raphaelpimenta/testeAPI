import React from 'react';
// import Ativos from './componentes/ativos';



function App() {
  const [dados, setDados] = React.useState(null)

  
  async function clicou() {

    console.log('To aquiiii')

    const data = {
      "email": "teste-teste@sp.senai.br",
      "password": "senha123"
    }

  let x = await fetch("http://localhost:3400/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    const armazenamento = x.token

    console.log(armazenamento)
  }

  // async function testeUser(){

  //   const data2 = {
  //     "email": "teste-teste-teste@sp.senai.br",
  //     "password": "senha12345"
  //   }

  //   let outroPost = await fetch("http://localhost:3400/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data2),
  //   }).then((response) => response.json())
  //   .then((data2) => {
  //     return data2;
  //   }).catch((error) => {
  //     console.log('deu erro', error)
  //   });

  //   console.log(outroPost)


  // }


//   async function listagemAtivos () {

//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDkyMzI3OTgsImV4cCI6MTcwOTIzNTc5OCwic3ViIjoiZTFkNjU4MzgtYTJlNi00ZWQ4LThhYjYtMGRiMWRkMmQ1ODkzIn0.mmdsvz7F40D2mOu7kFe1j8hhdxURoSSiyOejR8oFvvc'

//     const myHeaders = new Headers({
//       'Authorization': `Bearer ${token}`
//     });
    
//     const myInit = {
//       method: 'GET',
//       headers: myHeaders
//     };
    
//     const myRequest = new Request('http://localhost:3400/ativos/all_ativos', myInit);
    
//     const teste = await fetch(myRequest).then(response => {
//         return response.json();
//     })
//     .then((data3) => {
//         return data3.nome_ativo
//       });
      
//       console.log(teste);


//  }





  return (
    <>
      <button style={{margin: ".5rem"}} onClick={clicou}>Teste</button>
      {/* <button style={{margin: ".5rem"}} onClick={testeUser}>Teste 2</button>
      <button style={{margin: ".5rem"}} onClick={listagemAtivos}>Teste 3</button> */}
      {dados}
      
    </>
  )
}

export default App
