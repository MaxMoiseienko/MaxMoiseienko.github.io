
//достаем из HTML документа наши обьекты для взаимодействия

let carV = document.querySelector("#jq_car_engine");
let carAllRun = document.querySelector("#car_run");
let carNowMonthRun = document.querySelector("#car_run_nowmonth");
let WhenCarRem = document.querySelector("#when_car_rem");
let carRunMonthMidle = document.querySelector("#car_run_month_midle");
let fuelCons = document.querySelector("#fuel__consumption");
let fuelCost = document.querySelector("#fuel__cost");
let carRunLastMonth = document.querySelector("#car_run_lastmonth");
let WhenWheelsBuy = document.querySelector("#when_wheels_buy");
let WhenCarBuy = document.querySelector("#when_car_buy");
let statButton = document.querySelector(".watch__statistik");
let charsBlock = document.querySelector(".charts");
let chartsContainer = document.querySelector(".chars__wrap");
let coment1 = document.querySelector(".coment__first");
let comentItem1 = document.querySelector(".coments__item__first");
let coment2 = document.querySelector(".coment__second");
let comentItem2 = document.querySelector(".coments__item__second");
let coment3 = document.querySelector(".coment__third");
let comentItem3 = document.querySelector(".coments__item__third");

//проверяем введенные данные и выводим разные варианты событий
function checkcoments(){
    if (WhenCarRem.value > 12){
        coment1.textContent = "Вам негайно потрібно пройти техогляд!!!"
        comentItem1.style.backgroundColor = "red";


    }
    else if (WhenCarRem.value <= 12 && WhenCarRem.value > 6){
        coment1.textContent = "Бажано пройти техогляд"
        comentItem1.style.backgroundColor = "yellow";

    }
    else if(WhenCarRem.value < 6){
        coment1.textContent = "Не потребуєте техогляду"
        comentItem1.style.backgroundColor = "green";

    }


    if (WhenWheelsBuy.value > 18){
        coment2.textContent = "Купіть нові шини!!!"
        comentItem2.style.backgroundColor = "red";


    }
    else if (WhenWheelsBuy.value <= 18 && WhenWheelsBuy.value > 10){
        coment2.textContent = "Бажано змінити шини"
        comentItem2.style.backgroundColor = "yellow";

    }
    else if(WhenWheelsBuy.value < 10){
        coment2.textContent = "Шини в нормі"
        comentItem2.style.backgroundColor = "green";

    }


    if (WhenCarBuy.value > 20){
        coment3.textContent = "Машина схильна до поломок"
        comentItem3.style.backgroundColor = "red";


    }
    else if (WhenCarBuy.value <= 20 && WhenCarBuy.value >= 10){
        coment3.textContent = "Машина в середній зоні ризику"
        comentItem3.style.backgroundColor = "yellow";

    }
    else if(WhenCarBuy.value < 10 && WhenCarBuy.value > 3){
        coment3.textContent = "Машина в нормі"
        comentItem3.style.backgroundColor = "green";

    }
    else if(WhenCarBuy.value < 3){
        coment3.textContent = "У вас нова машина!"
        comentItem3.style.backgroundColor = "green";

    }

};
//функция проверки введенных даных, которая работает при клике на кнопку
statButton.addEventListener('click', function(){
    if (carV.value === "" ||  WhenCarRem.value == ""  || fuelCost.value == "" || fuelCons.value == ""  || carRunLastMonth.value == "" || WhenWheelsBuy.value == "" || WhenCarBuy.value == ""){
        alert('Введіть всі данні!');
        window.location.reload();
        
    }
    else{
        charsBlock.classList.toggle("open-charts");
        addStatistik();
    }
   
});
//функция добавления графиков
function addStatistik(){
    //cоздание графиков

let carVchart = document.getElementById('carVchart').getContext('2d');
let chart = new Chart(carVchart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Ваша машина', 'БМВ 5 серії', 'Ауді А6', 'Bugatti Veyron', 'Lamborghini Aventador', 'Лада 2105', 'Toyota Prius'],
        datasets: [{
            label: 'Об*єм двигуна',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [carV.value, 4.8, 4.2, 8, 6.5, 1.6, 1.2]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }],
            yAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }]
            }
         

    }
});

let carRunChart = document.getElementById('carrunchart').getContext('2d');
let chart1 = new Chart(carRunChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Минулий місяць', 'Нинішній місяць', 'Середній пробіг'],
        datasets: [{
            label:'Пробіг машини' ,
            backgroundColor: ['red','green','blue'],
            borderColor: 'rgb(255, 99, 132)',
            data: [carRunLastMonth.value, carNowMonthRun.value , carRunMonthMidle.value]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }],
            yAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
        }]
            }
       
    }
});

let fuelCostChart = document.getElementById('fuelcostchart').getContext('2d');
let chart2 = new Chart(fuelCostChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2015 рік', '2016 рік', '2017 рік', '2018 рік', '2019 рік', 'зараз'],
        datasets: [{
            label: 'Ціна палива',
            backgroundColor: ['purple','yellow','red','green','blue'],
            borderColor: 'rgb(255, 99, 132)',
            data: [19.25, 21.13, 23.50, 25.05, 27, fuelCost.value]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }],
            yAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }]
            }
       

    }
});

let fuelConsChart = document.getElementById('fuelcons').getContext('2d');
let chart3 = new Chart(fuelConsChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Ваша машина', 'БМВ 5 серії', 'Ауді А6', 'Bugatti Veyron', 'Lamborghini Aventador', 'Лада 2105', 'Toyota Prius'],
        datasets: [{
            label: 'Витрата палива на 100 км вашої машини',
            backgroundColor:[ 'red',  'green',
            'rgb(252, 248, 5)',
            'rgb(16, 38, 238)',
            'tomato',
            'violet',
            'royalblue',
            'springgreen',
            'purple',
            'orange'] ,
            borderColor: 'rgb(255, 99, 132)',
            data: [ fuelCons.value, 9, 4.2 ,25 , 16 , 6 , 5]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [
                {
                    gridLines: { color: "blue" },
                    ticks: {
                        beginAtZero:true,
                        fontColor: 'blue'
                    },
                }],
            yAxes: [{
                gridLines: { color: "blue" },
                ticks: {
                    beginAtZero:true,
                    fontColor: 'blue'
                },
            }]
            }
       

    }
});
 

let displayStatistik =`
        <div class="chart__item">
            <canvas id="carVchart"  width="800" height="400"></canvas>
        </div>
        <div class="chart__item">
            <canvas id="carrunchart" width="800" height="400"></canvas>
        </div>
        <div class="chart__item">
            <canvas id="fuelcostchart"  width="800" height="400"></canvas>
        </div>
        <div class="chart__item">
            <canvas id="fuelcons"  width="800" height="400"></canvas>
        </div>
`;
 chartsContainer.insertAdjacentElement = displayStatistik;    
//функция провекри истинности введенных данных
  checkcoments();
};


