function loadCustomScript(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas) {

// LAUKU ATIDENGIMAS PRIKLAUSOMAI NUO PASIRINKIMU

const vpaTrukme18Radio = document.getElementById('formbox-field-4_1');
const vpaTrukme24Radio = document.getElementById('formbox-field-4_2');
vpaTrukme18Radio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('vpaTrukme'));
vpaTrukme24Radio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('vpaTrukme'));
	
const tecioRadio = document.getElementById('formbox-field-5_2');
const mamosRadio = document.getElementById('formbox-field-5_1');
tecioRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecioRadio'));
mamosRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamosRadio'));

const npmTaipRadio = document.getElementById('formbox-field-6_1');
const npmNeRadio = document.getElementById('formbox-field-6_2');
npmTaipRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('npmTaip'));
npmNeRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('npmNe'));

const mamosPajamuInput = document.getElementById('formbox-field-8');
const tecioPajamuInput = document.getElementById('formbox-field-12');
const gimdymoDatosInput = document.getElementById('formbox-field-15');
mamosPajamuInput.addEventListener('input', event => {fieldset[mamosPajamuLaukas].removeClass('klaida');});	
tecioPajamuInput.addEventListener('input', event => {fieldset[tecioPajamuLaukas].removeClass('klaida');});	
gimdymoDatosInput.addEventListener('input', event => {fieldset[gimdymoDatosLaukas].removeClass('klaida');});	
	
let vpaLaukai = [ vpaTrukmesLaukas, vpaImsLaukas ];
let mLaukai = [ mamosPajamuLaukas];
let tLaukai = [tecioPajamuLaukas ];
let bendriLaukai = [ gimdymoDatosLaukas, rezultatuLaukas ];

let vpaRadios = [ vpaTrukme18Radio, vpaTrukme24Radio, tecioRadio, mamosRadio, npmTaipRadio, npmNeRadio ];

isjungtiLaukus();

function rodytiLaukusIsmokosSkaiciavimui(ismoka) {
	switch(ismoka) {
		case 'vpaTrukme' :
			fieldset[vpaTrukmesLaukas].removeClass('klaida');
			break;
		case 'tecioRadio' : 
			mamaArTetisVpa = 2;
			label[4].text('Mama naudosis 2 neperleidžiamais VPA mėnesiais?');
			fieldset[vpaImsLaukas].removeClass('klaida');
			naudosisNpm ? rodytiLaukus([ mamosPajamuLaukas ], true) : rodytiLaukus([ mamosPajamuLaukas ], false);
			break;
		case 'mamosRadio' : 
			mamaArTetisVpa = 1;
			label[4].text('Tėtis naudosis 2 neperleidžiamais VPA mėnesiais?');
			fieldset[vpaImsLaukas].removeClass('klaida');
			naudosisNpm ? rodytiLaukus([ tecioPajamuLaukas ], true) : rodytiLaukus([ tecioPajamuLaukas ], false);
			break;
		case 'npmTaip' :
			naudosisNpm = 1;
			mamaArTetisVpa === 1 ? rodytiLaukus([ tecioPajamuLaukas ], true) : mamaArTetisVpa === 2 ? rodytiLaukus([ mamosPajamuLaukas ], true) : null;
			fieldset[npmLaukas].removeClass('klaida');
			break;
		case 'npmNe' :
			naudosisNpm = 0;
 			mamaArTetisVpa === 1 && !tevystesIsmokaRodyti ? rodytiLaukus([ tecioPajamuLaukas ], false) : mamaArTetisVpa === 2 && !motinystesIsmokaRodyti? rodytiLaukus([ mamosPajamuLaukas ], false) : null;
			fieldset[npmLaukas].removeClass('klaida');
			break;
	}
}

