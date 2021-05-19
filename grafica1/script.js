
let city = "Monterrey"

const weatherChart = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4000ba7ec1c202ce85d30d566a632406`)
    const data = await res.json()
    return data
}

const printChart = (info) => {

    const labels = [
                    info.list[0].dt_txt,
                    ];
    const data = {
        labels: labels,
            datasets: [{
                        label: 'Temperatura Normal',
                        backgroundColor: 'green',
                        borderColor: 'black',
                        data: [info.list[0].main.temp], 
                        },{
                        label: 'Sensación térmica',
                        backgroundColor: 'yellow',
                        borderColor: 'black',
                        data: [info.list[0].main.feels_like],   
                        },{
                        label: 'Temperatura mínima',
                        backgroundColor: 'blue',
                        borderColor: 'black',
                        data: [info.list[0].main.temp_min],    
                        },{
                        label: 'Temperatura máxima',
                        backgroundColor: 'red',
                        borderColor: 'black',
                        data: [info.list[0].main.temp_max],   
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

weatherChart().then(data => printChart(data));