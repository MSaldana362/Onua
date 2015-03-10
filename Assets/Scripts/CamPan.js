#pragma strict

//moveDirec 0 = top
//moveDirec 1 = bot
//moveDirec 2 = left
//moveDirec 3 = right
var speed : float = 5.0;
var begin : boolean = true;
var tempMovePos : Vector3 = Vector3(0,200,-89.4);
var moveDirec = 0;
function Start () {
	
}

function Update () {
	var step = speed * Time.deltaTime;
	var camTemp : Vector3 = Vector3(transform.position.x,transform.position.y,-89.4);
    if (begin)
    {
    	transform.position = Vector3.MoveTowards(camTemp,tempMovePos,step);
    }
    if(transform.position.y+80 >= 200 || transform.position.y-80 <= -200 || transform.position.x+100 >= 250 || transform.position.x-100 <= -250)
    {
    	moveDirec = drawMoveVal();
    }
	if(moveDirec == 0)
	{
		tempMovePos = Vector3(0,200,-89.4);
	}
	else if(moveDirec == 1)
	{
		tempMovePos = Vector3(0,-200,-89.4);
	}
	else if(moveDirec == 2)
	{	
		tempMovePos = Vector3(-250,0,-89.4);
	}
	else if(moveDirec == 3)
	{
		tempMovePos = Vector3(250,0,-89.4);
	}
	transform.position = Vector3.MoveTowards(camTemp,tempMovePos,step);
}
function drawMoveVal ()
{
	var ran = Random.Range(0,4);
	return ran;
}





