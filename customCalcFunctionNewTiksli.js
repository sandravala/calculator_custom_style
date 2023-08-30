//console.log('npm vpa skaiciavimas');
function loadCustomScript(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas) {

// LAUKU ATIDENGIMAS PRIKLAUSOMAI NUO PASIRINKIMU

const motinystesCheck = document.getElementById('formbox-field-1');
const tevystesCheck = document.getElementById('formbox-field-2');
const vpaCheck = document.getElementById('formbox-field-3');
motinystesCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('motinystes'));
tevystesCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('tevystes'));
vpaCheck.addEventListener('click', event => rodytiLaukusIsmokosSkaiciavimui('vpa'));

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

const mamosPajamuInput = document.getElementById('formbox-field-8');
const mamosIslaiduInput = document.getElementById('formbox-field-10');
const tecioPajamuInput = document.getElementById('formbox-field-12');
const tecioIslaiduInput = document.getElementById('formbox-field-14');
const gimdymoDatosInput = document.getElementById('formbox-field-15');
mamosPajamuInput.addEventListener('input', event => {fieldset[mamosPajamuLaukas].removeClass('klaida');});	
mamosIslaiduInput.addEventListener('input', event => {fieldset[faktiniuMamosIslaiduLaukas].removeClass('klaida');});	
tecioPajamuInput.addEventListener('input', event => {fieldset[tecioPajamuLaukas].removeClass('klaida');});	
tecioIslaiduInput.addEventListener('input', event => {fieldset[faktiniuTecioIslaiduLaukas].removeClass('klaida');});	
gimdymoDatosInput.addEventListener('input', event => {fieldset[gimdymoDatosLaukas].removeClass('klaida');});	
	
let vpaLaukai = [ vpaTrukmesLaukas, vpaImsLaukas ];
let mLaukai = [ [mamosPajamuTipoLaukas, mamosPajamuLaukas], [mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas] ];
let tLaukai = [ [tecioPajamuTipoLaukas, tecioPajamuLaukas], [tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas] ];
let bendriLaukai = [ gimdymoDatosLaukas, rezultatuLaukas ];

let vpaRadios = [ vpaTrukme18Radio, vpaTrukme24Radio, tecioRadio, mamosRadio, npmTaipRadio, npmNeRadio ];
let mRadios = [ mamosDUpajamos, mamosIVpajamos, mamosIslaidos30, mamosIslaidosFaktas ];
let tRadios = [ tecioDUpajamos, tecioIVpajamos, tecioIslaidos30, tecioIslaidosFaktas ];

