//https://www.bcb.gov.br/content/estabilidadefinanceira/forumpireunioes/AnexoI-PadroesParaIniciacaodoPix.pdf
//https://www.bcb.gov.br/content/estabilidadefinanceira/SiteAssets/Manual%20do%20BR%20Code.pdf

pixRef = {
    '0' : '01',
    '26' : {
        '00' : 'br.gov.bcb.pix',
        '01' : '123e4567-e12b-12d1-a456-426655440000'
        },
    '52' : '0000',
    '53' : '986',
    '58' : 'BR',
    '59' : 'Fulano de Tal',
    '60' : 'BRASILIA',
    '62' : {
        '05' : '***'
        }
}

function pixparse(o,deep=0){
    let k = Object.keys(o)
    let s = ''
    for (let i=0; i<k.length; i++){
        if (typeof(o[k[i]]) == 'string'){
            console.debug(''.padStart(deep,'*'),
                        k[i].toString().padStart(2,'0'),
                        o[k[i]].length.toString().padStart(2,'0'),
                        o[k[i]])
            s += '' + 
                k[i].toString().padStart(2,'0') + 
                o[k[i]].length.toString().padStart(2,'0') + 
                o[k[i]]
        } else {
            let si = pixparse(o[k[i]],deep+1)
            console.debug(''.padStart(deep,'*'),
                        k[i],
                        si.length.toString().padStart(2,'0'),
                        si)
            s += '' + 
                k[i].toString().padStart(2,'0') + 
                si.length.toString().padStart(2,'0') + 
                si
        }
    }
    return s
}

function pixGenerate(pix){
    let p = pixparse(pix)+'6304'
    return p+(crc16(p)).toString(16).toUpperCase()
}