const welcomeScreen = document.getElementById("welcome-screen");
const inputScreen = document.getElementById("input-screen");
const outputScreen = document.getElementById("output-screen");

const startBtn = document.getElementById("start-button");
const submitDataBtn = document.getElementById("submit-button");

startBtn.addEventListener("click", (e) => {
	console.log("The StartBTN is working");
	welcomeScreen.style.display = "none";
	inputScreen.style.display = "block";
});

let provVid1 = "";
let provVid11 = "";
let signalNoData = "";
let pismoNoData = "";
let provVid2 = "";
let provOtnosnoBG = "";
let provOtnosnoEN = "";
let provSrokZaFormat = ""
let drujSrokZaFormat = ""
let druj1EN = "";
let druj2EN = "";
let druj3EN = "";
let druj1BG = "";
let druj2BG = "";
let druj3BG = "";
let druj123BG = "";
let druj1BGreg = "";
let druj2BGreg = "";
let druj3BGreg = "";
let eikDr1 = "";
let eikDr2 = "";
let eikDr3 = "";
let insp1 = "";
let insp2 = "";
let jalbPol = "";
let jalbImena = "";
let jalbTel = "";
let jalbMail = "";
let jalbKlNo = "";
let jalbDogNo = "";
let sykrashtenie = "";
let jalbObryshtenie = "";
let broiKP = 0;

