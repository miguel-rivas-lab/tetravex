var main =
{
	addNode : function(obj)
	{
		var attr=[], node, text;
		obj.parentNode = obj.parentNode || document;
		obj.txt = obj.txt || "";
		obj.attributes = obj.attributes || "";

		node = document.createElement(obj.type);
		text = document.createTextNode(obj.txt);
		node.appendChild(text);

		if( obj.attributes != "" )
		{
			for ( var k in obj.attributes )
			{
				attr = document.createAttribute(obj.attributes[ k ].attribute);
				attr.value = obj.attributes[ k ].value;
				node.setAttributeNode(attr);
			};
		}

		obj.parentNode.appendChild(node);
		return node;
	},

	sortingArray : function(array)
	{
		var tmpArray = array;
		var newArray = [];

		while( tmpArray.length != 0 )
		{
			var number = Math.floor((Math.random() * (tmpArray.length - 1) ));
			var newElement = tmpArray.splice(number, 1)[0];
			newArray.push(newElement);
		}
		return newArray
	},
	
	convertToArray : function(array)
	{
		var newMatrix = [];
		for(var k = 0; k < array.length; k++)
		{
			var newArray = [];
			newArray.push(
				array[k].topValue.toString(),
				array[k].rightValue.toString(),
				array[k].bottomValue.toString(),
				array[k].leftValue.toString()
			);

			newMatrix.push(newArray);
		}
		return newMatrix;
	},

	generateNumbers : function(limit)
	{
		
		var array = [];
		for(var k = 0; k < limit*limit; k++ )
		{
			var number = Math.floor((Math.random() * 10));
			array.push(number, number);
		}
		var swap = array.pop();
		array.unshift(swap);
		return array;
	},

	creatingPuzzle : function(rows, columns, levelNumber)
	{
		var result = {},
		tmpRows = [],
		tmpColumns = [];

		for(var k = 0; k < rows.length; k += 2 )
		{
			tmpRows.push({ leftValue: rows[ k ], rightValue: rows[ k + 1 ] });
		}

		for(var newPieceOrder = 0, alternate = 0, kount = 0; alternate < levelNumber; newPieceOrder += levelNumber, kount+=2 )
		{
			if(newPieceOrder > levelNumber*levelNumber - 1)
			{
				alternate++;
				newPieceOrder = alternate;
			}

			if( alternate != ( levelNumber ) )
			{
				tmpColumns[ newPieceOrder ] = { topValue: columns[ kount ], bottomValue: columns[ kount + 1 ] };
			}
		}

		/* patch :: the last element of the columns its missing */
		tmpColumns[ levelNumber*levelNumber ] = { topValue: columns[ levelNumber*levelNumber*2 - 2 ], bottomValue: columns[ levelNumber*levelNumber*2 - 1 ] };

		tmpColumns.pop();

		for ( var k in tmpRows )
		{
			result = _.merge(tmpRows, tmpColumns);
		};

		return result;
	},

	generatePieces : function(world, path, array)
	{
		var actualPiece;

		for( var k = 1; k <= world*world; k++ )
		{
			/* -- creating piece -- */
			actualPiece = main.addNode(
			{
				parentNode: path,
				type: "a",
				attributes: [
					{ attribute: "href", value: "javascript:void(0)" },
					{ attribute: "class", value: "piece_" + k + " piece" }
				]
			});

			/* -- creating parts of the piece -- */

			main.addNode(
			{
				parentNode: actualPiece,
				type: "div",
				txt: array[ (world) ][ (k-1) ][0],
				attributes: [
					{ attribute: "class", value: "top" }
				]
			});
			main.addNode(
			{
				parentNode: actualPiece,
				type: "div",
				txt: array[ (world) ][ (k-1) ][1],
				attributes: [
					{ attribute: "class", value: "right" }
				]
			});
			main.addNode(
			{
				parentNode: actualPiece,
				type: "div",
				txt: array[ (world) ][ (k-1) ][2],
				attributes: [
					{ attribute: "class", value: "bottom" }
				]
			});
			main.addNode(
			{
				parentNode: actualPiece,
				type: "div",
				txt: array[ (world) ][ (k-1) ][3],
				attributes: [
					{ attribute: "class", value: "left" }
				]
			});
		}
		return 0;
	},

	generateLevels : function(begin, end)
	{
		var actualWorld, puzzleSolved, puzzleUnsolved, medal, btn;
		for( var levelNumber = begin; levelNumber <= end; levelNumber++ )
		{
			if( typeof localStorage.getItem( "saveData9" ) !== 'string' )
			{
				winCounter.push(levelNumber);
			}
			

			/* -- creating buttons for link to a level -- */
			btn = main.addNode(
			{
				parentNode: document.getElementById("chooseLevel"),
				type: "button",
				attributes: [
					{ attribute: "id", value: "btn_" + levelNumber },
					{ attribute: "type", value: "button" }
				]
			});

			main.addNode(
			{
				parentNode: btn,
				type: "canvas",
				attributes: [
					{ attribute: "width", value: "150px" },
					{ attribute: "height", value: "150px" }
				]
			});

			main.addNode(
			{
				parentNode: btn,
				type: "p",
				txt: "level " + levelNumber
			});

			makeShape({
				id: "#btn_" + levelNumber + " canvas",
				p1Radius: 48,
				p1Sides: levelNumber,
				colors: medalColors[levelNumber]
			});

			/* -- creating the base of the level -- */
			actualWorld = main.addNode(
			{
				parentNode: document.getElementById("levels"),
				type: "section",
				attributes: [
					{ attribute: "id", value: "world_" + levelNumber },
					{ attribute: "class", value: "adaptative ND" }
				]
			});

			main.addNode(
			{
				parentNode: actualWorld,
				type: "h1",
				txt: "Level " + levelNumber,
				attributes: [
					{ attribute: "class", value: "levelName" }
				]
			});

			medal = main.addNode(
			{
				parentNode: actualWorld,
				type: "div",
				attributes: [
					{ attribute: "class", value: "medal" }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "canvas",
				attributes: [
					{ attribute: "class", value: "body" },
					{ attribute: "width", value: "300px" },
					{ attribute: "height", value: "300px" }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "canvas",
				attributes: [
					{ attribute: "class", value: "ribbon" },
					{ attribute: "width", value: "420px" },
					{ attribute: "height", value: "95px" }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "span",
				attributes: [
					{ attribute: "class", value: "number " + "n" + levelNumber }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "span",
				txt: "Congratulations",
				attributes: [
					{ attribute: "class", value: "winText " + medalColors[levelNumber].winText }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "span",
				attributes: [
					{ attribute: "class", value: "regla a" }
				]
			});

			main.addNode(
			{
				parentNode: medal,
				type: "span",
				attributes: [
					{ attribute: "class", value: "regla b" }
				]
			});

			makeWheel({
				id: "#world_" + levelNumber + " .medal .body",
				p1Radius: 48,
				p1Sides: 45,
				p2Radius: 44,
				circDistances: 35,
				circRadius: 3,
				nCirc: 12,
				innerCircDiam: 70,
				colors: medalColors[levelNumber]
			});

			makeRibbon({
				id: "#world_" + levelNumber + " .medal .ribbon",
				colors: medalColors[levelNumber]
			});

			/* -- creating rows and columns -- */
			var rows = main.generateNumbers(levelNumber);
			var columns = main.generateNumbers(levelNumber);
			
			//console.log(columns);

			/* -- mixing rows and columns -- */
			matrixSolved[ levelNumber ] = main.creatingPuzzle(rows, columns, levelNumber);
			matrixSolved[ levelNumber ] = main.convertToArray(matrixSolved[ levelNumber ]);
			var matrixTmp = matrixSolved[ levelNumber ].slice(0);
			matrixUnsolved[ levelNumber ] = main.sortingArray(matrixTmp);

			/* -- creating the base of the puzzle unsolved -- */
			puzzleUnsolved = main.addNode(
			{
				parentNode: actualWorld,
				type: "div",
				attributes: [
					{ attribute: "class", value: "puzzle pUnsolved" }
				]
			});
			main.generatePieces(levelNumber, puzzleUnsolved, matrixUnsolved);
			
			/* -- creating the base of the puzzle Solved -- */
			puzzleSolved = main.addNode(
			{
				parentNode: actualWorld,
				type: "div",
				attributes: [
					{ attribute: "class", value: "puzzle pSolved" }
				]
			});
			main.generatePieces(levelNumber, puzzleSolved, matrixSolved);
			
			matrixSolved[ levelNumber ] = _.flattenDeep(matrixSolved[ levelNumber ]).join("");

			/* -- creating arrow -- */
			main.addNode(
			{
				parentNode: actualWorld,
				type: "div",
				attributes: [
					{ attribute: "class", value: "arrow back" }
				]
			});

			if (levelNumber % 4 == 0)
			{
				ornaments.deco1(levelNumber);
			}
			else if (levelNumber % 3 == 0)
			{
				ornaments.deco2(levelNumber);
			}
			else
			{
				ornaments.deco3(levelNumber);
			}
		}

		return 0;
	},

	giveMeYourClickAndBeAwesome : function(query, fn)
	{
		var clickMe = document.querySelectorAll(query);
		for(var k = 0; k < clickMe.length; k++)
		{
			clickMe.item(k).onclick = fn;
		}
	},

	checkWonLevels : function(start, end)
	{
		for(var levelNumber = start; levelNumber <= end; levelNumber++)
		{
			if( winCounter.indexOf(levelNumber) == -1 ){ main.winLevel(levelNumber); }
		}
	},

	checkBk : function(query)
	{
		for(var actualColor = 0; actualColor < 10; actualColor++)
		{

			( function( color )
			{
				var setBk = function(element, index, array)
				{
					element.style.backgroundColor = bkColors[color][0];
					element.style.color = bkColors[color][1];
				};

				var numberArray = Sizzle(query + " div:not(.pUnsolved):contains(" + color + ")");

				numberArray.forEach(setBk);
				
			})( actualColor );
		}
	},

	winLevel : function(actualLevel)
	{
		var tmpIndex = _.findIndex(winCounter, function(number) { return number == actualLevel; }),
			actualWorld = document.getElementById("world_" + actualLevel).getElementsByClassName("puzzle"),
			medal = document.getElementById("world_" + actualLevel).getElementsByClassName("medal")[0],
			hiddenArrow = document.getElementById("chooseLevel").getElementsByClassName("right")[0],

			body = medal.getElementsByClassName("body")[0],
			regla_A = medal.getElementsByClassName("regla a")[0],
			regla_B = medal.getElementsByClassName("regla b")[0],
			number_txt = medal.getElementsByClassName("number")[0],
			ribbon = medal.getElementsByClassName("ribbon")[0],
			ribbon_txt = medal.getElementsByClassName("winText")[0];

		_.pull(winCounter, winCounter[tmpIndex]);
		Velocity(actualWorld, { opacity: 0 }, {display: "none"}, 500);

		Velocity(body, { rotateZ: 300, scale: .2 }, 0);
		Velocity(regla_A, { opacity: 0, rotateZ: 45, scale: .8, translateX: -14, translateY: -96 }, 0);
		Velocity(regla_B, { opacity: 0, rotateZ: -45, scale: .8, translateX: -14, translateY: -96 }, 0);
		Velocity(ribbon, { opacity: 0, scale: .8, translateY: 10 }, 0);
		Velocity(ribbon_txt, { opacity: 0, translateY: 10 }, 0);
		Velocity(number_txt, { opacity: 0, scale: .2 }, 0);

		Velocity(body, { opacity: 1, rotateZ: 385, scale: .8 }, 700, function()
		{
			Velocity(regla_A, { opacity: 1, rotateZ: 45, scale: .8, translateX: 0, translateY: 0 }, 200);
			Velocity(regla_B, { opacity: 1, rotateZ: -45, scale: .8, translateX: 0, translateY: 0 }, 200, function()
			{
				Velocity(ribbon, { opacity: 1, scale: .8, translateY: 0 }, 500);
				Velocity(ribbon_txt, { opacity: 1, translateY: 0 }, 500, function()
				{
					Velocity(number_txt, { opacity: 1, scale: 1 }, 500);
					medal.className += " stopAnimation";
				});
			});
		});

		localStorage.setItem("saveData9", winCounter);

		if(winCounter != 0)
		{
			console.log("you beat level " + actualLevel);
			console.log("you need to beat the level " + winCounter + " to win the whole game");
		}
		else
		{
			console.log("you win the whole game");
			Velocity(hiddenArrow, "fadeIn", 0);
		}

	}
};