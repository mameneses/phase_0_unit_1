// I worked by myself on this challenge

// Your mission description:
// Enter the dungeon, kill the guards, and release all of the prisoners. 
// 
// 

// Pseudocode
// 1. Set Tharin starting position = x:5 y:1
// 2. Move Tarin right X2
// 3. Attack nearby enemy
// 4. Move Tarin up X2 
// 5. Break down the door
// 6. Move Tarin down x5
// 7. Break down the door

// Initial Code

/*
this: hero {
	id: Tharin
	spritename: Tharin
	health: 10
	pos: Vector {
  	x:10
  	y:10
	}
	team: humans
}
*/
 var tharin = {
   pos: {
     x: 5,
     y: 1
   }
}

tharin.moveRight ();
tharin.moveRight ();
tharin.attack ();
tharin.moveUp ();
tharin.moveUp ();
tharin.bustDownDoor ();
tharin.moveDown ();
tharin.moveDown ();
tharin.moveDown ();
tharin.moveDown ();
tharin.moveDown ();
tharin.bustDownDoor ();



// Refactored Code

function up(length) {
  for (var i = 0; i < length; i++) {
    tharin.moveUp();
  }
}
function down(length) {
  for (var i = 0; i < length; i++) {
    tharin.moveDown();
  }
}
function right(length) {
  for (var i = 0; i < length; i++) {
    tharin.moveRight();
  }
}

right(2);
tharin.attack();
up(2);
tharin.bustDownDoor();
down(5);
tharin.bustDownDoor();


// Reflection
// 
// 
// 
// 
// 
// 
// 
// 
