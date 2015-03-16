
var ydir : float;

function Update()
{

	//transform.position.y+=ydir;
	/*
	velocity = Vector3(0, ydir, 0);
	var controller : CharacterController = GetComponent(CharacterController);
	controller.Move(velocity*Time.deltaTime);
	*/
	transform.Translate(ydir,0,0);
	
}


function OnTriggerEnter(other : Collider)
{
	if (other.tag == "verticleCollider")
	{
		ydir = 0.1;
	}
	else if (other.tag == "verticleCollider2")
	{
		ydir = -0.1;

	}
	
}

