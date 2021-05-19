let city = "Monterrey"
const weatherChart = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4000ba7ec1c202ce85d30d566a632406`)
    const data = await res.json()
    console.log(data);
    return data
}
const printChart = (info) => {
    const labels = [
                    info.list[0].dt_txt,
                    ];
    const data = {
        labels: labels,
            datasets: [{
                        label: 'Presión',
                        backgroundColor: 'green',
                        borderColor: 'black',
                        data: [info.list[0].main.pressure], 
                        },{
                        label: 'Presión al nivel del suelo',
                        backgroundColor: 'yellow',
                        borderColor: 'black',
                        data: [info.list[0].main.grnd_level],   
                        },{
                        label: 'Presión al nivel del mar',
                        backgroundColor: 'blue',
                        borderColor: 'black',
                        data: [info.list[0].main.sea_level],    
                        }
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
                                            text: `Presión en ${city}`
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