function pastabaDelIvGrindu(laukelisPoKuriuoPridetiPastaba, arPrideti) {
	const pastabosLaukas = document.getElementById( "pastaba" + laukelisPoKuriuoPridetiPastaba);
	if (arPrideti) {
	const ivPajamuPastaba = pastabosLaukas ? pastabosLaukas : document.createElement("div");
	ivPajamuPastaba.setAttribute("id", "pastaba" + laukelisPoKuriuoPridetiPastaba);
	// ivPajamuPastaba.style.color = "red";
	ivPajamuPastaba.style.padding = "0px 0px 32px 32px";
	ivPajamuPastaba.innerHTML = `Jūsų vidutinės mėnesinės pajamos turi būti ne mažesnės, nei ${minimumas} €. Jei vidutinės mėnesinės pajamos mažesnės, galimai išmoka nebūtų skiriama, todėl preliminarūs apskaičiavimai negali būti atliekami.`;
	fieldset[laukelisPoKuriuoPridetiPastaba].insertAdjacentElement("afterend", ivPajamuPastaba);
	} else if (pastabosLaukas){
	pastabosLaukas.remove();
	}
}
	
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
		case 'vpaTrukme' :
			fieldset[vpaTrukmesLaukas].removeClass('klaida');
			break;
		case 'tecioRadio' : 
			mamaArTetisVpa = 2;
			rodytiLaukus([ tecioPajamuTipoLaukas ], true);
			label[4].text('Mama naudosis 2 neperleidžiamais VPA mėnesiais?');
			fieldset[vpaImsLaukas].removeClass('klaida');
			rodytiLaukus([ npmLaukas ], true);
			naudosisNpm ? rodytiLaukus([ mamosPajamuTipoLaukas ], true) : motinystesIsmokaRodyti ? null : rodytiLaukus([ mamosPajamuTipoLaukas ], false);
			break;
		case 'mamosRadio' : 
			mamaArTetisVpa = 1;
			rodytiLaukus([ mamosPajamuTipoLaukas ], true);
			label[4].text('Tėtis naudosis 2 neperleidžiamais VPA mėnesiais?');
			fieldset[vpaImsLaukas].removeClass('klaida');
			rodytiLaukus([ npmLaukas ], true);
			naudosisNpm ? rodytiLaukus([ tecioPajamuTipoLaukas ], true) : tevystesIsmokaRodyti ? null : rodytiLaukus([ tecioPajamuTipoLaukas ], false);
			break;
		case 'mamosDU' :
			mamosIslaidos30.checked = false;
			mamosIslaidosFaktas.checked = false;
			label[mamosPajamuLaukas].text('Mamos darbo užmokestis prieš mokesčius');
			mamosPajamuInput.setAttribute('min', 0);
			mamosPajamuInput.setAttribute('value', 0);
			pastabaDelIvGrindu(mamosPajamuLaukas, false);
			rodytiLaukus([ mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas ], false);
			rodytiLaukus([ mamosPajamuLaukas ], true);
			fieldset[mamosPajamuTipoLaukas].removeClass('klaida');
			break;
		case 'mamosIV' : 
			mamosIslaidos30.checked = false;
			mamosIslaidosFaktas.checked = false;
			label[mamosPajamuLaukas].text('Vidutinės mamos pajamos');
			mamosPajamuInput.setAttribute('min', minimumas);
			mamosPajamuInput.setAttribute('value', minimumas);
			pastabaDelIvGrindu(mamosPajamuLaukas, true);
			rodytiLaukus([ mamosIslaiduTipoLaukas, mamosPajamuLaukas ], true);
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], false);
			fieldset[mamosPajamuTipoLaukas].removeClass('klaida');
			break;
		case 'tecioDU' :
			tecioIslaidos30.checked = false;
			tecioIslaidosFaktas.checked = false;
			label[tecioPajamuLaukas].text('Tėčio darbo užmokestis prieš mokesčius');
			tecioPajamuInput.setAttribute('min', 0);
			tecioPajamuInput.setAttribute('value', 0);
			pastabaDelIvGrindu(tecioPajamuLaukas, false);
			rodytiLaukus([ tecioPajamuLaukas ], true);
			rodytiLaukus([ tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas ], false);
			fieldset[tecioPajamuTipoLaukas].removeClass('klaida');
			break;
		case 'tecioIV' : 
			tecioIslaidos30.checked = false;
			tecioIslaidosFaktas.checked = false;
			label[tecioPajamuLaukas].text('Vidutinės tėčio pajamos');
			tecioPajamuInput.setAttribute('min', minimumas);
			tecioPajamuInput.setAttribute('value', minimumas);
			pastabaDelIvGrindu(tecioPajamuLaukas, true);
			rodytiLaukus([ tecioIslaiduTipoLaukas, tecioPajamuLaukas ], true);
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], false);
			fieldset[tecioPajamuTipoLaukas].removeClass('klaida');
			break;
		case 'mamosIslaidos' :
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], true);
			fieldset[mamosIslaiduTipoLaukas].removeClass('klaida');
			break;
		case 'mamos30' :
			rodytiLaukus([ faktiniuMamosIslaiduLaukas ], false);
			fieldset[mamosIslaiduTipoLaukas].removeClass('klaida');
			break;
		case 'tecioIslaidos' :
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], true);
			fieldset[tecioIslaiduTipoLaukas].removeClass('klaida');
			break;
		case 'tecio30' :
			rodytiLaukus([ faktiniuTecioIslaiduLaukas ], false);
			fieldset[tecioIslaiduTipoLaukas].removeClass('klaida');
			break;
		case 'npmTaip' :
			naudosisNpm = 1;
			mamaArTetisVpa === 1 ? rodytiLaukus([ tecioPajamuTipoLaukas ], true) : mamaArTetisVpa === 2 ? rodytiLaukus([ mamosPajamuTipoLaukas ], true) : null;
			fieldset[npmLaukas].removeClass('klaida');
			break;
		case 'npmNe' :
			naudosisNpm = 0;
 			mamaArTetisVpa === 1 && !tevystesIsmokaRodyti ? rodytiLaukus([ tecioPajamuTipoLaukas, tecioPajamuLaukas ], false) : mamaArTetisVpa === 2 && !motinystesIsmokaRodyti? rodytiLaukus([ mamosPajamuTipoLaukas, mamosPajamuLaukas ], false) : null;
			fieldset[npmLaukas].removeClass('klaida');
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
    			rodytiLaukus([tLaukai[0][0]], true);
       			break;
		case !vpaIsmokaRodyti && motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
    			rodytiLaukus([...vpaLaukai, ...tLaukai[0], ...tLaukai[1] ], false);
			atzymetiRadios([...vpaRadios, ...tRadios]);
    			rodytiLaukus([mLaukai[0][0]], true);
        		break;
    		case !vpaIsmokaRodyti && motinystesIsmokaRodyti && tevystesIsmokaRodyti:
			rodytiLaukus(vpaLaukai, false);
			atzymetiRadios(vpaRadios);
    			rodytiLaukus([ mLaukai[0][0], tLaukai[0][0] ], true);
       			break;
		case vpaIsmokaRodyti && motinystesIsmokaRodyti && tevystesIsmokaRodyti:
    			rodytiLaukus([ ...vpaLaukai, mLaukai[0][0], tLaukai[0][0] ], true);
        		break;
		case vpaIsmokaRodyti && !motinystesIsmokaRodyti && tevystesIsmokaRodyti:
			if(mamaArTetisVpa === 2 && !naudosisNpm) {
				rodytiLaukus( [...mLaukai[0], ...mLaukai[1] ], false);
				atzymetiRadios(mRadios);
			};
    			rodytiLaukus([ ...vpaLaukai, tLaukai[0][0] ], true);
       			break;
		case vpaIsmokaRodyti && motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
			if(mamaArTetisVpa === 1 && !naudosisNpm) {
				rodytiLaukus( [...tLaukai[0], ...tLaukai[1] ], false); 
				atzymetiRadios(tRadios);
			};
    			rodytiLaukus([ ...vpaLaukai, mLaukai[0][0] ], true);
       			break;
		case vpaIsmokaRodyti && !motinystesIsmokaRodyti && !tevystesIsmokaRodyti:
			rodytiLaukus(vpaLaukai, true);
			if (!naudosisNpm) {
				if(mamaArTetisVpa === 2) {
					rodytiLaukus( [...mLaukai[0], ...mLaukai[1] ], false);
					atzymetiRadios([ ...mRadios ]);
				}
				if(mamaArTetisVpa === 1) {
					rodytiLaukus( [...tLaukai[0], ...tLaukai[1] ], false);
					atzymetiRadios([ ...tRadios ]);
				}
			} 
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
// iki 2023 07 01 buvo 6 bazines soc ismokos dydziai, nuo 07 01 - 8
let minIsmoka = bazineSocIsmoka * 8 ; //  8 bazinės socialinės išmokos dydžiai galioję praeitą ketvirtį (paskutinis patvirtintas dydis) iki teisės gauti išmoką atsiradimo dienos.
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


