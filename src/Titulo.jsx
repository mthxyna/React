import { useState } from "react";
// Um componente é criado como uma função com os conteúdos dentro
// Um componente pode-se criar separadamente
function Titulo({nome, paragrafo,cor}){
    // let nome = "Thayná Machado" 
    const[texto,setTexto] = useState("Um título do estado inicial")
     return(
        // <div>
        //     <h1>Oi eu sou {nome}</h1>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error commodi quibusdam harum ab quod veniam modi rerum tenetur eos aliquid distinctio nostrum provident eius numquam, architecto vitae ullam odit.</p>
        // </div>
        <div>
        <h1 style={{color:cor}}>{texto} Oi eu sou {nome ? nome : "Fulano"}</h1>
        { paragrafo ? 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error commodi quibusdam harum ab quod veniam modi rerum tenetur eos aliquid distinctio nostrum provident eius numquam, architecto vitae ullam odit.</p>
            :
            <p></p>
}
    </div>
     ) 
}

export default Titulo