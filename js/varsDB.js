"use strict";

var matrixSolved = [],
	matrixUnsolved = [],
	clickStatus = [],
	level = 0,
	saveStatus = [],
	positions = ["top","right","bottom","left"],
	winCounter = [];

var bkColors =
{
	0: ["#000000", "#fff"],
	1: ["rgb(255, 0, 82)", "#fff"],
	2: ["#FF7A00", "#fff"],
	3: ["#A8F400", "#000"],
	4: ["#03A4BA", "#fff"],
	5: ["#8B0054", "#fff"],
	6: ["rgb(0, 191, 94)", "#fff"],
	7: ["rgb(125, 64, 11)", "#fff"],
	8: ["#015F6C", "#fff"],
	9: ["#555", "#fff"]
};

var medalColors =
{
	2:
	{
		wheel: "#333",
		stroke: "#29ABE2",
		innerCircle: "#FFCA1C",
		innerCircles: "#00D58F",
		ribbon: "#DB186D",
		ribbonShadow: "#6B012F",
		winText: "white"
	},
	3:
	{
		wheel: "#333",
		stroke: "#29ABE2",
		innerCircle: "#00D58F",
		innerCircles: "#FFCA1C",
		ribbon: "#DB186D",
		ribbonShadow: "#6B012F",
		winText: "white"
	},
	4:
	{
		wheel: "#333",
		stroke: "#FFE700",
		innerCircle: "#00D58F",
		innerCircles: "#FFCA1C",
		ribbon: "#DB186D",
		ribbonShadow: "#6B012F",
		winText: "white"
	},
	5:
	{
		wheel: "#3A2313",
		stroke: "#00D58F",
		innerCircle: "#FFE700",
		innerCircles: "#FFCA1C",
		ribbon: "#DB186D",
		ribbonShadow: "#6B012F",
		winText: "white"
	},
	6:
	{
		wheel: "#3A2313",
		stroke: "#29ABE2",
		innerCircle: "#8CC63F",
		innerCircles: "#FFCA1C",
		ribbon: "#FFCA1C",
		ribbonShadow: "#BF9815",
		winText: "black"
	},
	7:
	{
		wheel: "#3A2313",
		stroke: "#FFE700",
		innerCircle: "#8CC63F",
		innerCircles: "#666",
		ribbon: "#00D58F",
		ribbonShadow: "#0A6648",
		winText: "black"
	},
	8:
	{
		wheel: "#3A2313",
		stroke: "#00D58F",
		innerCircle: "#E7007E",
		innerCircles: "#FFCA1C",
		ribbon: "#12A5CA",
		ribbonShadow: "#0E7C98",
		winText: "black"
	},
	9:
	{
		wheel: "#3A2313",
		stroke: "#FFCA1C",
		innerCircle: "#FFCA1C",
		innerCircles: "#FFCA1C",
		ribbon: "#12A5CA",
		ribbonShadow: "#0E7C98",
		winText: "black"
	},
	10:
	{
		wheel: "#12343A",
		stroke: "#29ABE2",
		innerCircle: "#FFCA1C",
		innerCircles: "#00D58F",
		ribbon: "#D81919",
		ribbonShadow: "#680202",
		winText: "white"
	}
}