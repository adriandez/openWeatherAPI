// const getDate = () => {
//     let year = (new Date().getFullYear());
//     let month = (new Date().getMonth()) + 1;
//     let day = (new Date().getDate());

//     for (let i = 0;i<4;i++) {
//         arr.push(`${year}-0${month}-${day++}`);
//     }
//     return arr
// }

// console.log(arr);

// let date = getDate();
// const mkDT = (info) => {

//     for (let i = 0;i<info.list.length;i++) {
//         let str = info.list[i].dt_txt
//         let res = str.split(" ")
//         console.log(res);
//         arr2.push(res[i])
//     }    

//     console.log(arr2);

// }



// const filterDT = (info) => {
//     console.log(info);
//     console.log(info.list);
//     console.log(info.list[0]);
//     console.log(info.list[0].dt_txt);
//     console.log(info.list[0].main);

//     console.log(date);

//     for (let i = 0;i<info.length;i++){
//         for (let j = 0;j<date.lenght;j++)
//         if (info.list[i].dt_txt == date[j]){
//             filtered.push(info.list[i])
//         }
//     }
// }

// console.log(filtered);

// const fToC = async (fahrenheit) => {
//     let fTemp = await fahrenheit.list[0].main.temp
//     let sTerm = await fahrenheit.list[0].main.feels_like
//     let tempMin = await fahrenheit.list[0].main.temp_min
//     let tempMax =  await fahrenheit.list[0].main.temp_max
//     fahr.push(fTemp,sTerm,tempMin,tempMax)
//     console.log(fahr);
//     for (let i = 0;i<fahr.length;i++){ 
//         let fToCel = (fahr[i] - 32) * 5 / 9
//         cel.push(fToCel)
        
//     }
    
// }

// console.log(cel);