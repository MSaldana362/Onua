
var xdir : float = 1.0;
var velocity : Vector3=Vector3.zero;


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

	print("entered on trig");
	if (other.tag == "horizColl")
	{
		xdir = 1;
		print("xdir changed");
		print(xdir);
	}
	else if (other.tag == "horizColl2")
	{
		xdir = -1;
		print("xdir changed");
		print(xdir);
	}
	
}