// PASIDAROME REIKALINGAS TARPINES DATAS

function formatDate(date, format) {
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();
    let formattedMonth = String(currentMonth + 1).padStart(2, '0'); // Adding 1 to adjust for 0-indexed months
    let formattedDay = String(currentDay).padStart(2, '0');

    return format.localeCompare("yyyy-mm") === 0 ? `${currentYear}-${formattedMonth}` : format.localeCompare("yyyy-mm-dd") === 0 ? `${currentYear}-${formattedMonth}-${currentDay}` : date;
    
}

function lastDay(y, m) {
	return  new Date(y, m + 1, 0).getDate();
}

function countBusinessDays(startDate, endDate, holidays) {
    let workdays = 0;

    for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
      const dayOfWeek = day.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Saturday or Sunday
      const isHoliday = holidays.includes(day.toISOString().split('T')[0]);
    if (!isWeekend && !isHoliday) {
        workdays++;
      }
    }
  
    return workdays;  

}

function calculateEasterDate(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    
    return new Date(year, month - 1, day);
}

function generatePublicHolidays(year) {
    
    const fixedHolidayDays = ['-01-01', '-02-16', '-03-11', '-05-01', '-06-24', '-07-06', '-08-15', '-11-01', '-11-02', '-12-24', '-12-25', '-12-26'];

    const fixedHolidays = [];

    fixedHolidayDays.forEach(element => {
        fixedHolidays.push(year+element);
    });

    const easter = calculateEasterDate(year);
    easter.setDate(easter.getDate() + 1);
    const easterMonday = new Date(easter);
    easterMonday.setDate(easter.getDate() + 1);

    const flexibleHolidays = [ formatDate(easter, 'yyyy-mm-dd'), formatDate(easterMonday, 'yyyy-mm-dd')];

    const publicHolidays = [...fixedHolidays, ...flexibleHolidays];
    const holidaysOnWeekdays = [];


    publicHolidays.forEach(holiday => {
        const holidayOnWeekend = new Date(holiday).getDay() === 0 || new Date(holiday).getDay() === 6;
        if (!holidayOnWeekend) {
            holidaysOnWeekdays.push(holiday);
        }
    });

    return holidaysOnWeekdays;
}
 

