#pragma strict
var hpBarTexture : Texture2D;
var Hp : float = 100;
var MaxHp : float = 100;
var HPBarL : float;
var PercentHP : float;
var gameOver : boolean = false;
function Start () {

}

function Update () {

	PercentHP = Hp/MaxHp;
	HPBarL = PercentHP*200;
	if(Hp <= 0)
	{
		//transform.position = GetComponent(spawnSaveSetup).start.position;
		Hp = MaxHp;
		GetComponent(spawnSaveSetup).Lives--;
	}	
}

function OnGUI()
{
	if(Hp > 0)
		GUI.DrawTexture(Rect(10, 10, HPBarL, 20), hpBarTexture);
		
	//GUI.Box(Rect(10,10,200,20),"" + Hp + " / " + MaxHp);
	GUI.Box(Rect(10,10,200,20),"");
	
	GUI.Label(Rect(10,25,100,20),"Lives : " + GetComponent(spawnSaveSetup).Lives);
	if(gameOver)
	{
		GUI.Box(Rect(1000,1000,100,20),"Game Over");
	}	
}