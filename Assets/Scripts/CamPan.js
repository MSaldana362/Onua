#pragma strict

var MidTop : Transform;
var MidRight : Transform;
var MidLeft : Transform;
var MidBot : Transform;
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
		transform.position = Vector3.MoveTowards(transform.position,MidTop.position,step);
	}
	if(ran == 1)
	{
		transform.position = Vector3.MoveTowards(transform.position,MidRight.position,step);
	}
	if(ran == 2)
	{
		transform.position = Vector3.MoveTowards(transform.position,MidLeft.position,step);
	}
	if(ran == 3)
	{
		transform.position = Vector3.MoveTowards(transform.position,MidBot.position,step);
	}
	
}