function addMonthsToDate(date, monthsToAdd) {
    const newDate = new Date(date);
        const currentMonth = newDate.getMonth();
    newDate.setMonth(currentMonth + monthsToAdd);

    let newCurrentMonth = currentMonth + monthsToAdd > 0 ? (currentMonth + monthsToAdd) % 12 : 12 + (currentMonth + monthsToAdd) % 12;

    // Handling potential year adjustment
    if (newDate.getMonth() !== newCurrentMonth) {
      newDate.setDate(0); // Move to the last day of the previous month
    }
    
    return newDate;
}  


let avgBusinessDaysInAYear = countBusinessDays(new Date(gimimoDiena.getFullYear(), 0, 1), new Date(gimimoDiena.getFullYear(), 11, 31), generatePublicHolidays(gimimoDiena.getFullYear())) / 12;
avgBusinessDaysInAYear = avgBusinessDaysInAYear.toFixed(1);

const npmFirstStart = new Date(gimimoDiena);
npmFirstStart.setDate(npmFirstStart.getDate() + 57);

const npmFirstEnd = addMonthsToDate(new Date(npmFirstStart), 2);
npmFirstEnd.setDate(npmFirstEnd.getDate());

const npmLasttEnd = addMonthsToDate(new Date(gimimoDiena), vpaTrukme);
npmLasttEnd.setDate(npmLasttEnd.getDate() - 1);

const npmLastStart = addMonthsToDate(new Date(npmLasttEnd), -2);

const vpaEnd = new Date(npmLastStart);
vpaEnd.setDate(vpaEnd.getDate() - 1);

const oneYear = addMonthsToDate(new Date(gimimoDiena), 12);
oneYear.setDate(oneYear.getDate() - 1);

const vpaStart = new Date(npmFirstEnd);
vpaStart.setDate(vpaStart.getDate() + 1);
	
// PASIDAROME BAZE SKAICIAVIMUI

