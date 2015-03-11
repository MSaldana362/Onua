
var xdir : float = 1.0;
var velocity : Vector3=Vector3.zero;


function Update()
{

	//transform.position.y+=ydir;
	velocity = Vector3(xdir, 0, 0);
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(velocity*Time.deltaTime);
	
}


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "verticleCollider")
	{
		xdir = -xdir;
		print("got here");
	}
	
}