function isjungtiLaukus() {
	
	rodytiLaukus(bendriLaukai, true);	
	rodytiLaukus(vpaLaukai, true);
			if (!naudosisNpm) {
				if(mamaArTetisVpa === 2) {
					rodytiLaukus( [...mLaukai[0], ...mLaukai[1] ], false);
				}
				if(mamaArTetisVpa === 1) {
					rodytiLaukus( [...tLaukai[0], ...tLaukai[1] ], false);
				}
			} 
}

function atzymetiRadios(radios) {
	for (element of radios) {
		element.checked = false;
	}
}



function rodytiLaukus(visiLaukuNumeriaiArray, rodytiTrueOrFalse) {
 	visiLaukuNumeriaiArray.forEach(laukoNr => {rodytiTrueOrFalse ? fieldset[laukoNr].removeClass('nerodyti') : fieldset[laukoNr].addClass('nerodyti');} )
};

// jquery reset mygtukas istrina viska, kas buvo suzymeta, ir paslepia visus laukus

jQuery('.formbox__btn-reset').on('click', function(){
	sessionStorage.removeItem('done'); 
	fieldset[rezultatuLaukas].removeClass('has-result'); 
	fieldset[rezultatuLaukas].hide(); 
	rodytiLaukus([...vpaLaukai,...bendriLaukai, npmLaukas, ...mLaukai[0], ...mLaukai[1], ...tLaukai[0], ...tLaukai[1]], false);
	atzymetiRadios([ ...vpaRadios ]);
	jQuery('#rezultatuLentele').empty();
});

