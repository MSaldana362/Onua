#pragma strict

var UpLeft : Transform;
var UpRight : Transform;
var BotLeft : Transform;
var BotRight : Transform;
var speed : float = 5.0;
 var temp : boolean = true;
function Start () {
	
}

function Update () {
	if(temp)
	{
    	var ran = Random.Range(0,4);
    	temp = false;
    }
	var step = speed * Time.deltaTime;
	if(ran == 0)
	{
		transform.position = Vector3.MoveTowards(transform.position,UpLeft.position,step);
	}
	if(ran == 1)
	{
		transform.position = Vector3.MoveTowards(transform.position,UpRight.position,step);
	}
	if(ran == 2)
	{
		transform.position = Vector3.MoveTowards(transform.position,BotLeft.position,step);
	}
	if(ran == 3)
	{
		transform.position = Vector3.MoveTowards(transform.position,BotRight.position,step);
	}
	
}