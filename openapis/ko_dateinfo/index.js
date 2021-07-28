'use strict';

const urlEnKey = 'IEn1HAcY%2BEqkVWTn5g7hUuIquNG3RsrqoYajTMd0VAvWRbwc6rJoja%2FrwmGJ3AIUpsQtqcitHJ2GOruzwlIVfw%3D%3D';
const urlDeKey = 'IEn1HAcY+EqkVWTn5g7hUuIquNG3RsrqoYajTMd0VAvWRbwc6rJoja/rwmGJ3AIUpsQtqcitHJ2GOruzwlIVfw==';

const search_year = document.querySelector("#search_year");
const search_month = document.querySelector("#search_month");
const search_btn = document.querySelector("#search_btn");

//검색 버튼
search_btn.onclick = () => {
    load_data(search_year.value, search_month.value);
}

const load_data = (year, month) => {
    const baseUrl = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/';
    const service = 'getHoliDeInfo';
    let url = baseUrl + service + '?solYear=' + year + '&ServiceKey=' + urlEnKey + '&_type=json';
    if(month >= 1 && month <=12){ url += '&solMonth='+month; }

    fetch(url,
        {
            method: "POST",
            headers: {
                "Content-Type":"text/xml",
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers":"X-Requested-With"
            },
            body: JSON.stringify({
            })
        }
    )
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
    .catch(function (error) { console.log(error); });
}