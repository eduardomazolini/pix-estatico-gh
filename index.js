//https://gist.github.com/chitchcock/5112270
//https://davidshimjs.github.io/qrcodejs/
//https://www.bcb.gov.br/content/estabilidadefinanceira/forumpireunioes/AnexoI-PadroesParaIniciacaodoPix.pdf
//https://www.bcb.gov.br/content/estabilidadefinanceira/SiteAssets/Manual%20do%20BR%20Code.pdf
chavePix = '52670cd7-c5f8-4346-890f-47407a3cda24'
nomePix = 'JOSE EDUARDO CONSTANTINO MAZOLINI'
cidadePix = 'SOCORRO'
valorInicialPix = '5.00'
DescricaoPix = 'Ref a pagamento da fatura 1234567'

pix = {
    '0' : '01',
    '26' : {
        '00' : 'br.gov.bcb.pix',
        '01' : chavePix,
        '02' : DescricaoPix.slice(0,33)
       },
    '52' : '0000',
    '53' : '986',
    '54' : valorInicialPix,
    '58' : 'BR',
    '59' : nomePix.slice(0,25),
    '60' : cidadePix,
    '62' : {
        '05' : '***'
    }
}
//00 02 01 = 6 versão
//sobra 19

//01 06 122020 = referencia
//0002010106122020
//xxxxxxxxx

window.onload = function() {
    var qrcode = new QRCode("qrcode",{
        width: 300,
        height: 300,
        correctLevel : QRCode.CorrectLevel.L
    });
    qr = pixGenerate(pix);
    qrcode.makeCode(qr);
    console.log(qr)
    
    const channel = new BroadcastChannel('app-pix');
    channel.addEventListener ('message', (event) => {
        console.log('Valor',event.data.valor);
        console.log('nossoNumero',event.data.nossoNumero);
        pix = {
            '0' : '01',
            '26' : {
                '00' : 'br.gov.bcb.pix',
                '01' : chavePix,
                '02' : event.data.descricaoPix.slice(0,33)
               },
            '52' : '0000',
            '53' : '986',
            '54' : event.data.valor,
            '58' : 'BR',
            '59' : nomePix.slice(0,25),
            '60' : cidadePix,
            '62' : {
                '05' : {'00':'01',
                    '01':event.data.nossoNumero.padStart(15,'0')
                }
            }
        }
        qr = pixGenerate(pix);
        qrcode.makeCode(qr);
        console.log(qr);
        qr64=btoa(qr);
        document.getElementById('valor').innerHTML='<p>Valor: R$'+event.data.valor+'</p>'
        document.getElementById('descricaoPix').innerHTML='<p>Informações Adicionais: '+event.data.descricaoPix.slice(0,33)+'</p>'
        document.getElementById('nossoNumero').innerHTML='<p>ID: '+event.data.nossoNumero+'</p>'
        document.getElementById('pixstr').innerHTML='<p>PIX: '+qr+'</p>'
        document.getElementById('pixlink').innerHTML="<a target='_blank' href='https://pix.bcb.gov.br/qr/"+qr64+"'>https://pix.bcb.gov.br/qr/"+qr64+"</a>"
    });
}
