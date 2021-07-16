'use strict';

const inputProgressTitle = $("#inputProgressTitle"); //진행률 인풋
const inputProgressNum = $("#inputProgressNum"); //진행률 인풋
const progressTitle = $('#progressTitle'); //제목
const progressBar = $('#progressBar'); //진행바
const progressBarText = $('#progressBarText'); //진행바숫자


//진행률 그리기
const printProgressNum = e => { 
    progressBar.val(e.target.value);
    progressBarText.html(e.target.value + "%");
}
inputProgressNum.on('keyup', printProgressNum);


const printProgressTitle = e => { progressTitle.val(e.target.value); }
inputProgressTitle.on('keyup', printProgressTitle);