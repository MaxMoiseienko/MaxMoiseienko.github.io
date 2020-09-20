
let dataBuyCarYear = document.querySelector('#databuycarYear');
 let carcost  = document.querySelector(' #carcost');
 let carcostnow = document.querySelector('#carcostnow');
 let strahovka = document.querySelector('#strahovka')
 let paluvo = document.querySelector('#paluvo');
 let stoyanka = document.querySelector('#stoyanka');
 let shtraf = document.querySelector('#shtraf');
 let proizd = document.querySelector('#proizd');
 let remount = document.querySelector('#remount');
 let wash = document.querySelector('#wash');
 let podatok = document.querySelector('#podatok');
 let techvision = document.querySelector('#techvision');
 let techvisioncost = document.querySelector('#techvisioncost');
 let howbigfamily = document.querySelector('#howbigfamily');
 let anothertransport = document.querySelector('#anothertransport');
 let howmachride  = document.querySelector('#howmachride');
 const calculateButton = document.querySelector('#calculate_costs_btn_g_captcha');
 const chartBlock = document.querySelector('.chart__part');

 let costs1 =  document.querySelector('#costs1');
 let costs2 =  document.querySelector('#costs2');
 let costs3 =  document.querySelector('#costs3');
 let costs4=  document.querySelector('#costs4');
 let costs5 =  document.querySelector('#costs5');
 let costs6 =  document.querySelector('#costs6');
 let costs7 =  document.querySelector('#costs7');
 let costs8 =  document.querySelector('#costs8');
 let costs9 =  document.querySelector('#costs9');
 let costs10 =  document.querySelector('#costs10');
  let costs11 =  document.querySelector('#costs11');
  let costs12 =  document.querySelector('#costs12');
  let costs13 =  document.querySelector('#costs13'); 


 let totalCost = document.querySelector('.total__cost');
 let totalCosts= document.querySelector('.total_costs');
 let periodicTotalCost= document.querySelector('.periodic_costs_total_costs');
 let runningTotalCosts= document.querySelector('.running_total_costs');
 let allTotalCost= document.querySelector('.all__total__cost');
 let allTotalCostSum= document.querySelector('.all__total__cost-sum');




//функция расчета данных, и занесения их в соответствующие переменные
 function addCosts(){
    allTotalCost.innerHTML = `${(2020 - Number(dataBuyCarYear.value))*(Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value)) + Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value) + Number(howbigfamily.value*anothertransport.value*12))}грн`;
    allTotalCostSum.innerHTML = `у ${2020 - Number(dataBuyCarYear.value)} роках володіння`;
    totalCost.innerHTML = `${Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value)) + Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value) + Number(howbigfamily.value*anothertransport.value*12)}грн`;
    costs1.innerHTML = `${Number(carcost.value) - Number(carcostnow.value)}грн`;
    costs2.innerHTML = `${strahovka.value}грн`;
    costs3.innerHTML = `${techvision.value*techvisioncost.value}грн`;
    costs4.innerHTML = `${podatok.value}грн`;
    costs5.innerHTML = `${paluvo.value}грн`;
    costs6.innerHTML = `${techvision.value*techvisioncost.value}грн`;
    costs7.innerHTML = `${remount.value}грн`;
    costs8.innerHTML = `${stoyanka.value*12}грн`;
    costs9.innerHTML = `${proizd.value*12}грн`;
    costs10.innerHTML = `${wash.value*12}грн`;
    costs11.innerHTML = `${shtraf.value}грн`;
    costs12.innerHTML = `${Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value))}грн`;
    costs13.innerHTML = `${Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value)}грн`
    periodicTotalCost.innerHTML = `${Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value))}грн`;
    runningTotalCosts.innerHTML = `${Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value)}грн`
    totalCosts.innerHTML = `${Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value)) + Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value)}грн`;
 };

//функция для проверки корректности данных и расчета
calculateButton.addEventListener('click', function(){

    sum = (2020 - Number(dataBuyCarYear.value))*(Number(podatok.value) + Number(techvision.value*techvisioncost.value) + Number(strahovka.value) + (Number(carcost.value) - Number(carcostnow.value)) + Number(paluvo.value) + Number(remount.value) + Number(stoyanka.value*12) + Number(proizd.value*12) + Number(wash.value*12) + Number(shtraf.value) + Number(howbigfamily.value*anothertransport.value*12));
     if ((sum == 0)||(sum < 0)){
         alert('Не правильно введені данні! Впевніться в коректності вашого введення');
         window.location.reload();

     }
     else if((howbigfamily.value > 20)||(anothertransport.value >10000)){
        alert('Не правильно введені данні! А ви молодчина, більше 20 дітей =) або неправильні данні за кошт проїзду');
        window.location.reload();
     }
     else if(dataBuyCarYear.value < 1910){
        alert('Не правильно введені данні! А ви довгожитель! Як і машина =)');
        window.location.reload();
     }
     else if((techvision.value > 50)||(techvisioncost.value > 50000)){
        alert('Не правильно введені данні! Не думаю що так є насправді =)');
        window.location.reload();
     }
     else{
        chartBlock.style.display = "block";
        addCharts();
        addCosts();

     }
});


//добавлем графики
function addCharts(){

    let costBarChart = document.getElementById('costBarChart').getContext('2d');
    let costPieChart = document.getElementById('costPieChart').getContext('2d');
    let chart = new Chart(costBarChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
    
        datasets: [{
            label: 'Рівень кількості витрат',
            backgroundColor:  [
                'rgb(197, 25, 25)',
                'rgb(252, 248, 5)',
                'rgb(16, 38, 238)',
                'tomato',
                'violet',
                'royalblue',
                'springgreen',
                'purple',
                'orange'],

            borderColor: 'rgb(255, 99, 132)',
            data: [paluvo.value*12, stoyanka.value*12, shtraf.value, proizd.value*12, remount.value, wash.value*12, podatok.value, techvision.value*techvisioncost.value,howbigfamily.value*anothertransport.value*12]
        }],
        labels: ['Витрати на паливо', 'Витрати на стоянку', 'Плата за штрафи', 'Витрати на проїзд', 'Витрачені кошти на ремонт', 'Витрачені гроші на мийку', 'Податки на машину','Кошти на техогляд', 'Витрати на користування громадським транспортом'],
    },

    // Configuration options go here
   

    });
    let chart1 = new Chart(costPieChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
       
        datasets: [{
         
            backgroundColor:  [
                'rgb(197, 25, 25)',
                'rgb(252, 248, 5)',
                'rgb(16, 38, 238)',
                'tomato',
                'violet',
                'royalblue',
                'springgreen',
                'purple',
                'orange'],
               
                

            borderColor: 'rgb(255, 99, 132)',
            data: [paluvo.value*12, stoyanka.value*12, shtraf.value, proizd.value*12, remount.value, wash.value*12, podatok.value, techvision.value*techvisioncost.value,howbigfamily.value*anothertransport.value*12]
        }],
        labels: ['Витрати на паливо', 'Витрати на стоянку', 'Плата за штрафи', 'Витрати на проїзд', 'Витрачені кошти на ремонт', 'Витрачені гроші на мийку', 'Податки на машину','Кошти на техогляд', 'Витрати на користування громадським транспортом'],

    },

    // Configuration options go here
   

    });

}