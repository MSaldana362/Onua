
var xdir : float;

function Update()
{

	//transform.position.y+=ydir;
	/*
	velocity = Vector3(0, ydir, 0);
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(velocity*Time.deltaTime);
	*/
	transform.Translate(0,0,xdir);
	
}


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "horizColl")
	{
		xdir = -0.1;

	}
	else if (other.tag == "horizColl2")
	{
		xdir = 0.1;

	}
	
}

