
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
<<<<<<< HEAD
	if (other.tag == "horizColl")
	{
		xdir = 1;

=======

	print("entered on trig");
	if (other.tag == "horizColl")
	{
		xdir = 1;
<<<<<<< HEAD
>>>>>>> origin/master
=======
		print("xdir changed");
		print(xdir);
>>>>>>> parent of 2cb3f7d... put together v3
	}
	else if (other.tag == "horizColl2")
	{
		xdir = -1;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/master
=======
		print("xdir changed");
		print(xdir);
>>>>>>> parent of 2cb3f7d... put together v3
	}
	
}

