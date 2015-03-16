
var xdir : float = 1.0;

function Update()
{

	//transform.position.y+=ydir;
	/*
	velocity = Vector3(xdir, 0, 0);
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(velocity*Time.deltaTime);
	*/
	
	transform.Translate(xdir, 0,0);
}


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "horizColl")
	{
		xdir = 1;
	}
	if (other.tag == "horizColl")
	{
		xdir = 1;
	}
	else if (other.tag == "horizColl2")
	{
		xdir = -1;
	}
	
}

