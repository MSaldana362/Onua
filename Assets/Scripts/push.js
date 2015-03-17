#pragma strict

function Start () {

}

function Update () {

}
function OnTriggerStay(other : Collider)
{
	if (other.tag == "p2pushbox" && Input.GetKey("down") && 
	!GameObject.FindGameObjectWithTag("player1").transform.GetComponent(playerControls).moveRight)
	{
		GameObject.FindGameObjectWithTag("player2").transform.GetComponent(playerControlsCopy).ispushed = true;
		
	}
	if (other.tag == "p2pushboxleft" && Input.GetKey("down") && 
	GameObject.FindGameObjectWithTag("player1").transform.GetComponent(playerControls).moveRight)
	{
		GameObject.FindGameObjectWithTag("player2").transform.GetComponent(playerControlsCopy).ispushed2 = true;
		
	}
}