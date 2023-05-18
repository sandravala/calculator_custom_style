function loadCustomScript(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput) {

// pasidarysiu formboxfield ir kt elementu surinkima i viena array (get elements by class ar pan)


// LAUKU ATIDENGIMAS PRIKLAUSOMAI NUO PASIRINKIMU

const motinystesCheck = document.getElementById('formbox-field-1');
const tevystesCheck = document.getElementById('formbox-field-2');
const vpaCheck = document.getElementById('formbox-field-3');
motinystesCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('motinystes'));
tevystesCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tevystes'));
vpaCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('vpa'));

const vpaTrukme18Radio = document.getElementById('formbox-field-4_1');
const vpaTrukme24Radio = document.getElementById('formbox-field-4_2');

const tecioRadio = document.getElementById('formbox-field-5_2');
const mamosRadio = document.getElementById('formbox-field-5_1');
tecioRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecioRadio'));
mamosRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamosRadio'));

const npmTaipRadio = document.getElementById('formbox-field-6_1');
const npmNeRadio = document.getElementById('formbox-field-6_2');
npmTaipRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('npmTaip'));
npmNeRadio.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('npmNe'));

const mamosDUpajamos = document.getElementById('formbox-field-7_1');
const mamosIVpajamos = document.getElementById('formbox-field-7_2');
const tecioDUpajamos = document.getElementById('formbox-field-11_1');
const tecioIVpajamos = document.getElementById('formbox-field-11_2');
mamosDUpajamos.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamosDU'));
mamosIVpajamos.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamosIV'));
tecioDUpajamos.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecioDU'));
tecioIVpajamos.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecioIV'));

const mamosIslaidos30 = document.getElementById('formbox-field-9_1');
const mamosIslaidosFaktas = document.getElementById('formbox-field-9_2');
const tecioIslaidos30 = document.getElementById('formbox-field-13_1');
const tecioIslaidosFaktas = document.getElementById('formbox-field-13_2');
mamosIslaidos30.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamos30'));
mamosIslaidosFaktas.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('mamosIslaidos'));
tecioIslaidos30.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecio30'));
tecioIslaidosFaktas.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tecioIslaidos'));

let vpaLaukai = [ vpaTrukmesLaukas, vpaImsLaukas ];
let mLaukai = [ [mamosPajamuTipoLaukas, mamosPajamuLaukas], [mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas] ];
let tLaukai = [ [tecioPajamuTipoLaukas, tecioPajamuLaukas], [tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas] ];
let bendriLaukai = [ gimdymoDatosLaukas, rezultatuLaukas ];

let vpaRadios = [ vpaTrukme18Radio, vpaTrukme24Radio, tecioRadio, mamosRadio, npmTaipRadio, npmNeRadio ];
let mRadios = [ mamosDUpajamos, mamosIVpajamos, mamosIslaidos30, mamosIslaidosFaktas ];
let tRadios = [ tecioDUpajamos, tecioIVpajamos, tecioIslaidos30, tecioIslaidosFaktas ];

