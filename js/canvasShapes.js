function makeWheel(o){
	/* ----------- Vars ----------- */
	var nm = document.querySelectorAll(o.id)[0],
		w = nm.width, /* canvas weight */
		h = nm.height, /* canvas height */
		mx = (h < w) ? h : w, /* valor maximo a considerar */
		per = (mx / 100), /* percent */
		p = nm.getContext('2d'),
		ang = Math.PI / 180,
		sd = o.p1Sides, /* poligon sides */
		x = nm.width / 2,
		y = nm.height / 2,
		/* ----------- Poligon 1 ----------- */
		r = o.p1Radius * per,
		px = new Array(),
		py = new Array(),
		/* ----------- Poligon 2 ----------- */
		r2 = o.p2Radius * per,
		px2 = new Array(),
		py2 = new Array(),
		/* ----------- Inner Circle ----------- */
		r3 = o.circDistances * per, /* distance of circles */
		r4 = o.circRadius * per, /* radius of circle */
		sd2 = o.nCirc, /* number of circles */
		px3 = new Array(),
		py3 = new Array(),
		/* ----------- Inner Circle ----------- */
		r5 = o.innerCircDiam;
		

	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px[ kk ] = Math.cos( ( ( 360 / sd ) * kk ) * ang ) * r;
		py[ kk ] = Math.sin( ( ( 360 / sd ) * kk ) * -ang ) * r;
	}

	/* --------------------- Second Shape --------------------- */

	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px2[ kk ] = Math.cos( ( ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * ang ) * r2;
		py2[ kk ] = Math.sin( ( ( 360 / ( sd * 2 ) ) + ( ( 360 / sd ) * kk ) ) * -ang ) * r2;
	}

	/* --------------------- Circles --------------------- */
	for( kk = 0; kk <= ( sd2 - 1 ); kk++ )
	{
		px3[ kk ] = Math.cos( ( ( 360 / sd2 ) * kk ) * ang ) * r3;
		py3[ kk ] = Math.sin( ( ( 360 / sd2 ) * kk ) * -ang ) * r3;
	}

	p.beginPath();
	p.moveTo( x + px[ 0 ] , y + py[ 0 ] );
	p.lineTo( x + px2[ 0 ] , y + py2[ 0 ] );

	for( kk = 1; kk <= ( sd - 1 ); kk++ )
	{
		p.lineTo( x + px[ kk ] , y + py[ kk ] );
		p.lineTo( x + px2[ kk ] , y + py2[ kk ] );
	}

	p.lineTo( x + px[ 0 ] , y + py[ 0 ] );
	p.lineTo( x + px[ 1 ] , y + py[ 1 ] );

	p.fillStyle = o.colors.wheel;
	p.fill();
	p.strokeStyle = o.colors.stroke;
	p.lineWidth = 7;
	p.stroke();
	p.closePath();

	p.beginPath();
	p.arc(x, y, r5, 0, Math.PI * 2, true);
	p.fillStyle = o.colors.innerCircle;
	p.fill();
	p.closePath();

	for( kk = 0; kk <= ( sd2 - 1 ); kk++ )
	{
		p.beginPath();
		p.arc(x + px3[ kk ] , y + py3[ kk ] , r4, 0, Math.PI * 2, true);
		p.fillStyle = o.colors.innerCircles;
		p.fill();
		p.closePath();
	}
}

function makeRibbon(o){
	/* ----------- Vars ----------- */
	var nm = document.querySelectorAll(o.id)[0],
		p = nm.getContext('2d');

	p.beginPath();

	p.moveTo( 0 , 15 );
	p.lineTo( 20 , 45 );
	p.lineTo( 0 , 80 );
	p.lineTo( 70 , 80 );
	p.lineTo( 70 , 15 );
	p.fillStyle = o.colors.ribbonShadow;
	p.fill();
	p.closePath();

	p.moveTo( 420 , 15 );
	p.lineTo( 400 , 45 );
	p.lineTo( 420 , 80 );
	p.lineTo( 350 , 80 );
	p.lineTo( 350 , 15 );
	p.fillStyle = o.colors.ribbonShadow;
	p.fill();
	p.closePath();

	p.beginPath();
	p.moveTo( 50 , 0 );
	p.lineTo( 50 , 70 );
	p.lineTo( 370 , 70 );
	p.lineTo( 370 , 0 );
	p.fillStyle = o.colors.ribbon;
	p.fill();
	p.closePath();

	/*p.font = "30px Amatic SC";
	p.textAlign = "center";
	p.fillStyle = o.colors.winText;
	p.fillText("Congratulations", nm.width/2, 55);*/
}

function makeShape(o){
	/* ----------- Vars ----------- */
	var nm = document.querySelectorAll(o.id)[0],
		w = nm.width, /* canvas weight */
		h = nm.height, /* canvas height */
		mx = (h < w) ? h : w, /* valor maximo a considerar */
		per = (mx / 100), /* percent */
		p = nm.getContext('2d'),
		ang = Math.PI / 180,
		sd = o.p1Sides, /* poligon sides */
		x = nm.width / 2,
		y = nm.height / 2,
		/* ----------- Poligon 1 ----------- */
		r = o.p1Radius * per,
		px = new Array(),
		py = new Array(),
		/* ----------- Poligon 2 ----------- */
		r2 = o.p2Radius * per,
		px2 = new Array(),
		py2 = new Array(),
		/* ----------- Inner Circle ----------- */
		r3 = o.circDistances * per, /* distance of circles */
		r4 = o.circRadius * per, /* radius of circle */
		sd2 = o.nCirc, /* number of circles */
		px3 = new Array(),
		py3 = new Array(),
		/* ----------- Inner Circle ----------- */
		r5 = o.innerCircDiam;
		

	for( kk = 0; kk <= ( sd - 1 ); kk++ )
	{
		px[ kk ] = Math.cos( ( ( 360 / sd ) * kk ) * ang ) * r;
		py[ kk ] = Math.sin( ( ( 360 / sd ) * kk ) * -ang ) * r;
	}


	p.beginPath();
	p.moveTo( x + px[ 0 ] , y + py[ 0 ] );

	for( kk = 1; kk <= ( sd - 1 ); kk++ )
	{
		p.lineTo( x + px[ kk ] , y + py[ kk ] );
	}

	p.lineTo( x + px[ 0 ] , y + py[ 0 ] );
	/*p.lineTo( x + px[ 1 ] , y + py[ 1 ] );*/

	p.strokeStyle = o.colors.stroke;
	p.lineWidth = 2;
	p.setLineDash([5, 5]);
	p.stroke();
	p.closePath();
}