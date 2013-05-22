 #pragma strict
var alien:Rigidbody;
var rows:int;
var columns:int;

var level: int=1;

var backgroundMaterials: Material[];


function generateAliens(rows:int,columns:int)
{
	var ypos = transform.position.y;
	
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0;counter<columns;counter++)
		{
			//y position of swarm.  1.5 horizontal spacing.  Can be reduced to 0.
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowscounter*1.5),1),Quaternion.identity);
			//place this object inside the swarm
			tempAlien.transform.parent = this.transform;
	
		}
	}
}


function Start () {
	//generating aliens in rows and columns
	generateAliens(rows,columns);
}

function Update () {
	//if all of the aliens are killed take player call function NextLevel()
	if (GameObject.FindGameObjectsWithTag("alien").Length == 0){ 
			NextLevel(); //calling NextLevel function
			SpaceshipController.score = 0; //reset score to 0 again
	}
}

function NextLevel(){
	level++;
	transform.position.x = 0;
	
	switch (level){
		case 2:
			//go level 2 and generate 3 rows and columns of aliens
			generateAliens(3, 6);
			this.GetComponent(SwarmController).rightmargin = BorderController.rightmost - (6 * 2);
			break;
			
		case 3:
			//go level 3 and generate 5 rows and 8 columns of alines
			generateAliens(5, 8);
			this.GetComponent(SwarmController).rightmargin = BorderController.rightmost - (8 * 2);	
			break;
		
		case 4:
			//go to congratulations menu
			Application.LoadLevel(2);
			break;
	}
	//this will load the background aterials for each level
	GameObject.Find("Plane").renderer.material = backgroundMaterials[level - 1];
}