function rodytiLaukusIsmokosSkaiciavimui(ismoka) {
	switch(ismoka) {
		case 'motinystes' : 
 			motinystesIsmokaRodyti = !motinystesIsmokaRodyti;
			isjungtiLaukus();
			break;
		case 'tevystes' :
			tevystesIsmokaRodyti = !tevystesIsmokaRodyti;
			isjungtiLaukus();
			break;
		case 'vpa' :
			vpaIsmokaRodyti = !vpaIsmokaRodyti;
			isjungtiLaukus();
			break;
		case 'tecioRadio' : 
			mamaArTetisVpa = 2;
			rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], true);
			label[4].text('Mama naudosis 2 neperleidžiamais VPA mėnesiais?');
			rodytiLaukus([ npmLaukas ], true);
			naudosisNpm ? rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], true) : motinystesIsmokaRodyti ? null : rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], false);
			break;
		case 'mamosRadio' : 
			mamaArTetisVpa = 1;
			rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], true);
			label[4].text('Tėtis naudosis 2 neperleidžiamais VPA mėnesiais?');
			rodytiLaukus([ npmLaukas ], true);
			naudosisNpm ? rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], true) : tevystesIsmokaRodyti ? null : rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], false);
			break;
		case 'mamosDU' :
			mamosIslaidos30.checked = false;
			mamosIslaidosFaktas.checked = false;
			rodytiLaukus([ mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas ], false);
			break;
		case 'mamosIV' : 
			mamosIslaidos30.checked = false;
			mamosIslaidosFaktas.checked = false;
			rodytiLaukus([ mamosIslaiduTipoLaukas ], true);
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], false);
			break;
		case 'tecioDU' :
			tecioIslaidos30.checked = false;
			tecioIslaidosFaktas.checked = false;
			rodytiLaukus([ tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas ], false);
			break;
		case 'tecioIV' : 
			tecioIslaidos30.checked = false;
			tecioIslaidosFaktas.checked = false;
			rodytiLaukus([ tecioIslaiduTipoLaukas ], true);
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], false);
			break;
		case 'mamosIslaidos' :
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], true);
			break;
		case 'mamos30' :
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], false);
			break;
		case 'tecioIslaidos' :
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], true);
			break;
		case 'tecio30' :
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], false);
			break;
		case 'npmTaip' :
			naudosisNpm = 1;
			mamaArTetisVpa === 1 ? rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], true) : mamaArTetisVpa === 2 ? rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], true) : null;
			break;
		case 'npmNe' :
			naudosisNpm = 0;
 			mamaArTetisVpa === 1 && !tevystesIsmokaRodyti ? rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], false) : mamaArTetisVpa === 2 && !motinystesIsmokaRodyti? rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], false) : null;
			break;
	}
}