submitDataBtn.addEventListener("click", (e) => {
	console.log("The SubmitDataBTN is working");
	inputScreen.style.display = "none";
	outputScreen.style.display = "block";
	provVid1 = document.getElementById("prov-vid-1").value;
	signalNoData = document.getElementById("signal-nomer-data").value;
	pismoNoData = document.getElementById("pismo-nomer-data").value;
	provVid2 = document.getElementById("prov-vid-2").value;
	provOtnosnoBG = document.getElementById("prov-otnosno-BG").value;
	provOtnosnoEN = document.getElementById("prov-оtnosno-EN").value;
	provSrokZaFormat = document.getElementById("prov-srok").value;	//2026-01-13 формат
	drujSrokZaFormat = document.getElementById("druj-srok").value;	//2026-01-13 формат
        druj1EN = document.getElementById("druj1-EN").value;
        druj2EN = document.getElementById("druj2-EN").value;
        druj3EN = document.getElementById("druj3-EN").value;
	insp1 = document.getElementById("insp1").value;
	insp2 = document.getElementById("insp2").value;
	jalbPol = document.querySelector('input[type="radio"]:checked').value;
	jalbImena = document.getElementById("jalb-imena").value;
	jalbTel = document.getElementById("jalb-tel").value;
	jalbMail = document.getElementById("jalb-mail").value;
	jalbKlNo = document.getElementById("jalb-klientski-nomer").value;
	jalbDogNo = document.getElementById("jalb-dogovor-nomer").value;

	// ============ ОБЩИ ДАННИ ЗА ПРОВЕРКАТА ============
	let provSrokZaFormatArr = provSrokZaFormat.split("-");
	let provyyyy = provSrokZaFormatArr[0];
	let provmm = provSrokZaFormatArr[1];
	let provdd = provSrokZaFormatArr[2];
	let provSrok = `${provdd}.${provmm}.${provyyyy}`;

	let drujSrokZaFormatArr = drujSrokZaFormat.split("-");
	let drujyyyy = drujSrokZaFormatArr[0];
	let drujmm = drujSrokZaFormatArr[1];
	let drujdd = drujSrokZaFormatArr[2];
	let drujSrok = `${drujdd}.${drujmm}.${drujyyyy}`;

	document.getElementById("prov-obshti-danni").innerHTML = 
`Вид на проверката: <b>${provVid1}</b> <br />
Номер на подадения сигнал: <b>${signalNoData}</b> <br />
Номер на писмото за проверка: <b>${pismoNoData}</b> <br />
Проверката е за: <b>${provOtnosnoBG}</b> <br />
Срок за отговор от проверяваното/ните дружество/а: <b>${drujSrok} г.</b><br />
Срок за приключване на проверката: <b>${provSrok}  г.</b><br />
Проверката се извършва от: <b>${insp1}</b> и <b>${insp2}</b><br />
Жалбоподател:<br />  
&nbsp;- име: <b>${jalbImena}</b> <br />
&nbsp;- телефон: <b>${jalbTel}</b> <br />
&nbsp;- email: <b>${jalbMail}</b> <br />
&nbsp;- кл. номер: <b>${jalbKlNo}</b> <br />
&nbsp;- номер на договор: <b>${jalbDogNo}</b>`;


	// ============ ЗА ПИСМОТО ДО ПРОВЕРЯВАНОТО ДРУЖЕСТВО ============
        
	let signalNo = "";
	let signalData = "";
	let pismoNo = "";
	let pismoData = "";
	let jalbDanni1 = "";
	let jalbDanni2 = "";
	let jalbDanni3 = "";

	if (signalNoData !== "") {
	  let signalNoDataArr = signalNoData.split("/");
          signalNo = signalNoDataArr[0].trim();
          signalData = signalNoDataArr[1].trim();
	}

	if (pismoNoData !== "") {
          let pismoNoDataArr = pismoNoData.split("/");
          pismoNo = pismoNoDataArr[0].trim();
          pismoData = pismoNoDataArr[1].trim();
	}

	if (jalbPol === "m") {
          sykrashtenie = "г-н";
          jalbObryshtenie = "Уважаеми г-н";
        } else if (jalbPol === "f") {
          sykrashtenie = "г-жa";
          jalbObryshtenie = "Уважаема г-жо";
        }

	if (jalbTel !== "")
          jalbDanni1 = "тел. " + jalbTel;

        if (jalbTel !== "" && jalbKlNo !== "")
          jalbDanni2 = ", кл. номер " + jalbKlNo;
        else if (jalbKlNo !== "")
          jalbDanni2 = "кл. номер " + jalbKlNo;

        if (
          (jalbTel !== "" || jalbKlNo !== "") &&
          jalbDogNo !== ""
        )
          jalbDanni3 = ", номер на договор " + jalbDogNo;
        else if (jalbDogNo !== "")
          jalbDanni3 = "номер на договор " + jalbDogNo;

        if (
          jalbTel === "" &&
          jalbKlNo === "" &&
          jalbDogNo === ""
        )
          jalbDanni1 = "!!! ЗА ОПЕРАТОРА СА НЕОБХОДИМИ ПОВЕЧЕ ДАННИ !!!";

	if (provVid1 !== "нормална") 
	  provVid11 = provVid1 + " ";

	document.getElementById("pismo-do-druj").innerHTML = 
` <b>~ ~ ~ Относно ~ ~ ~</b>  <br />
Проверка на КРС по сигнал №${signalNo}/${signalData} от ${jalbImena} <br /><br />
 <b>~ ~ ~ Начало на писмото ~ ~ ~</b> <br />
Здравейте! <br />
Моля, по повод извършвана от Комисията за регулиране на съобщенията ${provVid11}проверка по сигнал № ${signalNo}/${signalData} г. от ${sykrashtenie} ${jalbImena} (${jalbDanni1}${jalbDanni2}${jalbDanni3}) за ${provOtnosnoBG}, в срок до ${drujSrok} г. да предоставите писмено становище по случая, включващо отговори на поставените по-долу въпроси, копия на документи, служебни справки/извлечения от ИС, както и друга относима информация и документи в потвърждение на изложените твърдения:`;


	// ============ ЗА ПИСМОТО ДО ЖАЛБОПОДАТЕЛЯ ============

        let jalbImenaArr = jalbImena.trim().split(" ");
        let jalbFamilia = jalbImenaArr[jalbImenaArr.length - 1];

	document.getElementById("pismo-do-jalbopodatel").innerHTML = 
` <b>~ ~ ~ Електронен пощенски адрес ~ ~ ~</b> <br />
${jalbMail}<br /><br />
 <b>~ ~ ~ Относно ~ ~ ~</b> <br />
Проверка на КРС по подаден от Вас сигнал <br /><br />
 <b>~ ~ ~ Начало на писмото ~ ~ ~</b> <br />
${jalbObryshtenie} ${jalbFamilia}, <br />
Във връзка с подадения от Вас сигнал с вх. № ${signalNo}/${signalData} г., в рамките на правомощията за осъществяване на регулаторни и контролни функции по спазването на нормативната уредба, за която Комисията за регулиране на съобщенията (КРС) отговаря, ще бъде извършена проверка. В интерес на нейната пълнота и качество, моля във възможния за Вас кратък срок да предоставите по електронен път (за предпочитане с електронно писмо, а при невъзможност - по телефон чрез приложение „Viber“) писмена информация в отговор на всеки от поставените въпроси и копия/снимки на документи:`;


	// ============ ЗА КОНСТАТИВНИТЕ ПРОТОКОЛИ ============

	let pismoNoArr = pismoNo.split("-");
	let pismoNoBukviBG = pismoNoArr[0];
	let pismoNoCifri = pismoNoArr[1];
	let pismoNoBukviEN = "";

	if (pismoNoBukviBG === "П") {
	  pismoNoBukviEN = "P";
	} else if (pismoNoBukviBG === "Ре") {
	  pismoNoBukviEN = "Re";
	} else if (pismoNoBukviBG === "Ре1") {
	  pismoNoBukviEN = "Re1";
	}

	if (druj1EN === "A1") {
	  druj1BG = '"А1 България" ЕАД';
	  druj1BGreg = "А1 БЪЛГАРИЯ ЕАД";
	  eikDr1 = "131468980";
	}
        if (druj2EN === "A1") {
	  druj2BG = '"А1 България" ЕАД';
	  druj2BGreg = "А1 БЪЛГАРИЯ ЕАД";
	  eikDr2 = "131468980";
	}
        if (druj3EN === "A1") {
	  druj3BG = '"А1 България" ЕАД';
	  druj3BGreg = "А1 БЪЛГАРИЯ ЕАД";
	  eikDr3 = "131468980";
	}
        if (druj1EN === "Vivacom") {
	  druj1BG = '"Виваком България" ЕАД';
	  druj1BGreg = "ВИВАКОМ БЪЛГАРИЯ ЕАД";
	  eikDr1 = "831642181";
	}
        if (druj2EN === "Vivacom") {
	  druj2BG = '"Виваком България" ЕАД';
	  druj2BGreg = "ВИВАКОМ БЪЛГАРИЯ ЕАД";
	  eikDr2 = "831642181";
	}
        if (druj3EN === "Vivacom") {
	  druj3BG = '"Виваком България" ЕАД';
	  druj3BGreg = "ВИВАКОМ БЪЛГАРИЯ ЕАД";
	  eikDr3 = "831642181";
	}
        if (druj1EN === "Yettel") {
	  druj1BG = '"Йеттел България" ЕАД';
	  druj1BGreg = "ЙЕТТЕЛ БЪЛГАРИЯ ЕАД";
	  eikDr1 = "130460283";
	}
        if (druj2EN === "Yettel") {
	  druj2BG = '"Йеттел България" ЕАД';
	  druj2BGreg = "ЙЕТТЕЛ БЪЛГАРИЯ ЕАД";
	  eikDr2 = "130460283";
	}
        if (druj3EN === "Yettel") {
	  druj3BG = '"Йеттел България" ЕАД';
	  druj3BGreg = "ЙЕТТЕЛ БЪЛГАРИЯ ЕАД";
	  eikDr3 = "130460283";
	}
        
	if (
          druj1EN !== "A1" &&
          druj1EN !== "Vivacom" &&
          druj1EN !== "Yettel"
        ) {
          druj1BG = "ДРУЖЕСТВО_1";
	  druj1BGreg = "?????";
	  eikDr1 = "?????";
        }
        if (
          druj2EN !== "A1" &&
          druj2EN !== "Vivacom" &&
          druj2EN !== "Yettel"
        ) {
          druj2BG = "ДРУЖЕСТВО_2";
	  druj2BGreg = "?????";
	  eikDr2 = "?????";
        }
        if (
          druj3EN !== "A1" &&
          druj3EN !== "Vivacom" &&
          druj3EN !== "Yettel"
        ) {
          druj3BG = "ДРУЖЕСТВО_3";
	  druj3BGreg = "?????";
	  eikDr3 = "?????";
        }

	if (druj2EN === "" && druj3EN === "") {
		druj123BG = druj1BG;
		broiKP = 2;
	} else if (druj2EN !== "" && druj3EN === "") {
		druj123BG = `${druj1BG}, ${druj2BG}`;
		broiKP = 3;		
	} else if (druj2EN !== "" && druj3EN !== "") {
		druj123BG = `${druj1BG}, ${druj2BG}, ${druj3BG}`
		broiKP = 4;		
	}

	document.getElementById("1-1").innerHTML = "КП № С-ххх";
	document.getElementById("1-2").innerHTML = `${provSrok}`;
	document.getElementById("1-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("1-4").innerHTML = `${druj1BGreg} - жалбоподател`;
	document.getElementById("1-5").innerHTML = `${eikDr1}`;
	document.getElementById("1-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("1-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("1-8").innerHTML = `?????`;
	document.getElementById("1-9").innerHTML = `София`;
	document.getElementById("1-10").innerHTML = `?????`;
	document.getElementById("1-11").innerHTML = `Без апаратура`;
	document.getElementById("1-12").innerHTML = `Без транспорт`;

	document.getElementById("2-1").innerHTML = "КП № С-ххх";
	document.getElementById("2-2").innerHTML = `${provSrok}`;
	document.getElementById("2-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("2-4").innerHTML = `${druj1BGreg}`;
	document.getElementById("2-5").innerHTML = `${eikDr1}`;
	document.getElementById("2-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("2-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("2-8").innerHTML = `?????`;
	document.getElementById("2-9").innerHTML = `София`;
	document.getElementById("2-10").innerHTML = `?????`;
	document.getElementById("2-11").innerHTML = `Без апаратура`;
	document.getElementById("2-12").innerHTML = `Без транспорт`;

	document.getElementById("3-1").innerHTML = "КП № С-ххх";
	document.getElementById("3-2").innerHTML = `${provSrok}`;
	document.getElementById("3-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("3-4").innerHTML = `${druj2BGreg}`;
	document.getElementById("3-5").innerHTML = `${eikDr2}`;
	document.getElementById("3-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("3-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("3-8").innerHTML = `?????`;
	document.getElementById("3-9").innerHTML = `София`;
	document.getElementById("3-10").innerHTML = `?????`;
	document.getElementById("3-11").innerHTML = `Без апаратура`;
	document.getElementById("3-12").innerHTML = `Без транспорт`;

	document.getElementById("4-1").innerHTML = "КП № С-ххх";
	document.getElementById("4-2").innerHTML = `${provSrok}`;
	document.getElementById("4-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("4-4").innerHTML = `${druj3BGreg}`;
	document.getElementById("4-5").innerHTML = `${eikDr3}`;
	document.getElementById("4-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("4-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("4-8").innerHTML = `?????`;
	document.getElementById("4-9").innerHTML = `София`;
	document.getElementById("4-10").innerHTML = `?????`;
	document.getElementById("4-11").innerHTML = `Без апаратура`;
	document.getElementById("4-12").innerHTML = `Без транспорт`;

	document.getElementById("5-1").innerHTML = "         ";
	document.getElementById("5-2").innerHTML = `${provSrok}`;
	document.getElementById("5-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("5-4").innerHTML = `${druj1BGreg} - жалбоподател`;
	document.getElementById("5-5").innerHTML = `${eikDr1}`;
	document.getElementById("5-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("5-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("5-8").innerHTML = `София`;
	document.getElementById("5-9").innerHTML = `?????`;
	document.getElementById("5-10").innerHTML = `Без апаратура`;
	document.getElementById("5-11").innerHTML = `Без транспорт`;

	document.getElementById("6-1").innerHTML = "         ";
	document.getElementById("6-2").innerHTML = `${provSrok}`;
	document.getElementById("6-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("6-4").innerHTML = `${druj1BGreg}`;
	document.getElementById("6-5").innerHTML = `${eikDr1}`;
	document.getElementById("6-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("6-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("6-8").innerHTML = `София`;
	document.getElementById("6-9").innerHTML = `?????`;
	document.getElementById("6-10").innerHTML = `Без апаратура`;
	document.getElementById("6-11").innerHTML = `Без транспорт`;

	document.getElementById("7-1").innerHTML = "         ";
	document.getElementById("7-2").innerHTML = `${provSrok}`;
	document.getElementById("7-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("7-4").innerHTML = `${druj2BGreg}`;
	document.getElementById("7-5").innerHTML = `${eikDr2}`;
	document.getElementById("7-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("7-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("7-8").innerHTML = `София`;
	document.getElementById("7-9").innerHTML = `?????`;
	document.getElementById("7-10").innerHTML = `Без апаратура`;
	document.getElementById("7-11").innerHTML = `Без транспорт`;

	document.getElementById("8-1").innerHTML = "         ";
	document.getElementById("8-2").innerHTML = `${provSrok}`;
	document.getElementById("8-3").innerHTML = `${insp1}&#13;&#10;${insp2}`;
	document.getElementById("8-4").innerHTML = `${druj3BGreg}`;
	document.getElementById("8-5").innerHTML = `${eikDr3}`;
	document.getElementById("8-6").innerHTML = `ЗЕС/ЗПУ`;
	document.getElementById("8-7").innerHTML = `${signalNo}/${signalData}&#13;&#10;${pismoNo}/${pismoData}`;
	document.getElementById("8-8").innerHTML = `София`;
	document.getElementById("8-9").innerHTML = `?????`;
	document.getElementById("8-10").innerHTML = `Без апаратура`;
	document.getElementById("8-11").innerHTML = `Без транспорт`;


	if (broiKP === 4) { 
		document.getElementById("konstativni-protokoli").innerHTML = 
`<b>~ ~ ~ Имена на файловете на КП ~ ~ ~</b> <br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}-jalbopodatel<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj2EN}_${signalNo}_${signalData}<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj3EN}_${signalNo}_${signalData} <br /><br />
 <b>~ ~ ~ Относно - в КП ~ ~ ~</b> <br />
постъпил в Комисията за регулиране на съобщенията (КРС/Комисията) сигнал вх. № ${signalNo}/${signalData} г. от ${sykrashtenie} ${jalbImena} за ${provOtnosnoBG}`;
		document.getElementById("pridrujitelno-pismo2").innerHTML = 
`1. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
2. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
3. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
4. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br /><br />`;

	} else if (broiKP === 3) {
		document.getElementById("konstativni-protokoli").innerHTML = 
`<b>~ ~ ~ Имена на файловете на КП ~ ~ ~</b> <br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}-jalbopodatel<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj2EN}_${signalNo}_${signalData}<br /><br />
 <b>~ ~ ~ Относно - в КП ~ ~ ~</b> <br />
постъпил в Комисията за регулиране на съобщенията (КРС/Комисията) сигнал вх. № ${signalNo}/${signalData} г. от ${sykrashtenie} ${jalbImena} за ${provOtnosnoBG}`;
		document.getElementById("pridrujitelno-pismo2").innerHTML = 
`1. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
2. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
3. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br /><br />`;

		const redove4 = document.getElementsByClassName("red-4");
		while (redove4.length > 0) {
			redove4[0].remove();
		}
		
	} else if (broiKP === 2) {
		document.getElementById("konstativni-protokoli").innerHTML = 
`<b>~ ~ ~ Имена на файловете на КП ~ ~ ~</b> <br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}-jalbopodatel<br />
KP_S-xxx_${provSrok}_${provVid2}_${provOtnosnoEN}_${druj1EN}_${signalNo}_${signalData}<br /><br />
 <b>~ ~ ~ Относно - в КП ~ ~ ~</b> <br />
постъпил в Комисията за регулиране на съобщенията (КРС/Комисията) сигнал вх. № ${signalNo}/${signalData} г. от ${sykrashtenie} ${jalbImena} за ${provOtnosnoBG}`;
		
document.getElementById("pridrujitelno-pismo2").innerHTML = 
`1. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br />
2. КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.<br /><br />`;

		const redove3 = document.getElementsByClassName("red-3");
		while (redove3.length > 0) {
			redove3[0].remove();
		}
		
		const redove4 = document.getElementsByClassName("red-4");
		while (redove4.length > 0) {
			redove4[0].remove();
		}
	}


	// ============ ЗА ПРИДРУЖИТЕЛНО ПИСМО ДО ДИРЕКЦИЯТА-ВЪЗЛОЖИТЕЛ ============
	
	document.getElementById("pridrujitelno-pismo1").innerHTML = 
` <b>~ ~ ~ Име на файла ~ ~ ~</b> <br />
Pismo_${pismoNoBukviEN}-${pismoNoCifri}_${pismoData} <br /><br />
 <b>~ ~ ~ Относно ~ ~ ~</b> <br />
<i>Писмо № ${pismoNo}/${pismoData} г. и сигнал вх. № ${signalNo}/${signalData} г. </i><br /><br />
 <b>~ ~ ~ Текст при 2 и повече КП ~ ~ ~</b> <br />
Приложено, изпращаме Ви ${broiKP} броя констативни протоколи от извършени проверки на ${druj123BG} и при жалбоподател, във връзка със сигнал вх. № ${signalNo}/${signalData} г.<br /> 
На база на събраните при проверката доказателства и материали считаме, че не са налице данни за нарушение на контролираната от служителите на ГДМКС нормативна уредба.<br /><br />
<b>Приложения:</b>`;
	document.getElementById("pridrujitelno-pismo3").innerHTML = 
`<b>~ ~ ~ Текст при 1 КП (напр. без проверка при жалбоподател) ~ ~ ~</b> <br />
Приложено, изпращаме Ви 1 бр. констативен протокол от извършена проверка на ${druj1BG}, във връзка със сигнал вх. № ${signalNo}/${signalData} г. <br />
На база на събраните при проверката доказателства и материали считаме, че не са налице данни за нарушение на контролираната от служителите на ГДМКС нормативна уредба.<br /><br />
<b>Приложение:</b> КП № С-xxx/${provSrok} г. в електронен вид в „АИДА“.`;


	// ============ ЗА АИДА ============

	document.getElementById("aida").innerHTML = 
`<b>~ ~ ~ Относно в създаваното електронно писмо ~ ~ ~</b> <br />
Проверка на ${druj123BG} и при жалбоподател по писмо № ${pismoNo}/${pismoData} г., във връзка със сигнал вх. № ${signalNo}/${signalData} г. <br />`;
	
});

provVid1 = "";
provVid11 = "";
signalNoData = "";
pismoNoData = "";
provVid2 = "";
provOtnosnoBG = "";
provOtnosnoEN = "";
provSrokZaFormat = ""
drujSrokZaFormat = ""
druj1EN = "";
druj2EN = "";
druj3EN = "";
druj1BG = "";
druj2BG = "";
druj3BG = "";
druj123BG = "";
druj1BGreg = "";
druj2BGreg = "";
druj3BGreg = "";
eikDr1 = "";
eikDr2 = "";
eikDr3 = "";
insp1 = "";
insp2 = "";
jalbPol = "";
jalbImena = "";
jalbTel = "";
jalbMail = "";
jalbKlNo = "";
jalbDogNo = "";
sykrashtenie = "";
jalbObryshtenie = "";
broiKP = 0;



