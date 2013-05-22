#pragma strict
//slot for the enemy laser
var enemyLaser:Rigidbody;
static var hit: int;

function shootLaser()
{
	//create an instance of enemy laser at the position of each alien
	Instantiate(enemyLaser,transform.position,transform.rotation);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="laserSlot")
	{
		SpaceshipController.score+=10;
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
	}
	
	if(other.gameObject.tag=="laserSlot")
	{
		//setting an increment by one to see how many times the alien was hit
		SpaceshipController.hit++;
	}
}

function Start () {
	var delay:float;
	delay = Random.Range(1.0,3.0);
	InvokeRepeating("shootLaser",delay,delay);
}

function Update () {

}