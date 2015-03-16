
var ydir : float = 1.0;
var velocity : Vector3=Vector3.zero;


function Update()
{

	//transform.position.y+=ydir;
	/*
	velocity = Vector3(0, ydir, 0);
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(velocity*Time.deltaTime);
	*/
	transform.Translate(0,0,ydir);
	
}


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "verticleCollider")
	{
		ydir = -1;
	}
	else if (other.tag == "verticleCollider2")
	{
		ydir = 1;

	}
	
}

