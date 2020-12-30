function createDeBounce(func, sleep){
    var timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(func, sleep);    
    }
}
function enviaQR(){
    let valor = document.getElementById('valor').value
    let nossoNumero = document.getElementById('nossoNumero').value
    let descricaoPix = document.getElementById('descricaoPix').value
    const channel = new BroadcastChannel('app-pix');
    console.log('enviou')
    channel.postMessage({valor,nossoNumero,descricaoPix})
}

var deBounceSend = createDeBounce(enviaQR, 1000)

function onSubmitForm(ev){
    ev.preventDefault();
    deBounceSend();
}
document.getElementById('pixForm').onsubmit = onSubmitForm
document.getElementById('valor').onchange = onSubmitForm
document.getElementById('nossoNumero').onchange = onSubmitForm
document.getElementById('descricaoPix').onchange = onSubmitForm
document.getElementById('valor').onkeyup = onSubmitForm
document.getElementById('nossoNumero').onkeyup = onSubmitForm
document.getElementById('descricaoPix').onkeyup = onSubmitForm
