#pragma strict

var laserSlot:Rigidbody;
static var score:int;

//setting health variable to 100
static var health:int=100;

var colours:Material[];

static var fired:int;
static var missed:int;
static var hit:int;

static var playerName:String="";

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="enemyLaser")
	{
		//if player is hit it will change the material
		this.renderer.material = colours[1];
		//if player is hit the health will decrease 
		health-=10;
		
		if (health == 0)
			Application.LoadLevel(3);
	}
	
	//set shots fired by spaceship/player
	if(other.gameObject.tag=="laserSlot")
	{
		fired++;
	}
	
	
	if(other.gameObject.tag=="laserSlot")
	{
		missed = fired - hit; //subtracting shots hit from shots fired to get missing shots
	}
	
}


function OnTriggerExit(other:Collider)
{
	/*chaging the spaceship to its original colour 
	when the laser leaves the spaceship*/
	this.renderer.material = colours[0];
}

function OnGUI()
{
	//these are the labels and text colour for health and score on the left hand side on the screen
	GUI.color = Color.white;
	GUI.Label(Rect(0,0,120,25),"Player: "+playerName);
	GUI.Label(Rect(150,0,100,25),"Score: "+score);
	GUI.Label(Rect(230,0,100,25),"Health: "+health);
	GUI.Label(Rect(330,0,100,25),"Aliens Hit: "+hit);
	GUI.Label(Rect(430,0,100,25),"Shots Fired: "+fired);
	GUI.Label(Rect(550,0,120,25),"Shots Missed: "+missed);
}


function Start () {
	//when starting the game again health and other elements will restart as follows...
	score = 0;
	health = 100;
	fired = 0;
	hit = 0;
	missed = 0;
	
	//spaceship's default material
	this.renderer.material = colours[0];
}

function Update () {
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//going to next level. First it is checking if var health is 0, if yes it will load gameover...
	if (health == 0)
	{
		Application.LoadLevel(3);
	//else if health is not 0 the game will load game over screen
	}else{
		//setting key to shoot the laser for spaceship/player
		if(Input.GetKeyDown(KeyCode.L))
		{
			Instantiate(laserSlot,transform.position,transform.rotation);
		}
	}
	
	//stopping the spaceship from keep going left to right out of border
	var border:float=1.0;
	
	if (transform.position.x < BorderController.leftmost + border)
	{
		transform.position.x = BorderController.leftmost + border;
	}
	
	if (transform.position.x > BorderController.rightmost - border)
	{
		transform.position.x = BorderController.rightmost - border;
	}
	
	
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	
}