//code.stephenmorley.org
var runOnLoad=function(m,o,r,l,e,y){function x(){for(y=1;m.length;)m.shift()()}r[l]?(r[l]('DOMContentLoaded',x,0),o[l]('load',x,0)):(r[e]('onreadystatechange',function(){r.readyState=='complete'&&x()}),o[e]('onload',x));return function(t){y?o.setTimeout(t,0):m.push(t)}}([],window,document,'addEventListener','attachEvent');