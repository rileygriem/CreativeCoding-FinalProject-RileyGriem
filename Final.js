//Riley Griem
//Final Project

let sceneNumber;

function setup () {
	createCanvas(800,600);
	background(255);
	sceneNumber = 0;

	sceneDraw("1-Front-Door-1", "Welcome to the party! Click to enter.");
}

function draw () {
	//unnecessary
}

//THANK YOU ALEX

// sceneDraw("", "");
function mousePressed(){
	if (sceneNumber == 0) {
		sceneNumber = 4;
		sceneDraw("5-drink-shot", "Your good friend offers you a shot. A random boy offers you a mixed drink. Do you take the shot or the mystery drink?");
	} else if (sceneNumber == 4) {
		if (mouseX < width/2) {
			sceneNumber = 5;
			sceneDraw("6-Dizzy", "Something was in that drink... Go home girl!!");
		} else {
			sceneNumber = 6;
			sceneDraw("7-Thumbs-Up", "Good choice! You feel fine and are having a great time.");
			}
	} else if (sceneNumber == 6) {
		sceneNumber = 7;
		sceneDraw("8-worried", "A girl comes up to you asking to help find her friend. She seems pretty distressed. Do you help her?");
	} else if (sceneNumber == 7) {
			if (mouseX < width/2) {
			sceneNumber = 9;
			sceneDraw("10-backyard", "You go around the house to look for her friend, Abby. She doesn't appear to be anywhere outside.");
			} else {
				sceneNumber = 8;
				sceneDraw("9-Busted","As the night goes on, people get more rowdy. After a few hours, the cops show up and shut down the party.");
			}
	} else if (sceneNumber == 9) {
		sceneNumber = 10;
		sceneDraw("11-Wait-Search","Do you wait until the morning or ask around the party?");
	} else if (sceneNumber == 10) {
			if (mouseX < width/2) {
			sceneNumber = 12;
			sceneDraw("13-Recent-Calls", "You wake up the next morning and try to call Abby. There is still no sign of her.");
			} else {
				sceneNumber = 11;
				sceneDraw("12-Success", "Someone says a creepy boy named Josh was trying to get Abby out of the house. You confront him and bring her back inside. Good job!");
				}
	} else if (sceneNumber == 12) {
		sceneNumber = 13;
		sceneDraw("14-Friend-Cops", "Do you call the cops or do you call friends from the party?");
	} else if (sceneNumber == 13) {
			if (mouseX < width/2) {
			sceneNumber = 15;
			sceneDraw("16-Friend-Thinking-New","You call friends from the party. One person saw Abby walking out of the house with a creepy boy named Josh.");
			} else {
				sceneNumber = 14;
				sceneDraw("15-Rescue","You call the cops and they trace her back to Josh's house. You've saved Abby. Good job!");
				}
	} else if (sceneNumber == 15) {
		sceneNumber = 16;
		sceneDraw("17-Call-Drive","You know that Abby is in trouble. Do you call the cops or go to Josh's house?");
	} else if (sceneNumber == 16) {
			if (mouseX < width/2) {
			sceneNumber = 17;
			sceneDraw("18-Rescue","You call the cops and they trace her back to Josh's house. You've saved Abby. Good job!");
			} else {
				sceneNumber = 18;
				sceneDraw("19-Failure","Josh's door is left wide open nobody is home. You should have watched out for her when you could have!");
				}
	}
	
}

//THANK YOU ALEX
function textDraw (instructions) {
	noStroke();
	fill(0);
	rect(25,35,750, 30);
	
	noStroke();
	fill(255);
	textAlign(CENTER,CENTER);
	textSize(12);
	text(instructions, width/2, 50);

	let words = textWidth(instructions);

}

//THANK YOU ALEX
function sceneDraw (graphics, instructions)  {
	loadImage(graphics+'.jpg', img => { //for demonstrative purposes, was +graphics+.jpg
    	image(img, 0, 0);

    	textDraw (instructions);
 	});
}

