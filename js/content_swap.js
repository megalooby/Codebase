var counter=0;

function swap(selected)
{
    document.getElementById('home').style.display='none';
    document.getElementById('heart').style.display='none';
    document.getElementById('flower').style.display='none';
    document.getElementById('knife').style.display='none';
    document.getElementById('shovel').style.display='none';

    document.getElementById(selected).style.display='block';
}

function changelook()
{
    document.getElementById('theme').style.backgroundColor='none';
    document.getElementById('theme').style.fontFamily='none';
    document.getElementById('theme').style.color='none';
}

function countUp()
{
    counter+=1;
    document.getElementById('result').innerHTML = counter;
}

function changeColor(newColor)
{
    var elem = document.getElementById("paral");
    elem.style.color = newColor;
};