import BtnContagem from "../BtnContagem/BtnContagem";
import Card from "../Card/Card";


function Resenha () {
    return (
        <div>
            <h3>Resenha:</h3>
            <Card
                titulo="Título da Resenha"
                texto="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
            <BtnContagem/>
            
            
        </div>
    )
}

export default Resenha;
