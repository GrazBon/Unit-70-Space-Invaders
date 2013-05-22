#pragma strict

var x:float;
var y:float;

//the skin of menu text
var theme:GUISkin;

var nameInput:boolean;

function Start () {
	nameInput = false; //setting it empty on start
}

function Update () {
}

function OnGUI(){
	//apply theme
	GUI.skin = theme;
	
	var xLength = Screen.width/2;
	var yLength = Screen.height/2;	
	
	if(!nameInput){
		//creating a button
		if(GUI.Button(Rect(xLength+60,yLength-40,100,30),"Play"))
		{
			nameInput = true;
		}
		
		if(GUI.Button(Rect(xLength+60,yLength,100,30),"Exit"))
		{
			//new game was clicked
			Application.Quit();
		}
	}else{
		SpaceshipController.playerName = GUI.TextField(Rect(x+730, y+260, 120, 25), ""+SpaceshipController.playerName);
		
		if (GUI.Button(Rect(600, 230, 120, 25), "Back")) {
			nameInput = false;
		}
		
		if (GUI.Button(Rect(730, 230, 120, 25), "Submit")) {
			//new game was clicked
			Application.LoadLevel(1);
		}
	}	
}
