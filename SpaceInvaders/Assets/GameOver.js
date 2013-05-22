#pragma strict

var x:float;
var y:float;

//the skin of menu text
var theme:GUISkin;

function Start () {
}

function Update () {
}

function OnGUI(){
	//apply theme
	GUI.skin = theme;
	
	var xLength = Screen.width/2;
	var yLength = Screen.height/2;	
	
	//creating a button
	if(GUI.Button(Rect(xLength+60,yLength-40,100,30),"Play Again")) //if player clicks play again then load level 1
	{
		Application.LoadLevel(1);
	}
		
	if(GUI.Button(Rect(xLength+60,yLength,100,30),"Exit")) // else if player click exit, quit application
	{
		
		Application.Quit();
	}
}
