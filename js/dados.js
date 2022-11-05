let jsonGoodGirl = '{ "descProdGoodGirl":"GOOD GIRL DOT DRAMA EDP", "descProdDwGoodGirl":"Carolina Herreira", "qtdProdGoodGirl":"80 ml", "precoGoodGirl": "10X R$ 49,99", "valorVistaGoodGirl":"ou R$ 499,00 à vista", "precoAltGoodGirl":"15X R$ 38,07" }';
let dataGoodGirl = JSON.parse(jsonGoodGirl);



let descProdGoodGirl = document.getElementsByName('descProdGoodGirl');
let descProdDw = document.getElementsByName('descProdDwGoodGirl');
let qtdProd = document.getElementsByName('qtdProdGoodGirl');
let preco = document.getElementsByName('precoGoodGirl');
let valorVista = document.getElementsByName('valorVistaGoodGirl');
let precoAlt = document.getElementsByName('precoAltGoodGirl');



descProdGoodGirl[0].innerHTML = dataGoodGirl.descProdGoodGirl;
descProdDw[0].innerHTML = dataGoodGirl.descProdDwGoodGirl;
qtdProd[0].innerHTML = dataGoodGirl.qtdProdGoodGirl;
preco[0].innerHTML = dataGoodGirl.precoGoodGirl;
valorVista[0].innerHTML = dataGoodGirl.valorVistaGoodGirl;
precoAlt[0].innerHTML = dataGoodGirl.precoAltGoodGirl;

let jsonJohson = '{ "descProdJohson":"Colônia Johnsons Baby", "descProdDwJohson":"johnsons & johnsons", "qtdProdJohson":"200 ml", "precoJohson": "5X R$ 10,00", "valorVistaJohson":"ou R$ 50,00 à vista", "precoAltJohson":"10X R$ 5,00" }';
let dataJohson = JSON.parse(jsonJohson);

let descProdJohson = document.getElementsByName('descProdJohson');
let descProdDwJohson = document.getElementsByName('descProdDwJohson');
let qtdProdJohson = document.getElementsByName('qtdProdJohson');
let precoJohson = document.getElementsByName('precoJohson');
let valorVistaJohson = document.getElementsByName('valorVistaJohson');
let precoAltJohson = document.getElementsByName('precoAltJohson');

descProdJohson[0].innerHTML = dataJohson.descProdJohson;
descProdDwJohson[0].innerHTML = dataJohson.descProdDwJohson;
qtdProdJohson[0].innerHTML = dataJohson.qtdProdJohson;
precoJohson[0].innerHTML = dataJohson.precoJohson;
valorVistaJohson[0].innerHTML = dataJohson.valorVistaJohson;
precoAltJohson[0].innerHTML = dataJohson.precoAltJohson;