function ismokosSuma(bazeIsmokai, tarifas, kiekisDienomisArbaMenesiais, netaikytiLubu, countDaily) {

    let maxDaily = maxIsmoka / avgBusinessDaysInAYear;
    maxDaily = maxDaily.toFixed(2);
    let baseMax = countDaily ? maxDaily : maxIsmoka;
    let lubos = netaikytiLubu ? bazeIsmokai + 1 : baseMax;
	  let galutineIsmoka = bazeIsmokai <= lubos ? bazeIsmokai * tarifas/100 * kiekisDienomisArbaMenesiais : baseMax * tarifas/100 * kiekisDienomisArbaMenesiais;
   
    return galutineIsmoka.toFixed(2);
}

let mamosBazeIsmokai = mamosPajamuTipas == 1 ? mamosPajamos : mamosIslaiduTipas == 1 ? (mamosPajamos - (mamosPajamos * 0.3)) * 0.9 : (mamosPajamos - mamosIslaidos) * 0.9;
let tecioBazeIsmokai = tecioPajamuTipas == 1 ? tecioPajamos : tecioIslaiduTipas == 1 ? (tecioPajamos - (tecioPajamos * 0.3)) * 0.9 : (tecioPajamos - tecioIslaidos) * 0.9;

// apskaiciuojame motinystes ismoka

let motinystesIsmokaSuMokesciais = ismokosSuma(mamosBazeIsmokai, motinystesTarifas, 4, true, false);
let motinystesIsmoka = motinystesIsmokaSuMokesciais * (1 - mokesciaiNuoIsmoku / 100);
let motinystesIsmokosEilute = motinystesIsmokaRodyti && mamosPajamos > 0 ? [{'tarifas' : motinystesTarifas.toLocaleString("lt-LT")  + ' %', 'men' : 'nuo ' + motinystesIsmokosData, 'suma' : motinystesIsmokaSuMokesciais.toLocaleString("lt-LT")  + " €", 'sumaPoMokesciu' : motinystesIsmoka.toLocaleString("lt-LT") + " €", 'gavejas': 'mama'}] : [{'tarifas':'', 'men': '', 'suma': '', 'sumaPoMokesciu' : '', 'gavejas': ''}];

// apskaiciuojame tevystes ismoka


let tevystesIsmokaSuMokesciais = ismokosSuma(tecioBazeIsmokai, tevystesTarifas, 1, false, false);
let tevystesIsmoka = tevystesIsmokaSuMokesciais * (1 - mokesciaiNuoIsmoku / 100);
let tevystesIsmokosEilute = tevystesIsmokaRodyti && tecioPajamos > 0 ? [{'tarifas' : tevystesTarifas.toLocaleString("lt-LT")  + ' %', 'men' : 'nuo ' + gDiena , 'suma' : tevystesIsmokaSuMokesciais.toLocaleString("lt-LT")  + " €", 'sumaPoMokesciu' : tevystesIsmoka.toLocaleString("lt-LT")  + " €", 'gavejas': 'tėtis'}] : [{'tarifas':'', 'men': '', 'suma': '', 'sumaPoMokesciu' : '', 'gavejas': ''}];

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


const tarifai = [];

