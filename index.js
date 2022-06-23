var peso_ususario = prompt('¿Cuál es su peso en kilos?');
var planeta = prompt('gitlige tu planeta!\nPuedes elegir entre marte o júpiter');
var peso = parseFloat(peso_ususario);
var g_earth = 9.8;
var g_mars = 3.7;
var g_jupiter = 24.8;
var peso_final;
if(planeta == 'marte')
{
    peso_final = '<b>Tu peso en ' + planeta + ' es ' + parseFloat(peso * g_mars / g_earth).toFixed(2) +' kilos</b>';
}
else if(planeta == 'júpiter')
{
    peso_final = '<b>Tu peso en ' + planeta + ' es ' + parseFloat(peso * g_jupiter / g_earth).toFixed(2) +' kilos</b>'; 
}
else
{
    peso_final = '<b>Por favor escribe correctamente el planeta (╥ᆺ╥；)</b>' 
}
document.write(peso_final);