function isjungtiLaukus() {
	
	vpaIsmokaRodyti || motinystesIsmokaRodyti || tevystesIsmokaRodyti ? rodytiLaukus(bendriLaukai, true) : rodytiLaukus(bendriLaukai, false);	
	
	switch (true) { 
    case !vpaIsmokaRodyti && !motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
			rodytiLaukus([...vpaLaukai, ...mLaukai[0], ...mLaukai[1], ...tLaukai[0], ...tLaukai[1]], false);
			atzymetiRadios([ ...vpaRadios, ...tRadios, ...mRadios ]);
      break;
    case !vpaIsmokaRodyti && !motinystesIsmokaRodyti && tevystesIsmokaRodyti:
    		rodytiLaukus([ ...vpaLaukai, ...mLaukai[0], ...mLaukai[1] ], false);
				atzymetiRadios([...vpaRadios, ...mRadios]);
    		rodytiLaukus(tLaukai[0], true);
        break;
		case !vpaIsmokaRodyti && motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
    		rodytiLaukus([...vpaLaukai, ...tLaukai[0], ...tLaukai[1] ], false);
				atzymetiRadios([...vpaRadios, ...tRadios]);
    		rodytiLaukus(mLaukai[0], true);
        break;
    case !vpaIsmokaRodyti && motinystesIsmokaRodyti && tevystesIsmokaRodyti:
				rodytiLaukus(vpaLaukai, false);
				atzymetiRadios(vpaRadios);
    		rodytiLaukus([ ...mLaukai[0], ...tLaukai[0] ], true);
        break;
		case vpaIsmokaRodyti && motinystesIsmokaRodyti && tevystesIsmokaRodyti:
    		rodytiLaukus([ ...vpaLaukai, ...mLaukai[0], ...tLaukai[0] ], true);
        break;
		case vpaIsmokaRodyti && !motinystesIsmokaRodyti && tevystesIsmokaRodyti:
				mamaArTetisVpa === 2 && !naudosisNpm ? rodytiLaukus( [...mLaukai[0], ...mLaukai[1] ], false) : null;
				atzymetiRadios(mRadios);
    		rodytiLaukus([ ...vpaLaukai, ...tLaukai[0] ], true);
        break;
		case vpaIsmokaRodyti && motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
				mamaArTetisVpa === 1 && !naudosisNpm ? rodytiLaukus( [...tLaukai[0], ...tLaukai[1] ], false) : null; 
				atzymetiRadios(tRadios);
    		rodytiLaukus([ ...vpaLaukai, ...mLaukai[0] ], true);
        break;
		case vpaIsmokaRodyti && !motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
			rodytiLaukus(vpaLaukai, true);
			if (!naudosisNpm) {
				mamaArTetisVpa === 2 ? rodytiLaukus( [...mLaukai[0], ...mLaukai[1] ], false) : mamaArTetisVpa === 1 ? rodytiLaukus( [...tLaukai[0], ...tLaukai[1] ], false) : null;
			} 
			atzymetiRadios([ ...mRadios, ...tRadios ]);
        break;
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
	atzymetiRadios([ ...vpaRadios, ...tRadios, ...mRadios ]);
  jQuery('#formbox-field-1').prop( "checked", false );
  jQuery('#formbox-field-2').prop( "checked", false );
  jQuery('#formbox-field-3').prop( "checked", false );
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
// Make a calculation when loading the form -> kad skaiciuotu tik tada, kai paspaudziamas mygtukas
}

function skaiciuotiIsmokas(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput) {

// SKAICIUOJAME LUBAS IR GRINDIS

let minIsmoka = bazineSocIsmoka * 6 ; //  6 bazinės socialinės išmokos dydžiai galioję praeitą ketvirtį (paskutinis patvirtintas dydis) iki teisės gauti išmoką atsiradimo dienos.
minIsmoka.round(2);

let duomenysMaxIsmokai = {
    'metai' : null,
    'ketvirtis' : null
};

// PASIRENKAM, KURI KETVIRTI IMTI (IMA PRIESPASKUTINI)
function ketvirtisIsmokoms(data) {
    if(Math.floor(data.getMonth() / 3) - 1 <= 0) {
        duomenysMaxIsmokai.metai = data.getFullYear() - 1;
        duomenysMaxIsmokai.ketvirtis = 4 + (Math.floor(data.getMonth() / 3) - 1);
    } else {
        duomenysMaxIsmokai.metai = data.getFullYear();
        duomenysMaxIsmokai.ketvirtis = Math.floor(data.getMonth() / 3) - 1;
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

let maxIsmoka = 
		vdu.filter(el => el[0] === duomenysMaxIsmokai.metai).length == 0 || vdu.filter(el => el[0] === duomenysMaxIsmokai.metai)[0][duomenysMaxIsmokai.ketvirtis] == 0 ? 
		findLastPositive(flatten(vdu)) : vdu.filter(el => el[0] === duomenysMaxIsmokai.metai)[0][duomenysMaxIsmokai.ketvirtis];
maxIsmoka.round(2);

// PASIDAROM LENTELE SU ISMOKU SARASU PAMENESIUI

let menesiai = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let gimimoDiena = new Date(gimdymoData);
function diena(dataDienai) {
	let gimtadienis = dataDienai.getDate() > 9 ? dataDienai.getDate() : '0' + dataDienai.getDate();
	return gimtadienis;
} 

let d = gimimoDiena;
d.setDate(d.getDate() - 70);
// nuo gimdymo datos atimam 10 savaiciu, -70 d., nepriskaiciuoti prasymo svarstymo datos ir ismokejimo datos
let motinystesIsmokosData = d.getFullYear() + " " + menesiai[d.getMonth()] + " " + diena(d); // plius 1 mėn., nes skaičiuoja nuo 0 (t.y. pirmas mėnuo yra 0)
let tevystesIsmokosPabaiga = (gimimoDiena.getFullYear() + 1) + " " + menesiai[gimimoDiena.getMonth()-1] + " " + diena(gimimoDiena); // minus vienas, nes getMonth() nuo 1, o array menesiai nuo 0

let gDiena = gimimoDiena.getFullYear() + " " + menesiai[gimimoDiena.getMonth()] + " " + diena(gimimoDiena);
let gMenuo = gimimoDiena.getMonth() + 1;
let vpaPradzia = gimimoDiena;
vpaPradzia.setDate(vpaPradzia.getDate() + 56);
let vpaMenuo = vpaPradzia.getMonth() + 1 - gMenuo + 1;


// PASIDAROME BAZE SKAICIAVIMUI

function galutineIsmokosSuma(bazeIsmokai, tarifas, menSkaicius) {
	let galutineIsmoka = bazeIsmokai < maxIsmoka && bazeIsmokai > minIsmoka ? bazeIsmokai * tarifas/100 * (1 - mokesciaiNuoIsmoku/100) : bazeIsmokai > maxIsmoka ? maxIsmoka * tarifas/100 * (1 - mokesciaiNuoIsmoku/100) : minIsmoka * (1 - mokesciaiNuoIsmoku/100);
	return galutineIsmoka.round(2) * menSkaicius;
}

let mamosBazeIsmokai = mamosPajamuTipas == 1 ? mamosPajamos : mamosIslaiduTipas == 1 ? (mamosPajamos - (mamosPajamos * 0.3)) * 0.9 : (mamosPajamos - mamosIslaidos) * 0.9;
let tecioBazeIsmokai = tecioPajamuTipas == 1 ? tecioPajamos : tecioIslaiduTipas == 1 ? (tecioPajamos - (tecioPajamos * 0.3)) * 0.9 : (tecioPajamos - tecioIslaidos) * 0.9;

// apskaiciuojame motinystes ismoka

let motinystesIsmoka = galutineIsmokosSuma(mamosBazeIsmokai, motinystesTarifas, 4);
let motinystesIsmokosEilute = motinystesIsmokaRodyti && mamosPajamos > 0 ? [{'tarifas' : motinystesTarifas  + ' %', 'men' : 'nuo ' + motinystesIsmokosData, 'suma' : motinystesIsmoka.toLocaleString("lt-LT") + " €", 'gavejas': 'mama'}] : [{'tarifas':'', 'men': '', 'suma': '', 'gavejas': ''}];

// apskaiciuojame tevystes ismoka

let tevystesIsmoka = galutineIsmokosSuma(tecioBazeIsmokai, tevystesTarifas, 1);
let tevystesIsmokosEilute = tevystesIsmokaRodyti && tecioPajamos > 0 ? [{'tarifas' : tevystesTarifas  + ' %', 'men' : 'nuo ' + gDiena , 'suma' : tevystesIsmoka.toLocaleString("lt-LT")  + " €", 'gavejas': 'tėtis'}] : [{'tarifas':'', 'men': '', 'suma': '', 'gavejas': ''}];

//pasidarome vpa ismoku sarasa 
let vpaIsmokos = [];
let mamaVpa = mamaArTetisVpa === 1; // patikriniam, ar mama eis vpa (jei ne, tai vadinasi tetis)
function pajamuBaze(arMamaVpa){
	const baze = arMamaVpa ? mamosBazeIsmokai : tecioBazeIsmokai;
	return baze;
}; //jei mama, tai ima mamos. jei tetis arba !mama - tai ima tecio

let bazeSkaiciavimui = pajamuBaze(mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms pagrindinems

let bazeNpmSkaiciavimui = pajamuBaze(!mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms npm

function tekstasIsmokuSarasui(metuNuoGimdymo, i, npm) {
		const tarifas = i < 6 || npm ? neperleidziamuMenesiuTarifas : vpaTrukme <= 18 ? tarifasAtostogos18men : i < 13 ? tarifasAtostogos24men[0] : tarifasAtostogos24men[1];
		const tarifasSpausdinimui = i < 6 || npm ? tarifas + ' % (npm***)' : tarifas + ' %';
		const menuo = (gimimoDiena.getFullYear() + metuNuoGimdymo) + " " + menesiai[gMenuo + i >= 12 ? gMenuo + i - 12 * metuNuoGimdymo: gMenuo + i];
		const baze = npm ? bazeNpmSkaiciavimui : bazeSkaiciavimui;
		const suma = galutineIsmokosSuma(baze, tarifas, 1);
		const gavejas = !npm ? mamaVpa? 'mama' : 'tėtis' : mamaVpa? 'tėtis' : 'mama'; 
	
		vpaIsmokos.push({'tarifas' : tarifasSpausdinimui,	'men' : menuo, 'suma' : suma.toLocaleString("lt-LT") + " €", 'gavejas' : gavejas});
}

for (let i = 4 ; i <= vpaTrukme + 1; i++) {
	const praejoMetu = Math.trunc((gimimoDiena.getMonth() + i - 1)/12);
	if(i > vpaTrukme - 1 && naudosisNpm) {
		tekstasIsmokuSarasui(praejoMetu, i, true);
	} else if (i <= vpaTrukme - 1) {
		tekstasIsmokuSarasui(praejoMetu, i);
	}
}

// funkcija eiluciu generavimui pagal duomenis

function createRow(data, ismokuPavadinimas) {
	let rows = '';

	if (ismokuPavadinimas !== '') {
		rows += `<tr>
						<td colspan='4' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${ismokuPavadinimas}</td>
					</tr>`
	}
	for(let i = 0; i < data.length ; i++) {
		rows += `<tr>
						<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].tarifas}</td>
						<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].men}</td>
						<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].suma}</td>
						<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].gavejas}</td>
					</tr>`
	}
	return rows;	
};

// pasidarome pavadinimus stulpeliu

let mIsmokosPavadinimas = motinystesIsmokaRodyti && mamosPajamos > 0 ? 'Motinystės išmoka:' : '';
let tIsmokosPavadinimas = tevystesIsmokaRodyti && tecioPajamos > 0 ? 'Tėvystės išmoka:' : '';
let vpaIsmokosPavadinimas = vpaIsmokaRodyti && (tecioPajamos || mamosPajamos) > 0 ? 'Vaiko priežiūros atostogų išmoka:' : '';
let paaiskinimuPavadinimas = tecioPajamos || mamosPajamos > 0 ? 'Paaiškinimai:' : '';
let pavadinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['tarifas', 'data*', 'suma**', 'gavėjas'] : ['', '', '', ''];


// pasidarom paaiskinimu tekstus

let paaiskinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['* - Teisės į išmoką atsiradimo data, t.y. nuo kada galima kreiptis dėl išmokos', '** - preliminariai apskaičiuota išmokos suma pagal pateiktus duomenis (faktinės išmokos gali nežymiai kisti, priklausomai nuo gimdymo datos, atostogų, ligos ir pan.)', '', ''] : ['', '', '', ''];
mamosPajamos > 0  && mamosBazeIsmokai > maxIsmoka ? paaiskinimai[2] += `Mamos pajamos viršija šiuo metu galiojantį maksimalų dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur). ` : mamosPajamos > 0  && mamosBazeIsmokai < minIsmoka ? paaiskinimai[2] += `Mamos pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur). ` : null;

tecioPajamos > 0 && tecioBazeIsmokai < minIsmoka ? paaiskinimai[2] += `Tėčio pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur).` : tecioPajamos > 0 && tecioBazeIsmokai > maxIsmoka ? paaiskinimai[2] += `Tėčio pajamos viršija šiuo metu galiojantį maksimalų dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur).` : null;

vpaIsmokaRodyti && (tecioPajamos || mamosPajamos) > 0 ? paaiskinimai[3] = '*** - didesnis tarifas taikomas tik neperleidžiamais VPA mėnesiais (NPM), ir jais atitinkamai gali pasinaudoti tik mama arba tėtis. Jei NPM nenaudojami, išmoka pradingsta, o VPA sutrumpėja' : null;

// sugeneruojame rezultatu lentele

let rezultatuLentele = 
`<table id='rezultatuLentele' class='rezultatuLentele'  style='border-collapse: separate !important; border-spacing: .60em !important;'>
<thead>
<tr>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'>${pavadinimai[0]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[1]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[2]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[3]}</th>
</tr>
</thead>
<tbody>
${createRow(motinystesIsmokosEilute, mIsmokosPavadinimas)}
${createRow(tevystesIsmokosEilute, tIsmokosPavadinimas)}
${createRow(vpaIsmokos, vpaIsmokosPavadinimas)}
<tr><td colspan='4' class='segment' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${paaiskinimuPavadinimas}</td></tr>
<tr><td colspan='4'>${paaiskinimai[0]}</td></tr>
<tr><td colspan='4'>${paaiskinimai[1]}</td></tr>
<tr><td colspan='4'>${paaiskinimai[2]}</td></tr>
<tr><td colspan='4'>${paaiskinimai[3]}</td></tr>
</tbody>
</table>
`

rezultatai = rezultatuLentele;

// sugeneruoja date picker is paprasto textfield

datosInput.addClass('date_picker');
datosInput.addAttr('placeholder', 'yyyy-mm-dd');

jQuery(document).ready(function($) {
	$('.date_picker').datepicker({
		dateFormat : 'yy-mm-dd',
		monthNames: [ "Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis" ],
		dayNamesMin: [ "S", "Pr", "A", "T", "K", "Pn", "Š" ],
		firstDay: 1,
		changeYear: true
	});
	
});

// sugeneruoja rezultato label
(vpaIsmokaRodyti || motinystesIsmokaRodyti || tevystesIsmokaRodyti) && (mamosPajamos > 0 || tecioPajamos > 0) ? label[15].text('Preliminariai apskaičiuotos išmokos: ') : label[15].text('');
(vpaIsmokaRodyti || motinystesIsmokaRodyti || tevystesIsmokaRodyti) && (mamosPajamos > 0 || tecioPajamos > 0) ? fieldset[rezultatuLaukas].addClass('has_border') : null;

	return rezultatai;
}
