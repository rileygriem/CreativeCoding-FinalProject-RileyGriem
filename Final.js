//Riley Griem
//Final Project Prototype

var enterParty = confirm("Welcome to the party! Click OK to enter.");

if(enterParty == true) {
	var greetChoice = prompt("You walk into the party and take off your coat. Do you greet your friends or put down your coat?");

		if(greetChoice == "put down my coat") {
			alert("Your coat is safe. Let's go say hi to your friends!");

			var drinkChoice = prompt("Everyone is having a fun time. You watch your good friend pour you a shot. A random boy offers you a mixed drink. Do you take the shot or the drink?");

				if(drinkChoice == "drink") {
					alert("Your drink was spiked and you feel super dizzy. This party is definitely not your scene and you leave with a friend. Better luck next time!");
				}
				else {
					alert("Good choice! You feel fine and are having a great time.");

					var helpChoice = prompt("A girl comes up to you asking to help find her friend. She seems pretty distressed. Do you help her?");

						if(helpChoice == "yes") {
							alert("You go around the house to look for her friend. She doesn't appear to be inside.");

							var searchChoice = prompt("Do you ask around the party or wait until the morning?");

								if (searchChoice == "wait until the morning") {
									alert("You wake up the next morning and try to call the missing girl. There is still no sign of her.");

									var callChoice = prompt("Do you call the cops or do you call friends from the party?");

										if (callChoice == "cops") {
											alert("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
										}

										else {
											alert("You call friends from the party. One person says that they saw the girl walking out of the house with a creepy boy named Josh.");

											var actionChoice = prompt("You know that the friend might be in trouble. Do you call the cops or go to Josh's house?");

												if (actionChoice == "call the cops") {
													alert("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
												}

												else{
													alert("You go to Josh's house to try to find the friend yourself. The door is left wide open and there is no sign of anyone home. You call the cops and report the friend missing, but she is never seen again. Should have watched out for her when you could have!");
												}
										}
								}

								else{
									alert("You ask around the party and one kid says that he saw her last in the living room with a creepy boy. You run over to see the boy trying to usher the friend out of the house. You confront him and guide the friend back inside. The boy leaves and the friend is safe. Good job!");
								}
						}
						else {
							alert("You keep having a good time with your friends. As the night goes on, people get more and more rowdy. After a few hours, the cops show up and shut down the party. You go home sad. Better luck next time!");
						}
				}
		}


		else {
			var drinkChoice = prompt("Everyone is having a fun time. You watch your good friend pour you a shot. A random boy offers you a mixed drink. Do you take the shot or the drink?");

				if(drinkChoice == "drink") {
					alert("Your drink was spiked and you feel super dizzy. This party is definitely not your scene and you leave with a friend. Better luck next time!");
				}
				else {
					alert("Good choice! You feel fine and are having a great time.");

					var helpChoice = prompt("A girl comes up to you asking to help find her friend. She seems pretty distressed. Do you help her?");

						if(helpChoice == "yes") {
							alert("You go around the house to look for her friend. She doesn't appear to be inside.");

							var searchChoice = prompt("Do you ask around the party or wait until the morning?");

								if (searchChoice == "wait until the morning") {
									alert("You wake up the next morning and try to call the missing girl. There is still no sign of her.");

									var callChoice = prompt("Do you call the cops or do you call friends from the party?");

										if (callChoice == "cops") {
											alert("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
										}

										else {
											alert("You call friends from the party. One person says that they saw the girl walking out of the house with a creepy boy named Josh.");

											var actionChoice = prompt("You know that the friend might be in trouble. Do you call the cops or go to Josh's house?");

												if (actionChoice == "call the cops") {
													alert("You call the cops and they investigate the girl's last known location. They trace her back to a boy's house. She seems to still be under the influence as he is walking her out the door. The police intervene and take her home. You've saved the friend, but just by a hair. Good job!");
												}

												else{
													alert("You go to Josh's house to try to find the friend yourself. The door is left wide open and there is no sign of anyone home. You call the cops and report the friend missing, but she is never seen again. Should have watched out for her when you could have!");
												}
										}
								}

								else{
									alert("You ask around the party and one kid says that he saw her last in the living room with a creepy boy. You run over to see the boy trying to usher the friend out of the house. You confront him and guide the friend back inside. The boy leaves and the friend is safe. Good job!");
								}
						}
						else {
							alert("You keep having a good time with your friends. As the night goes on, people get more and more rowdy. After a few hours, the cops show up and shut down the party. You go home sad. Better luck next time!");
						}
				}
		}


}
else {
	alert("You don't go into the party. Lame.")
}


//code structure sampled from https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097