function fillRateArray() {

    let gavejas = mamaVpa ? 'mama' : 'tėtis';
    let gavejasNpm = mamaVpa ? 'tėtis' : 'mama';
    let vienosDienosBazePagrTevo = bazeSkaiciavimui / avgBusinessDaysInAYear;
    let vienosDienosBazeAntroTevo = bazeNpmSkaiciavimui / avgBusinessDaysInAYear;
    vienosDienosBazePagrTevo = vienosDienosBazePagrTevo.toFixed(2);
    vienosDienosBazeAntroTevo = vienosDienosBazeAntroTevo.toFixed(2);

    tarifai.push({'start': npmFirstStart, 'end': npmFirstEnd, 'rate': neperleidziamuMenesiuTarifas, 'base' : vienosDienosBazePagrTevo, 'receiver': gavejas, 'npm': true});

    if (vpaTrukme === 24) {
        const vpaTarpinisPabaiga = oneYear;
        const vpaTarpinisPradzia = new Date(vpaTarpinisPabaiga);
        vpaTarpinisPradzia.setDate(vpaTarpinisPradzia.getDate() + 1);
        tarifai.push({ 'start': vpaStart, 'end': vpaTarpinisPabaiga, 'rate': tarifasAtostogos24men[0], 'base' : vienosDienosBazePagrTevo, 'receiver': gavejas, 'npm': false});
        tarifai.push({ 'start': vpaTarpinisPradzia, 'end': vpaEnd, 'rate': tarifasAtostogos24men[1], 'base' : vienosDienosBazePagrTevo, 'receiver': gavejas, 'npm': false});
    } else {
        tarifai.push({ 'start': vpaStart, 'end': vpaEnd, 'rate': tarifasAtostogos18men, 'base' : vienosDienosBazePagrTevo,  'receiver': gavejas, 'npm': false})
    }

    if (naudosisNpm) {
    tarifai.push({'start': npmLastStart, 'end': npmLasttEnd, 'rate': neperleidziamuMenesiuTarifas, 'base' : vienosDienosBazeAntroTevo, 'receiver': gavejasNpm, 'npm': true});
    }

}

fillRateArray();

tarifai.forEach(el => {
    el.start = formatDate(el.start, "yyyy-mm-dd");
    el.end = formatDate(el.end, "yyyy-mm-dd");
})


function generuotiIsmokosEilute(start, end, rate, base, receiver, npm) {

    let currentStartDate = new Date(start);
    let finalEndDate = new Date(end);
    let finalEndYear = finalEndDate.getFullYear();
    let finalEndMonth = finalEndDate.getMonth();
    let npmText = npm ? '(npm***)' : '';


    while (currentStartDate < finalEndDate) {
        let factor = 1;
        let currentYear = currentStartDate.getFullYear();
        let currentMonth = currentStartDate.getMonth();
        let currentLastDay = lastDay(currentYear, currentMonth);
        let menuo = formatDate(currentStartDate, "yyyy-mm");

        if(currentStartDate.getDate() > 1) {
            factor = ((currentLastDay - currentStartDate.getDate() + 1) / currentLastDay).toFixed(2);
        }

        if (currentMonth === finalEndMonth && currentYear === finalEndYear && currentLastDay > finalEndDate.getDate()) {
            factor = (finalEndDate.getDate() / currentLastDay).toFixed(2);
        }

        let currentBusinessDays = countBusinessDays(new Date(currentYear, currentMonth, 1), new Date(currentYear, currentMonth, currentLastDay), generatePublicHolidays(currentYear));

        let suma = ismokosSuma(base, rate, currentBusinessDays, false, true);
        suma = suma < minIsmoka ? minIsmoka * factor : suma * factor ;
        suma = parseFloat(suma.toFixed(2));
        let sumaPoMokesciu = suma * (1 - mokesciaiNuoIsmoku/100);
        sumaPoMokesciu = parseFloat(sumaPoMokesciu.toFixed(2));

        bendraIsmokuSumaSuMokesciais += suma;
        bendraIsmokuSuma += sumaPoMokesciu;

        vpaIsmokos.push({'tarifas': rate + ' % ' + npmText, 'men': menuo, 'suma': suma, 'sumaPoMokesciu': sumaPoMokesciu, 'gavejas': receiver});

        currentStartDate = addMonthsToDate(currentStartDate.setDate(1), 1);       
    }; 

}


tarifai.forEach(element => {
    generuotiIsmokosEilute(element.start, element.end, element.rate, element.base, element.receiver, element.npm)
});

vpaIsmokos.forEach(ismoka => {
    ismoka.suma = ismoka.suma.toLocaleString("lt-LT") + " €";
    ismoka.sumaPoMokesciu = ismoka.sumaPoMokesciu.toLocaleString("lt-LT") + " €";
})
  
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

