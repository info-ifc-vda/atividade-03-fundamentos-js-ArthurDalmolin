const nome = "Arthur";

function mensagem(nome, hora){
    if(hora > 5){
        console.log("bom dia" + nome);
        
    }else if (hora > 12){
        console.log("boa tarde" + nome);
    }else{
        console.log("boa noite" + nome);
        
    }
}
mensagem(14);

