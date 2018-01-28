/*var colors=[
			"rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(255, 0, 255)",
			"rgb(0, 255, 255)",
			"rgb(0, 255, 0)",
			"rgb(0, 0, 255)"
			];*/
var colors = randomColorGenerator(6);
var squares=document.querySelectorAll(".square");
var j=0;
var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var button = document.querySelector("#bt");
button.addEventListener("click", function(){
	//Generate random Color
	colors = randomColorGenerator(6);
	//pick Color
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];

	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent="";
	
});
colors.forEach(function()
/*for(var i=0;i<squares.length;i++)*/
{	
	squares[j].style.backgroundColor=colors[j];
	squares[j].addEventListener("click", function(){
	var clickedColor=this.style.backgroundColor;
	if(clickedColor===pickedColor)
	{
		changeColor();
		messageDisplay.textContent="Correct !"
		button.textContent = "Play Again?";
		h1.style.backgroundColor=clickedColor;
	}
	else{
		this.style.backgroundColor="#232323";
		messageDisplay.textContent="Try Again !";
	}
	});
	j++;
});
function changeColor()
{
	var k=0;
	colors.forEach(function(){
					squares[k].style.backgroundColor=pickedColor;
					k++;
					});

}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function randomColorGenerator(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i] = randomColor();
	}
	return arr;
}
function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	
}