/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





 var clicks = [], divs = document.querySelectorAll('button');
     console.log(divs);
     for(var i = 0; i < divs.length; i++) {
      clicks[i]= 0;
      divs[i].innerHTML =  + clicks[i];
      divs[i].addEventListener('click', clicker(i));
     }
     function clicker(i) {  
      return function () {
       clicks[i] = clicks[i] + 1;
       divs[i].innerHTML =  + clicks[i];
      }     
  };