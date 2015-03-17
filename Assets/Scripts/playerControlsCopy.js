
var velocity : Vector3 = Vector3.zero;
var deceleration : float = 40;
var gravity : float = 80.0;
var moveRight = true;
var running = false;
var movingTime : float;
var jumpSound : AudioClip;
var jumpheight : float = 80.0;
var airvelocity : float = 0.0;
var soundRate : float = 0.0;
var soundDelay : float = 0.0;
var ispushed : boolean = false;
var ispushed2 : boolean = false;
function PlaySound(soundName,soundDelay : float)
{
	if (!audio.isPlaying && Time.time > soundRate)
	{
		soundRate = Time.time + soundDelay;
		audio.clip = soundName;
		audio.Play();
	}
}

function Update()
{
 	transform.position.z=0;
	var aniPlay = GetComponent("aniSprite");
	var controller : CharacterController = 
	GetComponent(CharacterController);
	
	if (controller.isGrounded)
	{
	
		if (Input.GetKey("a") && !Input.GetKey("d"))
		{
			velocity = Vector3 (-40,0,0);
		}
		else if (Input.GetKey("d")&& !Input.GetKey("a"))
		{
			velocity = Vector3 (40,0,0);
		}
		else if(ispushed)
		{
			velocity = Vector3 (70,70,0);
			ispushed = false;
		}
		else if(ispushed2)
		{
			velocity = Vector3 (-70,70,0);
			ispushed2 = false;
		}
		else
		{
			velocity = Vector3.zero;
		}
		if (velocity.x > 0)
		{
			moveRight = true;
			movingTime += Time.deltaTime;
			if (movingTime > 1.0)
				running = true;
			else
				running = false;
		}
		else if (velocity.x < 0)
		{
			movingTime += Time.deltaTime;
			moveRight = false;
			if (movingTime > 1.0)
				running = true;
			else
				running = false;			
		}
		else
		{
			movingTime = 0;
		}
		
		if (Input.GetKey("w"))
		{
			
			velocity.y += jumpheight;
			airvelocity = velocity.x;
			aniPlay.aniSprite(16,16,5,7,7,12,!moveRight);   //jump 
		}		
		else
		{
			if (Input.GetKey("d") && !Input.GetKey("a"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,false);   //run 		
				else
					aniPlay.aniSprite(16,16,0,1,10,12,false);   //walk 	
			}
			else if (Input.GetKey("a")&& !Input.GetKey("d"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,true);   //run 
				else
					aniPlay.aniSprite(16,16,0,1,10,12,true);   //walk		
			}
			else
			{	
					aniPlay.aniSprite(16,16,0,0,16,12,!moveRight);   //neutral 	
			}
		 }
	}
	else 
	{
		if (Input.GetKey("a") && velocity.x > airvelocity - 20 && velocity.x < airvelocity + 10)
		{
		
			velocity += Vector3 (-2,0,0);
			aniPlay.aniSprite(16,16,5,13,2,12,!moveRight);   //jump 
		}
		else if (Input.GetKey("d") && velocity.x > airvelocity - 20 && velocity.x < airvelocity + 20)
		{
				velocity += Vector3 (2,0,0);
				aniPlay.aniSprite(16,16,5,13,2,12,!moveRight);   //jump 
		}
		if (velocity.x > 0)
		{
			moveRight = true;
		}
		else if (velocity.x < 0)
		{
			moveRight = false;
		}
	}
	ispushed = false;
	ispushed2 = false;
	//push
			 if (Input.GetKey("s")&& !Input.GetKey("d")&& !Input.GetKey("a"))
			{
			
			//aniPlay.aniSprite(16,16,5,7,7,12,!moveRight);   //push 	
			aniPlay.aniSprite(16,16,5,13,4,12,!moveRight);	
			}	
		
	
	
	
	
	if (velocity.x >1)
	velocity.x  -= deceleration * Time.deltaTime;
	else if (velocity.x <-1)
	velocity.x  += deceleration * Time.deltaTime;
	velocity.y -= gravity * Time.deltaTime;
	
	var checkPos : Vector3 = transform.position;
	controller.Move(velocity * Time.deltaTime);
	
	if(checkPos.x == transform.position.x)
	{
	velocity.x =-velocity.x;
	}
	if(checkPos.y == transform.position.y)
	velocity.y = -velocity.y;
}
function OnTriggerEnter(other : Collider)
{
	if (other.tag == "horizTopstay")
	{
	this.transform.SetParent(other.transform,true);
	}
	if(other.tag == "horizBotbounce")
	{
	velocity.y *=-1;
	}
	if (other.tag == "verttopstay")
	{
	this.transform.SetParent(other.transform,true);
	}
	if(other.tag == "vertbotbounce")
	{
	velocity.y *=-1;
	}
	
}
function OnTriggerExit(other : Collider)
{
	if (other.tag == "horizTopstay")
	{
	other.transform.DetachChildren();
	
	}
	if (other.tag == "verttopstay")
	{
	other.transform.DetachChildren();
	
	}
}