let mIsmokosPavadinimas = motinystesIsmokaRodyti && mamosPajamos > 0 ? 'Nėštumo ir gimdymo atostogų išmoka:' : '';
let tIsmokosPavadinimas = tevystesIsmokaRodyti && tecioPajamos > 0 ? 'Tėvystės išmoka:' : '';
let vpaIsmokosPavadinimas = vpaIsmokaRodyti && (tecioPajamos || mamosPajamos) > 0 ? 'Vaiko priežiūros atostogų išmoka:' : '';
let paaiskinimuPavadinimas = tecioPajamos || mamosPajamos > 0 ? 'Paaiškinimai:' : '';
let pavadinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['tarifas', 'data*', 'suma**', 'suma (į rankas)', 'gavėjas'] : ['', '', '', '', ''];


// pasidarom paaiskinimu tekstus

let paaiskinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['* - Preliminari teisės į išmoką atsiradimo data, t.y. nuo kada galima kreiptis dėl išmokos.','', '** - preliminariai apskaičiuota išmokos suma pagal pateiktus duomenis (faktinės išmokos gali nežymiai kisti, priklausomai nuo gimdymo datos, atostogų, ligos ir pan.)', '', '', '', '',''] : ['', '', '', '', '', '', '',''];
mamosPajamos > 0 && motinystesIsmokaRodyti ? paaiskinimai[1] = 'Tikslią datą nurodys jus prižiūrintis gydytojas.' : paaiskinimai[1] = '';
mamosPajamos > 0 && motinystesIsmokaRodyti ? paaiskinimai[6] = 'Nėštumo ir gimdymo išmoka mokama visa iš karto už visą 126 dienų laikotarpį.' : paaiskinimai[6] = '';
	
mamosPajamos > 0  && mamosBazeIsmokai > maxIsmoka ? paaiskinimai[3] += `Mamos pajamos viršija maksimalų galimą išmokos dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur). ` : mamosPajamos > 0  && mamosBazeIsmokai < minIsmoka ? paaiskinimai[3] += `Mamos pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur). ` : null;

tecioPajamos > 0 && tecioBazeIsmokai < minIsmoka ? paaiskinimai[3] += `Tėčio pajamos yra mažesnės už šiuo metu galiojantį minimalų dydį, todėl išmokos skaičiuojamos nuo mažiausios galimos sumos (${minIsmoka.toLocaleString("lt-LT")} Eur).` : tecioPajamos > 0 && tecioBazeIsmokai > maxIsmoka ? paaiskinimai[3] += `Tėčio pajamos viršija šiuo metu galiojantį maksimalų galimą išmokos dydį, todėl išmokos skaičiuojamos nuo didžiausios galimos sumos (${maxIsmoka.toLocaleString("lt-LT")} Eur).` : null;

vpaIsmokaRodyti && (tecioPajamos || mamosPajamos) > 0 ? paaiskinimai[4] = '*** - NPM yra 2 neperleidžiami mėnesiai mamai ir 2 neperleidžiami mėnesiai tėčiui. Didesnis tarifas taikomas tik neperleidžiamais VPA mėnesiais (NPM), ir jais atitinkamai gali pasinaudoti tik mama arba tėtis. Jei NPM naudoja tik vienas iš tėvų, išmoka pradingsta, o VPA sutrumpėja' : null;

vpaIsmokaRodyti && (tecioPajamos || mamosPajamos) > 0 ? paaiskinimai[7] = 'Čia matote preliminariai apskaičiuotas išmokas pilnam mėnesiui. Pirmo ir paskutinio mėnesio VPA išmokų sumos bus mažesnės, priklausomai nuo to, kurią dieną prasidės ir baigsis teisė į VPA išmoką.' : null;

(tecioPajamos > 0 && tecioPajamuTipas == 2) || (mamosPajamos > 0 && mamosPajamuTipas == 2) ? paaiskinimai[5] = 'Jei pajamas deklaruojate kartą metuose, galimai išmoką gausite tik kitais mokestiniais metais. Jei atliekate avansinius mokėjimus, būtinai išsiųskite SAV pranešimą mėnuo iki teisės į išmoką datos.' : null;

