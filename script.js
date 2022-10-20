let hrs = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hrs.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm + (ss/60)}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    let bhr = document.querySelector(".hours");
    let bmm = document.querySelector(".minutes");
    let bss = document.querySelector(".seconds");
    let bampm = document.querySelector(".ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //if else h>12 and h<12
    bampm.innerHTML = (h<12) ? "AM" : "PM";
    
    //formatting 24 to 12 hours
    h = (h>12) ? h-12 : h;

    //zero add in single digit
    h = (h<10) ? "0"+h:h;
    m = (m<10) ? "0"+m:m;
    s = (s<10) ? "0"+s:s;

    bhr.innerHTML = h;
    bmm.innerHTML = m;
    bss.innerHTML = s;
    
})