var core = (function()
{
	if( typeof localStorage.getItem( "saveData9" ) === 'string' )
	{
		winCounter = localStorage.getItem( "saveData9" );
	}

	main.generateLevels(3, 10);

	main.giveMeYourClickAndBeAwesome(".arrow.right", function()
	{
		Velocity(this.parentNode, "fadeOut", { duration: 500 });
		Velocity(this.parentNode.nextSibling.nextSibling, "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome(".arrow.left", function()
	{
		Velocity(this.parentNode, "fadeOut", { duration: 500 });
		Velocity(this.parentNode.previousSibling.previousSibling, "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome(".arrow.back", function()
	{
		Velocity(this.parentNode, "fadeOut", { duration: 500 });
		Velocity(Sizzle("#chooseLevel")[0], "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome("#btn_instructions", function()
	{
		Velocity(Sizzle("#home")[0], "fadeOut", { duration: 500 });
		Velocity(Sizzle("#rules")[0], "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome("#btn_chooseLevel", function()
	{
		Velocity(Sizzle("#home")[0], "fadeOut", { duration: 500 });
		Velocity(Sizzle("#chooseLevel")[0], "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome("#rules button", function()
	{
		Velocity(Sizzle("#rules")[0], "fadeOut", { duration: 500 });
		Velocity(Sizzle("#home")[0], "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome("#chooseLevel button", function()
	{
		level = this.getAttribute("id").split("_")[1];
		Velocity(this.parentNode, "fadeOut", { duration: 500 });
		Velocity(Sizzle("#levels")[0], "fadeIn", { duration: 500 });
		Velocity(Sizzle("#world_" + level)[0], "fadeIn", { duration: 500 });
	});

	main.giveMeYourClickAndBeAwesome(".piece", function()
	{
		var pieceNumber = this.getAttribute("class").split(" ")[0].split("_")[1];
		if(saveStatus[level] != pieceNumber ){
			clickStatus[level] = !clickStatus[level];

			if( clickStatus[level] == true )
			{
				saveStatus[level] = pieceNumber;
				this.className += " selected";
			}
			else
			{
				var piece_A = "#world_" + level + " .piece_" + (parseInt(saveStatus[level])),
				piece_B = "#world_" + level + " .piece_" + (parseInt(pieceNumber));

				var newClass = Sizzle(piece_A)[0].className.split(" ");
				newClass.pop();
				newClass = newClass.join(" ");

				Sizzle(piece_A)[0].className = newClass;
				
				for(var k in positions)
				{
					var a = Sizzle(piece_A + " ." + positions[k])[0].innerHTML,
						b = Sizzle(piece_B + " ." + positions[k])[0].innerHTML;

					Sizzle(piece_A + " ." + positions[k])[0].innerHTML
					= matrixUnsolved[ level ][ saveStatus[ level ] - 1 ][k]
					= b;
					
					Sizzle(piece_B + " ." + positions[k])[0].innerHTML
					= matrixUnsolved[ level ][ pieceNumber - 1 ][k]
					= a;
				}
				
				var tmpArrayA = _.uniq( matrixUnsolved[ level ] );
				var unsolved = _.flattenDeep(tmpArrayA).join("");

				if(matrixSolved[ level ] == unsolved)
				{
					main.winLevel(level);
				}

				saveStatus[level] = "NaN";
				main.checkBk("#world_" + level);
			}
		}
	});

	main.checkBk(".pUnsolved");
	main.checkWonLevels(3, 10);
})();