/*для выбора lang*/

const langru = document.querySelector(".item-lang__ru"),
      langen = document.querySelector(".item-lang__en"),
      langfr = document.querySelector(".item-lang__fr");

      langru.addEventListener('click', () =>{
        langru.classList.toggle('selected');
        if (langen.classList.contains('selected')) {
          langen.classList.remove('selected')
        };
        if (langfr.classList.contains('selected')) {
          langfr.classList.remove('selected')
        };
      });

      langen.addEventListener('click', () =>{
        langen.classList.toggle('selected');
        if (langru.classList.contains('selected')) {
          langru.classList.remove('selected')
        };
        if (langfr.classList.contains('selected')) {
          langfr.classList.remove('selected')
        };
      });

      langfr.addEventListener('click', () =>{
        langfr.classList.toggle('selected');
        if (langru.classList.contains('selected')) {
          langru.classList.remove('selected')
        };
        if (langen.classList.contains('selected')) {
          langen.classList.remove('selected')
        };
      });
 
 /*для выбора all-service*/
/*
 const allservicePage = document.querySelectorAll(".allservice__page");
      
      allservicePage.forEach(allservicePages => {
        allservicePages.addEventListener('click', () => allservicePages.classList.toggle("active"));
      });
*/