
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
	var aniPlay = GetComponent("aniSprite");
	var controller : CharacterController = 
	GetComponent(CharacterController);
	
	if (controller.isGrounded)
	{
	
		if (Input.GetKey("left"))
			{
		velocity = Vector3 (-40,0,0);
			}
		else if (Input.GetKey("right"))
		{
		velocity = Vector3 (40,0,0);
		}
		else
		velocity = Vector3.zero;
		
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
		
		if (Input.GetKey("up"))
		{
			
			velocity.y += jumpheight;
			airvelocity = velocity.x;
			aniPlay.aniSprite(16,16,5,13,4,12,!moveRight);   //jump 
		}		
		else
		{
			if (Input.GetKey("right"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,false);   //run 		
				else
					aniPlay.aniSprite(16,16,0,1,10,12,false);   //walk 	
			}
			else if (Input.GetKey("left"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,true);   //run 
				else
					aniPlay.aniSprite(16,16,0,1,10,12,true);   //walk		
			}
			else if (Input.GetKey("down"))
			{
					aniPlay.aniSprite(16,16,0,8,16,12,!moveRight);   //crouch 	
			}		
			else
			{	
					aniPlay.aniSprite(16,16,0,0,16,12,!moveRight);   //neutral 	
			}
		 }
	}
	else 
	{
	
	
	
		if (Input.GetKey("left") && velocity.x > airvelocity - 20 && velocity.x < airvelocity + 10)
		{
		
			velocity += Vector3 (-2,0,0);
			aniPlay.aniSprite(16,16,5,13,2,12,!moveRight);   //jump 
		}
		else if (Input.GetKey("right") && velocity.x > airvelocity - 20 && velocity.x < airvelocity + 20)
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
	if (velocity.x >0)
	velocity.x  -= deceleration * Time.deltaTime;
	else if (velocity.x <0)
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


