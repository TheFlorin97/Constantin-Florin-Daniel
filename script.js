var myStyle;

myStyle = document.querySelector('.myStyle');



document.querySelector(".btn__style").addEventListener('click', function () {


    myStyle.setAttribute('href', "style2.css");
    console.log(myStyle.href);

});

