# pix-estatico-gh
Se vc precisa gerar um PIX com identificação para ajudar a consiliar o caixa mas não tem um grande sistema essa pode ser a solução

## Edite o arquivo index.js

```js
chavePix = '52670cd7-c5f8-4346-890f-47407a3cda24'
nomePix = 'JOSE EDUARDO CONSTANTINO MAZOLINI'
cidadePix = 'SOCORRO'
valorInicialPix = '5.00'
DescricaoPix = 'Ref a pagamento da fatura 1234567'
```

## index

Exibe o QR Code na tela do caixa que estiver virada para o cliente.

[https://eduardomazolini.github.io/pix-estatico-gh/](https://eduardomazolini.github.io/pix-estatico-gh/)

## form

Exibe o form para o caixa gerar o QR Code.

[https://eduardomazolini.github.io/pix-estatico-gh/form](https://eduardomazolini.github.io/pix-estatico-gh/form)

## fontes

Para o CRC16 foi usado o código deste [link](https://gist.github.com/chitchcock/5112270)
 
Para gerar a imagem do QRCode foi usado o código deste [link](https://davidshimjs.github.io/qrcodejs/)
 
Para fazer o PIX foram usados os documentos:
  * [AnexoI-PadroesParaIniciacaodoPix.pdf](https://www.bcb.gov.br/content/estabilidadefinanceira/forumpireunioes/AnexoI-PadroesParaIniciacaodoPix.pdf)
  * [Manual do BR Code.pdf](https://www.bcb.gov.br/content/estabilidadefinanceira/SiteAssets/Manual%20do%20BR%20Code.pdf)