// jeigu pasirenka idv 'Jei pajamas deklaruojate kartą metuose, galimai išmoką gausite tik kitais mokestiniais metais. Jei atliekate avansinius mokėjimus, būtinai išsiųskite SAV pranešimą mėnuo iki teisės į išmoką datos.'	

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
${createRow(motinystesIsmokosEilute, mIsmokosPavadinimas)}
${createRow(tevystesIsmokosEilute, tIsmokosPavadinimas)}
${createRow(vpaIsmokos, vpaIsmokosPavadinimas)}
<tr><td colspan='5' class='segment' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${paaiskinimuPavadinimas}</td></tr>
<tr><td colspan='5'>${paaiskinimai[0]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[1]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[5]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[2]}</td></tr>
<tr><td colspan='5'>${paaiskinimai[7]}</td></tr>
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
if(vpaIsmokaRodyti === 1 || motinystesIsmokaRodyti === 1 || tevystesIsmokaRodyti === 1) {
	if (vpaIsmokaRodyti === 1) {
		generateAlert(vpaTrukme === undefined, vpaTrukmesLaukas);
		generateAlert(mamaArTetisVpa === undefined, vpaImsLaukas);
		generateAlert(naudosisNpm === undefined, npmLaukas);
		generateAlert(gimdymoData === '', gimdymoDatosLaukas);
	}
	
	if(mamaArTetisVpa === 1 || (mamaArTetisVpa === 2 && naudosisNpm) || motinystesIsmokaRodyti === 1) {
	generateAlert(mamosPajamuTipas === undefined, mamosPajamuTipoLaukas);
	generateAlert(mamosPajamos <= 0, mamosPajamuLaukas);
	generateAlert(gimdymoData === '', gimdymoDatosLaukas);
		if (mamosPajamuTipas === 2) {
			generateAlert(mamosIslaiduTipas === undefined, mamosIslaiduTipoLaukas);
			if (mamosIslaiduTipas === 2) {
				generateAlert(mamosIslaidos === 0, faktiniuMamosIslaiduLaukas);
			}
		}
	}
	
	if(mamaArTetisVpa === 2 || (mamaArTetisVpa === 1 && naudosisNpm) || tevystesIsmokaRodyti === 1) {
		generateAlert(tecioPajamuTipas === undefined, tecioPajamuTipoLaukas);
		generateAlert(tecioPajamos <= 0, tecioPajamuLaukas);
		generateAlert(gimdymoData === '', gimdymoDatosLaukas);
		if (tecioPajamuTipas === 2) {
			generateAlert(tecioIslaiduTipas === undefined, tecioIslaiduTipoLaukas);
			if (tecioIslaiduTipas === 2) {
				generateAlert(tecioIslaidos === 0, faktiniuTecioIslaiduLaukas);
			}
		}
	}
	
} else {calcAlert = "";}


function generateAlert(conditionToGenerateAlert, fieldsetNumberToAddStyling) {
	if (conditionToGenerateAlert) {
	    fieldset[fieldsetNumberToAddStyling].addClass('klaida');
	    calcAlert = 'Užpildykite raudonai pažymėtus laukelius ir spauskite "SKAIČIUOTI"';
	  } else {
	    fieldset[fieldsetNumberToAddStyling].removeClass('klaida');
	  }
}


// // sugeneruoja rezultato label
(vpaIsmokaRodyti || motinystesIsmokaRodyti || tevystesIsmokaRodyti) && (mamosPajamos > 0 || tecioPajamos > 0)  && calcAlert === "" ? label[rezultatuLaukas].text('Preliminariai apskaičiuotos išmokos**:') : label[rezultatuLaukas].text('');
(vpaIsmokaRodyti || motinystesIsmokaRodyti || tevystesIsmokaRodyti) && (mamosPajamos > 0 || tecioPajamos > 0) && calcAlert === "" ? fieldset[rezultatuLaukas].addClass('has_border') : null;
calcAlert !== "" ? label[klaiduLaukas].text('Klaida! Trūksta duomenų ') : label[klaiduLaukas].text('');

return calcAlert;
}
