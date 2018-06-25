(function () {
    const TimeKumamon = '0';
    const TimeBravo = '1000';

    const $body = document.querySelector('body');
    const $article = document.querySelector('article');
    const $eyesLeft = document.querySelector('.eyes.eyes-left');
    const $eyesRight = document.querySelector('.eyes.eyes-right');
    const $eyesbrows = document.querySelectorAll('.eyes>.eyebrow');
    const $eyesballLeft = document.querySelector('.eyes-left>.eyeball');
    const $eyesballRight = document.querySelector('.eyes-right>.eyeball');
    const $face = document.querySelector('.face');
    const $nose = document.querySelector('.nose');
    const $mouth = document.querySelector('.mouth');
    const $flush = document.querySelectorAll('.flush');

    const kumamonStyle = {
        article: 'background-color:rgb(0,0,0);',
        eyesLeft: 'width:84px;height:84px;left:100px;',
        eyesRight: 'width:84px;height:84px;right:100px;',
        eyesbrows: 'opacity:1;',
        eyesballLeft: 'width:15px;height:38px;background-color: rgb(0, 0, 0);border: 0px rgb(0, 0, 0) solid;left:34.5px;',
        eyesballRight: 'width:15px;height:38px;background-color: rgb(0, 0, 0);border: 0px rgb(0, 0, 0) solid;right:34.5px;',
        face: 'top:180px;',
        nose: 'width:65px;height:47px;top:9px;border-radius:100% 100% 65px 65px;',
        mouth: 'width:200px;height:20px;background-color:rgb(0, 0, 0);border-bottom: 0px rgb(206, 37, 25) solid;',
        flush: 'opacity:1;'
    }

    const bravoStyle = {
        article: 'background-color:rgb(32, 35, 41);',
        eyesLeft: 'width:60px;height:60px;left:140px;',
        eyesRight: 'width:60px;height:60px;right:140px;',
        eyesbrows: 'opacity:0;',
        eyesballLeft: 'width:30px;height:30px;background-color:rgb(255, 255, 255);border: 10px rgb(0, 0, 0) solid;left:10px;',
        eyesballRight: 'width:30px;height:30px;background-color:rgb(255, 255, 255);border: 10px rgb(0, 0, 0) solid;right:10px;',
        face: 'top:200px;',
        nose: 'width:65px;height:40px;top:0px;borderradius:100% 100% 100px 100px;',
        mouth: 'width:150px;height:42px;background-color:rgb(255, 255, 255);border-bottom: 10px rgb(206, 37, 25) solid;',
        flush: 'opacity:0;'
    }

    function setBearStyle() {
        $body.setAttribute(`data-${TimeKumamon}`, 'background-color:rgb(239, 239, 239);');
        $body.setAttribute(`data-${TimeBravo}`, 'background-color:rgb(137, 193, 71);');

        $article.setAttribute(`data-${TimeKumamon}`, kumamonStyle.article);
        $article.setAttribute(`data-${TimeBravo}`, bravoStyle.article);

        $eyesLeft.setAttribute(`data-${TimeKumamon}`, kumamonStyle.eyesLeft);
        $eyesLeft.setAttribute(`data-${TimeBravo}`, bravoStyle.eyesLeft);

        $eyesRight.setAttribute(`data-${TimeKumamon}`, kumamonStyle.eyesRight);
        $eyesRight.setAttribute(`data-${TimeBravo}`, bravoStyle.eyesRight);

        $eyesbrows.forEach(function (m) {
            m.setAttribute(`data-${TimeKumamon}`, kumamonStyle.eyesbrows);
            m.setAttribute(`data-${TimeBravo}`, bravoStyle.eyesbrows);
        });

        $eyesballLeft.setAttribute(`data-${TimeKumamon}`, kumamonStyle.eyesballLeft);
        $eyesballLeft.setAttribute(`data-${TimeBravo}`, bravoStyle.eyesballLeft);

        $eyesballRight.setAttribute(`data-${TimeKumamon}`, kumamonStyle.eyesballRight);
        $eyesballRight.setAttribute(`data-${TimeBravo}`, bravoStyle.eyesballRight);

        $face.setAttribute(`data-${TimeKumamon}`, kumamonStyle.face);
        $face.setAttribute(`data-${TimeBravo}`, bravoStyle.face);

        $nose.setAttribute(`data-${TimeKumamon}`, kumamonStyle.nose);
        $nose.setAttribute(`data-${TimeBravo}`, bravoStyle.nose);

        $mouth.setAttribute(`data-${TimeKumamon}`, kumamonStyle.mouth);
        $mouth.setAttribute(`data-${TimeBravo}`, bravoStyle.mouth);

        $flush.forEach(function (m) {
            m.setAttribute(`data-${TimeKumamon}`, kumamonStyle.flush);
            m.setAttribute(`data-${TimeBravo}`, bravoStyle.flush);
        });
    }
    window.onload = function () {
        setBearStyle();
        skrollr.init();
    }
})();