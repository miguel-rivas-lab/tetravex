var ornaments =
{
	deco1: function(actualLevel)
	{
		var world = document.getElementById("world_" + actualLevel);
		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil caramel ornament a" }
				]
			}
		);

		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil redOrange ornament b" }
				]
			}
		);

		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil darkViolet ornament c" }
				]
			}
		);
	},

	deco2: function(actualLevel)
	{
		var world = document.getElementById("world_" + actualLevel);
		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil red ornament d" }
				]
			}
		);

		main.addNode(
			{
				parentNode: world,
				type: "img",
				attributes: [
					{ attribute: "class", value: "ornament e" },
					{ attribute: "src", value: "img/cartabon.png" }
				]
			}
		);
	},

	deco3: function(actualLevel)
	{
		var world = document.getElementById("world_" + actualLevel);
		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil lightBlue ornament f" }
				]
			}
		);

		main.addNode(
			{
				parentNode: world,
				type: "span",
				attributes: [
					{ attribute: "class", value: "pencil mint ornament g" }
				]
			}
		);
	}
};