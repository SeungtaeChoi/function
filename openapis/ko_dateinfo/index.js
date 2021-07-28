'use strict';

const search_year = document.querySelector("#search_year");
const search_month = document.querySelector("#search_month");
const search_btn = document.querySelector("#search_btn");
const result = document.querySelector("#result");

//검색 버튼
search_btn.onclick = () => {
    load_data('getHoliDeInfo', search_year.value, search_month.value, result.querySelector('#getHoliDeInfo')); // 국경일
    load_data('getRestDeInfo', search_year.value, search_month.value, result.querySelector('#getRestDeInfo')); // 공휴일
    load_data('getAnniversaryInfo', search_year.value, search_month.value, result.querySelector('#getAnniversaryInfo')); // 기념일
    load_data('get24DivisionsInfo', search_year.value, search_month.value, result.querySelector('#get24DivisionsInfo')); // 24절기
    load_data('getSundryDayInfo', search_year.value, search_month.value, result.querySelector('#getSundryDayInfo')); // 잡절
}

const load_data = (serviceUrl, year, month, print_div) => {
    fetch('./data_load.php?serviceUrl='+serviceUrl+'&year='+year+'&month='+month,
        {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type":"application/json",
            },
        }
    )
    .then((response)=>response.json())
    .then((data)=>{
        //console.log(data);
        print_div.querySelector('.content').innerHTML=data;
    })
    .catch(function (error) { console.log(error); });
}