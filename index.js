var peso_ususario = prompt('¿Cuál es su peso en kilos?');
var planeta = prompt('¡Elige tu planeta!');
var peso = parseFloat(peso_ususario);
var g_earth = 9.8;
var g_mars = 3.7;
var g_jupiter = 24.8;
var peso_final;
if(planeta == 'marte')
{
    peso_final = peso * g_mars / g_earth;
}
else
{
    peso_final = peso * g_jupiter / g_earth;
}
peso_final = parseFloat(peso_final).toFixed(2);
document.write('<b> ' + peso_final + ' kilos</b>');