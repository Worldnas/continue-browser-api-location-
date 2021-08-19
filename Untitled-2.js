document.getElementById("result").innerHTML+="location is"+window.location.protocol+"<br>";
document.getElementById("result").innerHTML+="host name is"+window.location.hostname+"<br>";
document.getElementById("result").innerHTML+="port is"+window.location.port+"<br>";
document.getElementById("result").innerHTML+="path is"+window.location.pathname+"<br>";
document.getElementById("result").innerHTML+="search is"+window.location.search+"<br>";
if(window.confirm("are you sure to go to http://google.com?" ))
{
	//alert("done!!")
	window.location="http://www.google.com"
}
else
{
	alert("undone!!")
}