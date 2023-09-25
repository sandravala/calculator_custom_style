let ismokuEilutes = '';

function loadCustomScript(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, emailas, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, emailoLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas) {

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
			rodytiLaukus([ tecioPajamuLaukas, npmLaukas ], true);
			label[4].text('Mama naudosis 2 neperleidžiamais VPA mėnesiais?');
			fieldset[vpaImsLaukas].removeClass('klaida');
			naudosisNpm ? rodytiLaukus([ mamosPajamuLaukas ], true) : rodytiLaukus([ mamosPajamuLaukas ], false);
			break;
		case 'mamosRadio' : 
			mamaArTetisVpa = 1;
			rodytiLaukus([ mamosPajamuLaukas, npmLaukas ], true);
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
					rodytiLaukus( [mLaukai[0]], false);
				}
				if(mamaArTetisVpa === 1) {
					rodytiLaukus( [tLaukai[0]], false);
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
	rodytiLaukus([...vpaLaukai,...bendriLaukai, npmLaukas, mLaukai[0], tLaukai[0]], false);
	atzymetiRadios([ ...vpaRadios ]);
	jQuery('#rezultatuLentele').empty();
});

jQuery('.formbox__btn-calc').on('click', function(){
	jQuery('#send-btn-elementor').trigger('click');
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

function skaiciuotiIsmokas(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, emailas, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, emailoLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas) {

// SKAICIUOJAME LUBAS IR GRINDIS

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
maxIsmoka.toFixed(2);

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

    let formattedDate;
    switch (true) {
		case format.localeCompare("yyyy-mm") === 0:
		formattedDate = `${currentYear}-${formattedMonth}`;
			break;
		case format.localeCompare("yyyy-mm-dd") === 0:
			formattedDate = `${currentYear}-${formattedMonth}-${formattedDay}`;
			break;
		case format.localeCompare("yyyy/mm/dd") === 0:
			formattedDate = `${currentYear}/${formattedMonth}/${formattedDay}`;
			break;
	    default:
		    formattedDate = date;
    }
    return formattedDate;
    
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

const npmFirstStart = vpaPradzia;

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

let bendraVpaIsmokuSuma = 0;
let bendraVpaIsmokuSumaSuMokesciais = 0;

function ismokosSuma(bazeIsmokai, tarifas, kiekisDienomisArbaMenesiais, netaikytiLubu, countDaily) {
	let maxDaily = maxIsmoka / avgBusinessDaysInAYear;
	maxDaily = maxDaily.toFixed(2);
    let baseMax = countDaily ? maxDaily : maxIsmoka;
    let lubos = netaikytiLubu ? bazeIsmokai + 1 : baseMax;
	let bazeDidesneUzLubas = parseFloat(bazeIsmokai) > parseFloat(lubos);
	let galutineIsmoka = bazeDidesneUzLubas ? baseMax * tarifas/100 * kiekisDienomisArbaMenesiais : bazeIsmokai * tarifas/100 * kiekisDienomisArbaMenesiais;
    return galutineIsmoka.toFixed(2);
}

let mamosBazeIsmokai = mamosPajamos;
let tecioBazeIsmokai = tecioPajamos;

//pasidarome vpa ismoku sarasa 

let vpaIsmokos = [];
let tarifai = [];
let bendrosSumos = [];
	
let mamaVpa = mamaArTetisVpa === 1; // patikriniam, ar mama eis vpa (jei ne, tai vadinasi tetis)
function pajamuBaze(arMamaVpa){
	const baze = arMamaVpa ? mamosBazeIsmokai : tecioBazeIsmokai;
	return baze;
}; //jei mama, tai ima mamos. jei tetis arba !mama - tai ima tecio

let bazeSkaiciavimui = pajamuBaze(mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms pagrindinems
let bazeNpmSkaiciavimui = pajamuBaze(!mamaVpa); // pasirenkam mamos ar tecio du skaiciuoti ismokoms npm

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
    el.start = formatDate(el.start, "yyyy/mm/dd");
    el.end = formatDate(el.end, "yyyy/mm/dd");
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
        let menuo = formatDate(currentStartDate, "yyyy-mm-dd") + " - ";

        if(currentStartDate.getDate() > 1) {
            factor = ((currentLastDay - currentStartDate.getDate() + 1) / currentLastDay).toFixed(2);
        }

        if (currentMonth === finalEndMonth && currentYear === finalEndYear && currentLastDay > finalEndDate.getDate()) {
            factor = (finalEndDate.getDate() / currentLastDay).toFixed(2);
        	menuo += formatDate(new Date(currentYear, currentMonth, finalEndDate.getDate()), "yyyy-mm-dd");
        } else {
            menuo += formatDate(new Date(currentYear, currentMonth, currentLastDay), "yyyy-mm-dd");
        }

        let currentBusinessDays = countBusinessDays(new Date(currentYear, currentMonth, 1), new Date(currentYear, currentMonth, currentLastDay), generatePublicHolidays(currentYear));

        let suma = ismokosSuma(base, rate, currentBusinessDays, false, true);
        suma = suma < minIsmoka ? minIsmoka * factor : suma * factor;
        suma = parseFloat(suma.toFixed(2));
        let sumaPoMokesciu = suma * (1 - mokesciaiNuoIsmoku/100);
        sumaPoMokesciu = parseFloat(sumaPoMokesciu.toFixed(2));

        bendraVpaIsmokuSumaSuMokesciais += suma;
        bendraVpaIsmokuSuma += sumaPoMokesciu;

        vpaIsmokos.push({'tarifas': rate + ' % ' + npmText, 'men': menuo, 'suma': suma, 'sumaPoMokesciu': sumaPoMokesciu, 'gavejas': receiver});

	currentStartDate = addMonthsToDate(currentStartDate.setDate(1), 1);       
    }; 

}

tarifai.forEach(element => {
    generuotiIsmokosEilute(element.start, element.end, element.rate, element.base, element.receiver, element.npm);
});

bendrosSumos.push({'tarifas' : '', 'men' : 'Viso VPA išmokų:', 'suma' : bendraVpaIsmokuSumaSuMokesciais.toLocaleString("lt-LT") + ' €', 'sumaPoMokesciu': bendraVpaIsmokuSuma.toLocaleString("lt-LT") + ' €', 'gavejas' : ''});

vpaIsmokos.forEach(ismoka => {
    ismoka.suma = ismoka.suma.toLocaleString("lt-LT") + " €";
    ismoka.sumaPoMokesciu = ismoka.sumaPoMokesciu.toLocaleString("lt-LT") + " €";
})

	
// funkcija eiluciu generavimui pagal duomenis

function createRow(data, ismokuPavadinimas) {
	let rows = '';

if (ismokuPavadinimas !== '') {
	if(ismokuPavadinimas === 'bendraSuma' && (mamosPajamos > 0 || tecioPajamos > 0)) {


			const fontWeight = 'bold';
			
			rows += `<tr>
				 <td colspan='5' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>IŠ VISO:</td>
				</tr>`
			
    			for(let i = 0; i < data.length ; i++) {
				ismokuEilutes += `<tr><td>${data[i].men} ${data[i].suma} (suma su mokesciais)\n</td></tr>`;
    				
				rows += `<tr>
					<td colspan='2' style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].men}</td>
					<td style='text-align: left; font-size: .85em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].suma}</td>
					<td style='text-align: left; font-size: .85em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].sumaPoMokesciu}</td>
					<td style='text-align: left; font-size: .85em; text-transform: uppercase; padding-left: .3em;'>${data[i].gavejas}</td>
				</tr>`;
			}
		} else {
			rows += `<tr>
			 <td colspan='5' style='text-align: center; font-size: .85em; letter-spacing: .1em; text-transform: uppercase; background-color: #D9E1E7; line-height: 2; '>${ismokuPavadinimas}</td>
			</tr>`


			for(let i = 0; i < data.length ; i++) {
			
				ismokuEilutes += `<tr><td>${data[i].men}: ${data[i].suma} (suma su mokesciais)\n</td></tr>`;
									  
				const fontWeight = 'normal';
				rows += `<tr>
					<td style='text-align: left; font-size: .75em; text-transform: uppercase; padding-left: .3em;'>${data[i].tarifas}</td>
					<td style='text-align: left; font-size: .75em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].men}</td>
					<td style='text-align: left; font-size: .75em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].suma}</td>
					<td style='text-align: left; font-size: .75em; padding-left: .3em; font-weight: ${fontWeight};'>${data[i].sumaPoMokesciu}</td>
					<td style='text-align: left; font-size: .75em; text-transform: uppercase; padding-left: .3em;'>${data[i].gavejas}</td>
				</tr>`
				if(data.length > 2 && i < data.length - 1) {	
				    rows += `<tr><td colspan='5' style='border-bottom:1px solid #D9E1E7;'></td></tr>`;
				}
			}
		}
		
	}
	return rows;	
};

// pasidarome pavadinimus stulpeliu

let vpaIsmokosPavadinimas = (tecioPajamos || mamosPajamos) > 0 ? 'Vaiko priežiūros atostogų išmoka:' : '';
let paaiskinimuPavadinimas = tecioPajamos || mamosPajamos > 0 ? 'Paaiškinimai:' : '';
let pavadinimai = mamosPajamos > 0 || tecioPajamos > 0 ? ['tarifas', 'data*', 'suma**', 'suma (į rankas)', 'gavėjas'] : ['', '', '', '', ''];
let bendrosSumosPavadinimas = tecioPajamos || mamosPajamos > 0 ? 'bendraSuma' : '';

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
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em; width: 10%;'>${pavadinimai[0]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: 1em;'">${pavadinimai[1]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[2]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[3]}</th>
<th style='text-align: left; font-size: .85em; text-transform: uppercase;padding-left: .3em;'">${pavadinimai[4]}</th>
</tr>
</thead>
<tbody>
${createRow(vpaIsmokos, vpaIsmokosPavadinimas)}
${createRow(bendrosSumos, bendrosSumosPavadinimas)}
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

function rezultataiEmailui() {
let table = `<div><div><table><thead><tr></tr></thead><tbody>${ismokuEilutes}</tbody></table></div></div>`;
// 	let list = `<div><ul>${ismokuEilutes}</ul><div>`;
// 	console.log(list);
return table;
}

function getAlert(fieldset, label, tevystesTarifas, motinystesTarifas, neperleidziamuMenesiuTarifas, tarifasAtostogos18men, tarifasAtostogos24men, mokesciaiNuoIsmoku, vdu, bazineSocIsmoka, motinystesIsmokaRodyti, tevystesIsmokaRodyti, vpaIsmokaRodyti, vpaTrukme, mamaArTetisVpa, naudosisNpm, mamosPajamuTipas, mamosPajamos, mamosIslaiduTipas, mamosIslaidos, tecioPajamuTipas, tecioPajamos, tecioIslaiduTipas, tecioIslaidos, emailas, gimdymoData, rezultatai, ismokuTipoLaukas, vpaTrukmesLaukas, vpaImsLaukas, npmLaukas, mamosPajamuTipoLaukas, mamosPajamuLaukas, mamosIslaiduTipoLaukas, faktiniuMamosIslaiduLaukas, tecioPajamuTipoLaukas, tecioPajamuLaukas, tecioIslaiduTipoLaukas, faktiniuTecioIslaiduLaukas, gimdymoDatosLaukas, emailoLaukas, mygtukuLaukas, rezultatuLaukas, datosInput, calcAlert, klaiduLaukas, minimumas){
	if(tecioPajamos > 0 || mamosPajamos > 0) {
	generateAlert(vpaTrukme === undefined, vpaTrukmesLaukas);
	generateAlert(mamaArTetisVpa === undefined, vpaImsLaukas);
	generateAlert(naudosisNpm === undefined, npmLaukas);
	generateAlert(gimdymoData === '', gimdymoDatosLaukas);
	}

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
