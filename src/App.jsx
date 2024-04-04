import Titulo from "./Titulo"

function App(){
  return(
    <div>
      <Titulo cor="purple" nome="Thay" paragrafo={true}/>
      <Titulo cor="blue"/>
      <Titulo cor="green"/>
    </div>
  ) 
}
// para retornar mais de um componete é preciso abrir parenteses no return e colocar uma div dentro disso
// return(
// <div></div>
// )
export default App