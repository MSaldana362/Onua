﻿#pragma strict
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
		GUI.Box(Rect(1000,1000,100,20),"Game Over");
	}	
}