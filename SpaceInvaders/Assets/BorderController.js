#pragma strict

static var leftmost:float;
static var rightmost:float;
static var topmost:float;
static var bottommost:float;


function Start () {

}

function Update () {

	//calculating borders
	//leftmost border
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	
	//rightmost border.  The X position of the right most border RELATIVE to the center.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
}


static function EnableBorders(object:Transform)
{

	//if spaceship leaves the screen to the left
	if (object.position.x < leftmost)
	{
		object.position.x = rightmost;
	}

	//if spaceship leaves the screen to the right
	if (object.position.x > rightmost)
	{
		object.position.x = leftmost;
	}
	
	
}