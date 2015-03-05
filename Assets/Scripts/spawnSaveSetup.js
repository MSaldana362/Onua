#pragma strict

var start : Transform;

var soundRate : float = 0.0;
var soundDelay : float = 0.0;

var killTime : float = 5.0;
var Lives : int = 3;
function PlaySound(soundName,soundDelay : float)
{
	if (!audio.isPlaying && Time.time > soundRate)
	{
		soundRate = Time.time + soundDelay;
		audio.clip = soundName;
		audio.Play();
	}
}

function Start () {

}
function Update () {
	if(Lives == 0)
		GetComponent(HpScript).gameOver = true;

}
function OnTriggerEnter(other : Collider)
{
	
	if (other.tag == "killbox")
	{
		
	}
	if (other.tag == "DamageBlock")
	{
		GetComponent(HpScript).Hp-=5;
	}
}
function OnTriggerStay(other : Collider)
{
	if(other.tag == "CamKill")
	{
		print("In");
		GetComponent(HpScript).Hp-=.4;
		
	}
	
}












