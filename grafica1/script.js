let toFilter;
let filtered = [];
let arr = [];
let arr2 = [];


const API_KEY = "4000ba7ec1c202ce85d30d566a632406"

let city = "Monterrey"

const getDate = () => {
    let year = (new Date().getFullYear());
    let month = (new Date().getMonth()) + 1;
    let day = (new Date().getDate());
    for (let i = 0;i<4;i++) {
        arr.push(`${year}-0${month}-${day++}`);
    }
    return arr
}

console.log(arr);

let date = getDate();

const weatherChart = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4000ba7ec1c202ce85d30d566a632406`)
    const data = await res.json()
    return data
}

const mkDT = (info) => {

    for (let i = 0;i<info.lenght;i++){
        let str = info.list[0].dt_txt
        let res = str.split(" ")
    }

    let str = info.list[0].dt_txt
    let res = str.split(" ")
    console.log(res[0]);
}

const filterDT = (info) => {
    console.log(info);
    console.log(info.list);
    console.log(info.list[0]);
    console.log(info.list[0].dt_txt);
    console.log(info.list[0].main);

    console.log(date);

    for (let i = 0;i<info.lenght;i++){
        for (let j = 0;j<date.lenght;j++)
        if (info.list[i].dt_txt == date[j]){
            filtered.push(info.list[i])
        }
    }
}

console.log(filtered);

const printChart = (label, tn, st, tmin, tmax) => {

    const labels = [
                    '2021-05-18 15:00:00',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    ];
    const data = {
        labels: labels,
            datasets: [{
                        label: 'Temperatura Normal',
                        backgroundColor: 'green',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [24],
                        },{
                        label: 'Sensación térmica',
                        backgroundColor: 'yellow',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [32],   
                        },{
                        label: 'Temperatura mínima',
                        backgroundColor: 'blue',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [32],   
                        },{
                        label: 'Temperatura máxima',
                        backgroundColor: 'red',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [32],   
                        },
                    ]
                };
    
    const config = {
                    type: 'bar',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                                    legend: {
                                    position: 'top',
                                    },
                                    title: {
                                            display: true,
                                            text: `Temperatura ${city}`
                                            }
                                }
                    },
                    };

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

weatherChart().then(data => mkDT(data));