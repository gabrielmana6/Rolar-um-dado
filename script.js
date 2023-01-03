const btn_rolar_dado = document.getElementById("btn_rolar_dado");
const btn_mostrar_historico = document.getElementById("btn_mostrar_historico");

var contador = 0;

const ladosDado = {
    1 : "assets/1.png",
    2 : "assets/2.png",
    3 : "assets/3.png",
    4 : "assets/4.png",
    5 : "assets/5.png",
    6 : "assets/6.png"
}

btn_mostrar_historico.addEventListener("click", ()=>{
    var historico = document.getElementById("historico");
    
    if (isHistoricoShowing() == true) {
        btn_mostrar_historico.innerText = "Mostrar histórico▼";
        historico.style.display = "none";
    } else {
        btn_mostrar_historico.innerText = "Esconder histórico▼";
        historico.style.display = "flex";
    }
});

function isHistoricoShowing() {
    if (btn_mostrar_historico.innerText == "Esconder histórico▼")
        return true;
    else
        return false;
}

btn_rolar_dado.addEventListener("click", ()=>{
    if (isDadoParado() == true) {
        document.getElementById("img_dado").src = "assets/diceroll.gif";
        btn_rolar_dado.innerText = "Parar Dado";
    } else {
        var valorSorteado = realizaSorteio();
        var srcImgDado = ladosDado[valorSorteado];

        document.getElementById("img_dado").src = srcImgDado;
        btn_rolar_dado.innerText = "Rolar Dado";

        salvaNoHistorico(srcImgDado, valorSorteado);
    }
});

function isDadoParado() {
    if (btn_rolar_dado.innerText == "Rolar Dado") 
        return true;
    else 
        return false;
}

function realizaSorteio() {
    var valorSorteado = Math.floor(Math.random() * 6) + 1;
    return valorSorteado;
}

function salvaNoHistorico(srcImgDado, valorSorteado) {
    contador++;
    document.getElementById("historico").innerHTML += `
    <div class="resultado">
        <h2>Rodada: `+ contador + `</h2>
        <p>Valor: ` + valorSorteado + `</p>
        <img src=`+ srcImgDado + ` alt="imagem de dado com valor ` + valorSorteado + `." />
    </div>
    `    
}