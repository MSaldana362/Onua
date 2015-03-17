#pragma strict
var isHelp : boolean = false;
var isRules : boolean = false;
function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space))
	{
		isRules = !isRules;
		isHelp = false;
	}
	if(Input.GetKeyDown(KeyCode.H))
	{
		isHelp = !isHelp;
		isRules = false;
	}
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		isHelp = false;
		isRules = false;
	}
}
function OnGUI ()
{
	if(!isHelp && !isRules)
	{
		GUI.BeginGroup(Rect(Screen.width/2-50,Screen.height/2-50,100,200));
		GUI.Box(Rect(0,0,100,185),"Main menu");
		if (GUI.Button(Rect(10,30,80,30),"Start Game"))
		{
			Application.LoadLevel("Together v4ever do not touch only copy");
		}
		if (GUI.Button(Rect(10,70,80,30),"Rules"))
		{
			isRules = true;
		}
		if (GUI.Button(Rect(10,110,80,30),"Help"))
		{
			isHelp = true;
		}
		if (GUI.Button(Rect(10,150,80,30),"Quit Game"))
		{
			Application.Quit();
		}
		GUI.EndGroup();
	}
	else if (isRules && !isHelp)
	{
		GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,400,400));
		GUI.Box(Rect(0,0,200,200),"Rules Menu");
		GUI.Label(Rect(0,20,200,21),"The goal of the game is to outlive");
		GUI.Label(Rect(0,40,202,21),"the other player. Who ever loses");
		GUI.Label(Rect(0,60,200,21),"all there lives first, loses.");
		GUI.Label(Rect(0,80,200,21),"The player must stay within the ");
		GUI.Label(Rect(0,100,200,21),"boundaries or they will begin");
		GUI.Label(Rect(0,120,200,21),"to lose hp or wrose.");	
		GUI.EndGroup();
	}
	else if(isHelp && !isRules)
	{
		GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,400,400));
		GUI.Box(Rect(0,0,200,200),"Help Menu");
		GUI.Label(Rect(0,20,110,21),"Player 1 Controls : ");
		GUI.Label(Rect(0,40,200,21),"   Movement : Up, Left, Right Arrows");
		GUI.Label(Rect(0,60,200,21),"   Push : Down Arrow");
		
		GUI.Label(Rect(0,80,110,21),"Player 2 Controls : ");
		GUI.Label(Rect(0,100,200,21),"   Movement : W, A, D Keys");
		GUI.Label(Rect(0,120,200,21),"   Push : S Key");
		GUI.Label(Rect(0,140,200,21),"   Escape = Menu Exit");
		GUI.EndGroup();
	}
}