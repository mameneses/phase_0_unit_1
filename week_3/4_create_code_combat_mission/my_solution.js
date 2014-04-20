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
/*
The strategy of using code combat to come up with workable options worked 
in the sense that it allowed for some creativity which, for me, is usually 
when I am able to solidify information as I translate it into my own thought 
process. While leavings it opens ended can be great to spark creativity, it 
was difficult to find a starting off point. I found it helpful to take a 
look back at the code combat website for inspiration as well as review other 
peoples projects and asking for help from peers. I was having trouble with 
refactoring and attempting to make the code better and was able to gain insight 
from others work. I enjoyed the creativity of being able to build a mission but 
the refactoring can be a bit confusing or tedious when it is left so open ended. 
*/ 
