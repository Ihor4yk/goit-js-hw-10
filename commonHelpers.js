import"./assets/styles-0115c2da.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),o=document.querySelectorAll(".value");let a,n;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],n=a-new Date,n<1?m.error({color:"red",position:"topRight",message:"Please choose a date in the future"}):(r.disabled=!1,s.disabled=!0)}};l(s,h);function f(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}r.disabled=!0;r.addEventListener("click",()=>{const t=setInterval(()=>{if(n=a-new Date,n<1){r.disabled=!0,clearInterval(t);return}const e=f(n);o[0].innerText=e.days.toString().padStart(2,"0"),o[1].innerText=e.hours.toString().padStart(2,"0"),o[2].innerText=e.minutes.toString().padStart(2,"0"),o[3].innerText=e.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
