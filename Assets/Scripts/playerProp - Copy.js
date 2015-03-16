#pragma strict
var projectileFire : GameObject;
var projectileFireLeft : Transform;
var projectileFireRight : Transform;
var fireBallSound : AudioClip;
var fireMat : Material;
var normMat : Material;
var fireOn = false;


var soundRate : float = 0.0;
var soundDelay : float = 0.0;
function PlaySound(soundName,soundDelay : float)
{
	if (!audio.isPlaying && Time.time > soundRate)
	{
		soundRate = Time.time + soundDelay;

		audio.Play();
	}
}

function Start () {
}
function Update () {
	var pc = GetComponent(playerControls);
	var fireBall : GameObject;
	if (Input.GetButtonDown("Fire1")   && pc.moveRight && fireOn)
	{
		fireBall = Instantiate(projectileFire,projectileFireRight.position,
		transform.rotation);
		fireBall.rigidbody.AddForce(90,0,0);
		PlaySound(fireBallSound,0);

	}
	if (Input.GetButtonDown("Fire1")  && !pc.moveRight && fireOn)
	{
		fireBall = Instantiate(projectileFire,projectileFireLeft.position,
		transform.rotation);
		fireBall.rigidbody.AddForce(-90,0,0);
		PlaySound(fireBallSound,0);
		
	}	
}

function setFire(on : boolean)
{
	fireOn = on;
	if (on)
		transform.renderer.material = fireMat;
	else
		transform.renderer.material = normMat;
}


