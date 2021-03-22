var myStyle;

myStyle = document.querySelector('.myStyle');
document.querySelector(".btn2").style.display = 'none';


document.querySelector(".btn1").addEventListener('click', function () {
    myStyle.setAttribute('href', "style2.css");
    document.querySelector(".btn2").style.display = 'block';
    document.querySelector(".btn1").style.display = 'none';

});

document.querySelector(".btn2").addEventListener('click', function () {
    myStyle.setAttribute('href', "style1.css");
    document.querySelector(".btn1").style.display = 'block';
    document.querySelector(".btn2").style.display = 'none';

});