/*var enterParty = confirm("Welcome to the party! Click OK to enter.");

if(enterParty == true) {
	var greetChoice = sceneDraw("thumbsup", "You walk into the party and take off your coat. Do you greet your friends or put down your coat?");

		if(greetChoice == "put down my coat") {
			textDraw("Your coat is safe. Let's go say hi to your friends!");

			var drinkChoice = textDraw("Everyone is having a fun time. You watch your good friend pour you a shot. A random boy offers you a mixed drink. Do you take the shot or the drink?");

				if(drinkChoice == "drink") {
					textDraw("Your drink was spiked and you feel super dizzy. This party is definitely not your scene and you leave with a friend. Better luck next time!");
				}
				else {
					textDraw("Good choice! You feel fine and are having a great time.");

					var helpChoice = textDraw("A girl comes up to you asking to help find her friend. She seems pretty distressed. Do you help her?");

						if(helpChoice == "yes") {
							textDraw("You go around the house to look for her friend. She doesn't appear to be inside.");

							var searchChoice = textDraw("Do you ask around the party or wait until the morning?");

								if (searchChoice == "wait until the morning") {
									textDraw("You wake up the next morning and try to call the missing girl. There is still no sign of her.");

									var callChoice = textDraw("Do you call the cops or do you call friends from the party?");

										if (callChoice == "cops") {
											textDraw("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
										}

										else {
											textDraw("You call friends from the party. One person says that they saw the girl walking out of the house with a creepy boy named Josh.");

											var actionChoice = textDraw("You know that the friend might be in trouble. Do you call the cops or go to Josh's house?");

												if (actionChoice == "call the cops") {
													textDraw("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
												}

												else{
													textDraw("You go to Josh's house to try to find the friend yourself. The door is left wide open and there is no sign of anyone home. You call the cops and report the friend missing, but she is never seen again. Should have watched out for her when you could have!");
												}
										}
								}

								else{
									textDraw("You ask around the party and one kid says that he saw her last in the living room with a creepy boy. You run over to see the boy trying to usher the friend out of the house. You confront him and guide the friend back inside. The boy leaves and the friend is safe. Good job!");
								}
						}
						else {
							textDraw("You keep having a good time with your friends. As the night goes on, people get more and more rowdy. After a few hours, the cops show up and shut down the party. You go home sad. Better luck next time!");
						}
				}
		}


		else {
			var drinkChoice = textDraw("Everyone is having a fun time. You watch your good friend pour you a shot. A random boy offers you a mixed drink. Do you take the shot or the drink?");

				if(drinkChoice == "drink") {
					textDraw("Your drink was spiked and you feel super dizzy. This party is definitely not your scene and you leave with a friend. Better luck next time!");
				}
				else {
					textDraw("Good choice! You feel fine and are having a great time.");

					var helpChoice = textDraw("A girl comes up to you asking to help find her friend. She seems pretty distressed. Do you help her?");

						if(helpChoice == "yes") {
							textDraw("You go around the house to look for her friend. She doesn't appear to be inside.");

							var searchChoice = textDraw("Do you ask around the party or wait until the morning?");

								if (searchChoice == "wait until the morning") {
									textDraw("You wake up the next morning and try to call the missing girl. There is still no sign of her.");

									var callChoice = textDraw("Do you call the cops or do you call friends from the party?");

										if (callChoice == "cops") {
											textDraw("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
										}

										else {
											textDraw("You call friends from the party. One person says that they saw the girl walking out of the house with a creepy boy named Josh.");

											var actionChoice = textDraw("You know that the friend might be in trouble. Do you call the cops or go to Josh's house?");

												if (actionChoice == "call the cops") {
													textDraw("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
												}

												else{
													textDraw("You go to Josh's house to try to find the friend yourself. The door is left wide open and there is no sign of anyone home. You call the cops and report the friend missing, but she is never seen again. Should have watched out for her when you could have!");
												}
										}
								}

								else{
									textDraw("You ask around the party and one kid says that he saw her last in the living room with a creepy boy. You run over to see the boy trying to usher the friend out of the house. You confront him and guide the friend back inside. The boy leaves and the friend is safe. Good job!");
								}
						}
						else {
							textDraw("You keep having a good time with your friends. As the night goes on, people get more and more rowdy. After a few hours, the cops show up and shut down the party. You go home sad. Better luck next time!");
						}
				}
		}


}
else {
	textDraw("You don't go into the party. Lame.")
}*/


//code structure sampled from https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097