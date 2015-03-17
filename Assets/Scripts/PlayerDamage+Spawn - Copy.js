#pragma strict
var hpBarTexture : Texture2D;
var Hp : float = 100;
var MaxHp : float = 100;
var HPBarL : float;
var PercentHP : float;
var gameOver : boolean = false;
var Lives : int = 3;
var hpLocateX : int;

var spawn : Transform;
function Start () {

}

function Update () {
	PercentHP = Hp/MaxHp;
	HPBarL = PercentHP*200;
	//var tempPos : Vector3 = Vector3 (Camera.main.rect.width/2, Camera.main.rect.height/2,0);
	if(Hp <= 0)
	{
		Hp = MaxHp;
		Lives--;
		transform.position = spawn.position;
	}
	if(Lives == 0)
		gameOver = true;
}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == "DamageBlock")
	{
		Hp-=5;
	}
	if (other.tag == "DeathBox")
	{
		Hp = MaxHp;
		Lives--;
		transform.position = spawn.position;
	}
}

function OnTriggerStay(other : Collider)
{
	if(other.tag == "KillBox")
	{
		//print("In");
		Hp-=.4;	
	}
}

function OnGUI()
{
	if(Hp > 0)
		GUI.DrawTexture(Rect(hpLocateX, 10, HPBarL, 20), hpBarTexture);	
	//GUI.Box(Rect(10,10,200,20),"" + Hp + " / " + MaxHp);
	GUI.Box(Rect(hpLocateX,10,200,20),"");
	GUI.Label(Rect(hpLocateX,25,100,20),"Lives : " + Lives);
	if(gameOver)
	{
		GUI.BeginGroup(Rect(Screen.width/2-50,Screen.height/2-50,400,200));
		GUI.Box(Rect(0,0,240,100),"Game Over");
		GUI.Label(Rect(10,20,200,21),"Would you like to play again?");
		if (GUI.Button(Rect(0,70,80,30),"Play Again"))
		{
			Application.LoadLevel("Together v4ever do not touch only copy");
		}
		if (GUI.Button(Rect(80,70,80,30),"Main Menu"))
		{
			Application.LoadLevel("Title");
		}
		if (GUI.Button(Rect(160,70,80,30),"Quit Game"))
		{
			Application.Quit();
		}	
		GUI.EndGroup();
	}	
}