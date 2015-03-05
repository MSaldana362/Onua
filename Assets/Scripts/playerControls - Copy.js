
var velocity : Vector3 = Vector3.zero;
var gravity : float = 20.0;
var moveRight = true;
var running = false;
var movingTime : float;
var jumpSound : AudioClip;

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
		if (Input.GetKey("a"))
			{
		velocity = Vector3.left;
			}
		else if (Input.GetKey("d"))
		{
		velocity = Vector3.right;
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
		
		if (Input.GetKey("w"))
		{
			PlaySound(jumpSound,0);
			velocity.y = 8;
			if (moveRight)
			{
				aniPlay.aniSprite(16,16,5,13,4,12,false);   //jump face right
			}
			else
			{
				aniPlay.aniSprite(16,16,5,13,4,12,true);    //jump face left
			}
		}		
		else
		{
			if (Input.GetKey("d"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,false);   //run face right		
				else
					aniPlay.aniSprite(16,16,0,1,10,12,false);   //walk face right		
			}
			else if (Input.GetKey("a"))
			{
				if (running)
					aniPlay.aniSprite(16,16,0,3,16,12,true);   //run face left		
				else
					aniPlay.aniSprite(16,16,0,1,10,12,true);   //walk face left		
					
			}
			else if (Input.GetKey("s"))
			{
				if (moveRight)
					aniPlay.aniSprite(16,16,0,8,16,12,false);   //crouch face right		
				else
					aniPlay.aniSprite(16,16,0,9,16,12,false);   //crouch face left	
			}		
			else
			{
				if (moveRight)
					aniPlay.aniSprite(16,16,0,0,16,12,false);   //neutral face right		
				else
					aniPlay.aniSprite(16,16,0,0,16,12,true);   //neutral face left	
			}
		 }
	}
	if (Input.GetKey("p"))
	Application.LoadLevel("Title Page");

	velocity.y -= gravity * Time.deltaTime;
	controller.Move(velocity * Time.deltaTime);
}


