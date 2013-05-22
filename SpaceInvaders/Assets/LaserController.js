#pragma strict

var direction:Vector3;

function Start () {
	if (gameObject.tag == "laserSlot") {
		direction = Vector3.up;
	} else {
		direction = Vector3.down;
	}
}

function Update () {
	transform.Translate(direction * 15 * Time.deltaTime);
	
}

function OnBecameInvisible()
{
	//kill the object touched with laser
	Destroy(this.gameObject);
}
