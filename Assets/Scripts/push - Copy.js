#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerStay(other : Collider)
{
	if (other.tag == "p1pushbox" && Input.GetKey("s"))
	{
		GameObject.FindGameObjectWithTag("player1").transform.GetComponent(playerControls).ispushed = true;
		
	}
	else if (other.tag == "p1pushboxleft" && Input.GetKey("s"))
	{
		GameObject.FindGameObjectWithTag("player1").transform.GetComponent(playerControls).ispushed2 = true;
		
	}
}