jQuery('input').on('change', function(){
	if(motinystesIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
	if(tevystesIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
	if(vpaIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
});

jQuery('form').on('change', function(){
	if(motinystesIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
	if(tevystesIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
	if(vpaIsmokaRodyti) {fieldset[rezultatuLaukas].show();};
});
	
// sugeneruoja date picker is paprasto textfield

datosInput.addClass('date_picker');
datosInput.addAttr('placeholder', 'yyyy-mm-dd');

jQuery(document).ready(function($) {
	$('.date_picker').datepicker({
		dateFormat : 'yy-mm-dd',
		monthNames: [ "Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis" ],
		monthNamesShort: [ "Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis" ],
		dayNamesMin: [ "S", "Pr", "A", "T", "K", "Pn", "Š" ],
		firstDay: 1,
		changeMonth: true,
		changeYear: true,
	});
	
});
}

function skaiciuotiIsmokas(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas) {

// SKAICIUOJAME LUBAS IR GRINDIS

let minIsmoka = bazineSocIsmoka * 6 ; //  6 bazinės socialinės išmokos dydžiai galioję praeitą ketvirtį (paskutinis patvirtintas dydis) iki teisės gauti išmoką atsiradimo dienos.
minIsmoka.round(2);

let duomenysMaxIsmokai = {
    'metai' : null,
    'ketvirtis' : null
};

// PASIRENKAM, KURI KETVIRTI IMTI (IMA PRIESPASKUTINI)
function ketvirtisIsmokoms(data) {
    if(Math.floor(data.getMonth() / 3) <= 0) {
        duomenysMaxIsmokai.metai = data.getFullYear() - 1;
        duomenysMaxIsmokai.ketvirtis = 4 + (Math.floor(data.getMonth() / 3));
    } else {
        duomenysMaxIsmokai.metai = data.getFullYear();
        duomenysMaxIsmokai.ketvirtis = Math.floor(data.getMonth() / 3);
    };
};

ketvirtisIsmokoms(new Date(gimdymoData));

function flatten(arr) {
    return arr.reduce((flat, sub_arr) => flat.concat(sub_arr.slice(1)), []);
};

function findLastPositive(arr) {
    return arr.reduceRight((lastPositive, current) => {
        return current > 0 && lastPositive === undefined ? current : lastPositive;
    }, undefined);
};

let maxIsmoka = vdu.filter(el => el[0] === duomenysMaxIsmokai.metai).length == 0 || vdu.filter(el => el[0] === duomenysMaxIsmokai.metai)[0][duomenysMaxIsmokai.ketvirtis] == 0 ? 
		duomenysMaxIsmokai.metai > vdu[0][0] ? findLastPositive(flatten(vdu))*2  : vdu[0][1]*2 : (vdu.filter(el => el[0] === duomenysMaxIsmokai.metai)[0][duomenysMaxIsmokai.ketvirtis])*2;
maxIsmoka.round(2);

// PASIDAROM LENTELE SU ISMOKU SARASU PAMENESIUI

let menesiai = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let gimimoDiena = new Date(gimdymoData);
function diena(dataDienai) {
	let gimtadienis = dataDienai.getDate() > 9 ? dataDienai.getDate() : '0' + dataDienai.getDate();
	return gimtadienis;
} 

let d = new Date(gimimoDiena);
d.setDate(d.getDate() - 70);
// nuo gimdymo datos atimam 10 savaiciu, -70 d., nepriskaiciuoti prasymo svarstymo datos ir ismokejimo datos
let motinystesIsmokosData = d.getFullYear() + " " + menesiai[d.getMonth()] + " " + diena(d); // plius 1 mėn., nes skaičiuoja nuo 0 (t.y. pirmas mėnuo yra 0)
let tevystesIsmokosPabaiga = (gimimoDiena.getFullYear() + 1) + " " + menesiai[gimimoDiena.getMonth()-1] + " " + diena(gimimoDiena); // minus vienas, nes getMonth() nuo 1, o array menesiai nuo 0

let gDiena = gimimoDiena.getFullYear() + " " + menesiai[gimimoDiena.getMonth()] + " " + diena(gimimoDiena);
let gMenuo = gimimoDiena.getMonth();
let vpaPradzia = new Date(gimimoDiena);
vpaPradzia.setDate(vpaPradzia.getDate() + 56);
let vpaMenuo = vpaPradzia.getMonth() + 1 - gMenuo + 1;


// PASIDAROME BAZE SKAICIAVIMUI

function galutineIsmokosSuma(bazeIsmokai, tarifas, menSkaicius) {
	let galutineIsmoka = bazeIsmokai < maxIsmoka && bazeIsmokai > minIsmoka ? bazeIsmokai * tarifas/100 * (1 - mokesciaiNuoIsmoku/100) : bazeIsmokai > maxIsmoka ? maxIsmoka * tarifas/100 * (1 - mokesciaiNuoIsmoku/100) : minIsmoka * (1 - mokesciaiNuoIsmoku/100);
	return galutineIsmoka.round(2) * menSkaicius;
}
function ismokosSumaSuMokesciais(bazeIsmokai, tarifas, menSkaicius) {
	let galutineIsmoka = bazeIsmokai < maxIsmoka && bazeIsmokai > minIsmoka ? bazeIsmokai * tarifas/100 : bazeIsmokai > maxIsmoka ? maxIsmoka * tarifas/100 : minIsmoka;
	return galutineIsmoka.round(2) * menSkaicius;
}

let mamosBazeIsmokai = mamosPajamos;
let tecioBazeIsmokai = tecioPajamos;

//pasidarome vpa ismoku sarasa 

let vpaIsmokos = [];
let mamaVpa = mamaArTetisVpa === 1; // patikriniam, ar mama eis vpa (jei ne, tai vadinasi tetis)
function pajamuBaze(arMamaVpa){
	const baze = arMamaVpa ? mamosBazeIsmokai : tecioBazeIsmokai;
	return baze;
}; //jei mama, tai ima mamos. jei tetis arba !mama - tai ima tecio

let bazeSkaiciavimui = pajamuBaze(mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms pagrindinems
let bazeNpmSkaiciavimui = pajamuBaze(!mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms npm

let bendraIsmokuSuma = 0;
let bendraIsmokuSumaSuMokesciais = 0;

function tekstasIsmokuSarasui(metuNuoGimdymo, i, npm) {
		const tarifas = i < 4 || npm ? neperleidziamuMenesiuTarifas : vpaTrukme <= 18 ? tarifasAtostogos18men : i < 13 ? tarifasAtostogos24men[0] : tarifasAtostogos24men[1];
		const tarifasSpausdinimui = i < 4 || npm ? tarifas.toLocaleString("lt-LT") + ' % (npm***)' : tarifas.toLocaleString("lt-LT") + ' %';
		const menuo = (gimimoDiena.getFullYear() + metuNuoGimdymo) + " " + menesiai[gMenuo + i >= 12 ? (gMenuo + i)%12: gMenuo + i];
		const baze = npm ? bazeNpmSkaiciavimui : bazeSkaiciavimui;
		const suma = ismokosSumaSuMokesciais(baze, tarifas, 1).toLocaleString("lt-LT")  + " €";
		const sumaPoMokesciu = galutineIsmokosSuma(baze, tarifas, 1).toLocaleString("lt-LT") + " €";
		const gavejas = !npm ? mamaVpa? 'mama' : 'tėtis' : mamaVpa? 'tėtis' : 'mama'; 
		bendraIsmokuSuma += galutineIsmokosSuma(baze, tarifas, 1);
		bendraIsmokuSumaSuMokesciais += ismokosSumaSuMokesciais(baze, tarifas, 1);
		vpaIsmokos.push({'tarifas' : tarifasSpausdinimui, 'men' : menuo, 'suma' : suma, 'sumaPoMokesciu': sumaPoMokesciu, 'gavejas' : gavejas});
}

for (let i = 2 ; i <= vpaTrukme + 1; i++) {
	const praejoMetu = Math.trunc((gimimoDiena.getMonth() + i)/12);
	if(i > vpaTrukme - 1 && naudosisNpm) {
 tekstasIsmokuSarasui(praejoMetu, i, true);
	} else if (i <= vpaTrukme - 1) {
		tekstasIsmokuSarasui(praejoMetu, i);
	}
}

vpaIsmokos.push({'tarifas' : '', 'men' : 'Viso:', 'suma' : bendraIsmokuSumaSuMokesciais.toLocaleString("lt-LT") + ' €', 'sumaPoMokesciu': bendraIsmokuSuma.toLocaleString("lt-LT") + ' €', 'gavejas' : ''});

// funkcija eiluciu generavimui pagal duomenis

function createRow(data, ismokuPavadinimas) {
	let rows = '';

	if (ismokuPavadinimas !== '') {
		rows += `<tr>
			 <td colspan='5' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${ismokuPavadinimas}</td>
			</tr>`
		
		for(let i = 0; i < data.length ; i++) {
			const fontWeight = (i + 1 > 5) && (i + 1 >= data.length) ? 'bold' : 'normal';
			rows += `<tr>
					<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].tarifas}</td>
					<td style='text-align: left; font-size: .85em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].men}</td>
					<td style='text-align: left; font-size: .85em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].suma}</td>
					<td style='text-align: left; font-size: .85em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].sumaPoMokesciu}</td>
					<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].gavejas}</td>
				</tr>`
		}
	}
	return rows;	
};

// pasidarome pavadinimus stulpeliu

let vpaIsmokosPavadinimas = (tecioPajamos || mamosPajamos) > 0 ? 'Vaiko priežiūros atostogų išmoka:' : '';
let paaiskinimuPavadinimas = tecioPajamos || mamosPajamos > 0 ? 'Paaiškinimai:' : '';
let pavadinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['tarifas', 'data*', 'suma**', 'suma (į rankas)', 'gavėjas'] : ['', '', '', '', ''];


// pasidarom paaiskinimu tekstus

let paaiskinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['* - Preliminari teisės į išmoką atsiradimo data, t.y. nuo kada galima kreiptis dėl išmokos.','', '** - preliminariai apskaičiuota išmokos suma pagal pateiktus duomenis (faktinės išmokos gali nežymiai kisti, priklausomai nuo gimdymo datos, atostogų, ligos ir pan.)', '', '', '', ''] : ['', '', '', '', '', '', ''];
	
mamosPajamos > 0  && mamosBazeIsmokai > maxIsmoka ? paaiskinimai[3] += `Mamos pajamos viršija maksimalų galimą išmokos dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur). ` : mamosPajamos > 0  && mamosBazeIsmokai < minIsmoka ? paaiskinimai[3] += `Mamos pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur). ` : null;

tecioPajamos > 0 && tecioBazeIsmokai < minIsmoka ? paaiskinimai[3] += `Tėčio pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur).` : tecioPajamos > 0 && tecioBazeIsmokai > maxIsmoka ? paaiskinimai[3] += `Tėčio pajamos viršija šiuo metu galiojantį maksimalų galimą išmokos dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur).` : null;

(tecioPajamos || mamosPajamos) > 0 ? paaiskinimai[4] = '*** - NPM yra 2 neperleidžiami mėnesiai mamai ir 2 neperleidžiami mėnesiai tėčiui. Didesnis tarifas taikomas tik neperleidžiamais VPA mėnesiais (NPM), ir jais atitinkamai gali pasinaudoti tik mama arba tėtis. Jei NPM naudoja tik vienas iš tėvų, išmoka pradingsta, o VPA sutrumpėja' : null;

// sugeneruojame rezultatu lentele

let rezultatuLentele = 
`<table id='rezultatuLentele' class='rezultatuLentele'  style='border-collapse: separate !important; border-spacing: .60em !important;'>
<thead>
<tr>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'>${pavadinimai[0]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[1]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[2]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[3]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[4]}</th>
</tr>
</thead>
<tbody>
${createRow(vpaIsmokos, vpaIsmokosPavadinimas)}
<tr><td colspan='5' class='segment' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${paaiskinimuPavadinimas}</td></tr>
<tr><td colspan='5'>${paaiskinimai[0]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[1]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[5]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[2]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[6]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[3]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[4]}</td></tr>
</tbody>
</table>
`

rezultatai = rezultatuLentele;

	return rezultatai;
}

function getAlert(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas){

	generateAlert(vpaTrukme === undefined, vpaTrukmesLaukas);
	generateAlert(mamaArTetisVpa === undefined, vpaImsLaukas);
	generateAlert(naudosisNpm === undefined, npmLaukas);
	generateAlert(gimdymoData === '', gimdymoDatosLaukas);

	if(mamaArTetisVpa === 1 || (mamaArTetisVpa === 2 && naudosisNpm) ) {
	generateAlert(mamosPajamos <= 0, mamosPajamuLaukas);
	generateAlert(gimdymoData === '', gimdymoDatosLaukas);
	}

	if(mamaArTetisVpa === 2 || (mamaArTetisVpa === 1 && naudosisNpm) ) {
		generateAlert(tecioPajamos <= 0, tecioPajamuLaukas);
		generateAlert(gimdymoData === '', gimdymoDatosLaukas);
	}
	



	function generateAlert(conditionToGenerateAlert, fieldsetNumberToAddStyling) {
		if (conditionToGenerateAlert) {
		    fieldset[fieldsetNumberToAddStyling].addClass('klaida');
		    calcAlert = 'Užpildykite raudonai pažymėtus laukelius ir spauskite "SKAIČIUOTI"';
		  } else {
		    fieldset[fieldsetNumberToAddStyling].removeClass('klaida');
		  }
	}


	// // sugeneruoja rezultato label
	(mamosPajamos > 0 || tecioPajamos > 0)  && calcAlert === "" ? label[rezultatuLaukas].text('Preliminariai apskaičiuotos išmokos**:') : label[rezultatuLaukas].text('');
	(mamosPajamos > 0 || tecioPajamos > 0) && calcAlert === "" ? fieldset[rezultatuLaukas].addClass('has_border') : null;
	calcAlert !== "" ? label[klaiduLaukas].text('Klaida! Trūksta duomenų ') : label[klaiduLaukas].text('');

return calcAlert;
}
