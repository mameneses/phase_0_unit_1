// Group Names in order of project role: 
 
// 1. Bridgette Salcido 
// 2. Matias Meneses
// 3. Jeuel Wilkerson
// 4. RJ Bernaldo 
// 5. RJ Bernaldo/Bridgette Salcido 
 
//--------------------
 
// User stories for Group Project. 
 
// 1. I want a program that can take any number of integers and add them together
 
// 2. I want a program that can take any number of integers and calculate their mean (average). 
 
// 3. I want a program that can take any number of integers and find their median number. 
 
// HINT: The name of these "programs" should be: sum, mean, median. 
 
//---------------------
 
//PseudoCode
 
// 1. make variable named "sum", take array of integers, produce sum of total.
// 2. make variable name "mean", take array of integers, take sum of integers, divide by # of integers
// 3. make variable named "median", IF even -> take array of integers, take # of intergers, divide by 2, call result, use result as position in original array to find median.
// if odd -> take array of integers, take # of intergers, divide by 2, call result, round up on result, use result as position in original array to find median.
 
 
//--------------------
 
//Initial Solution
 
// //1.
 
// array = [];
// var sum = 0;
// for (var i = 0; i < array.length; ++i) {
//     sum += array[i];
// }
 
// //2.
 
// var sum = 0;
// for (var i = 0; i < array.length; ++i) {
//     sum += array[i];
// }
// var mean = sum / array.length
 
// //3. 
 
// if (array.length % 2 == 0 ) var position = (array.length / 2)
// array(position)
// elseif var position = Math.Ceil (array.length / 2)
// array(position)
 
 
//--------------------
 
//Refactored Solution 
 
//1.
function sum(collection) {
	total_sum = 0;
	for (var i = 0; i < collection.length; i++) {
	    total_sum += collection[i];
	}
	return total_sum;
}
 
 
//2.
function mean(collection) {
	total_sum = 0;
	for (var i = 0; i < collection.length; i++) {
	    total_sum += collection[i];
	}
	return total_sum / collection.length;
}
 
//3. 
function median(collection) {
	collection.sort();
	var tempNum = Math.round(collection.length / 2);
	if (collection.length % 2 !== 0) {
		return collection[tempNum - 1];
	} else {
		var average = (collection[tempNum] + collection[tempNum - 1]) / 2;
		return average;
	}
}
 
//--------------------
 
//Group Reflection
 
// What was this experience like?
// Was your group successful in passing the tests?
// What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
 
// The overall experience of this challenge was extremely positive and proved to be an excellent tool for introducing 
// each group member to the process of working in teams to develop functional code. Of particular educational value was 
// working around the requirement that person 1 not share any information about the test code with the rest of the group. 
// Instead, only user stories were shared. This made the exercise challenging right off the bat as we all understood that 
// clarity is very helpful when endeavoring to write code and, yet, certain terms that would allow programmers an obious
// starting place (terms such as "array", "object", "function", "loop", etc.) had to be left out of the user stories 
// entirely in order to simulate a real-life scenario in which a prospective user with no programming experience  might 
// describe the sort of program they are interested in obtaining. Thus, user stories had to be as clear as possible while 
// also maintaining a certain level of vagueness that the second and third members of the team would have to interpret. 
// This exposed our group to a new kind of communication: Instead of communicating each step in our thought processes
// to our partners as in a guided pairing session or a peer pair session, we had to let our work do the communication for 
// us. Naming conventions became important so that as the code was passed on from person to person, they would understand
// what the intention of each variable was. Since no one wants to have to redo a project like this, we each felt a mild 
// amount of pressure to do our parts to the best of our abilities so that the final result would be a working program. 
// That's interesting fuel for thought when considering much larger scale projects that require more than just a handful 
// of people to work on teams where sections of code are assigned to individuals who are solely responsible for said section.
 
// We were not initially successful in passing the tests but, that's not because the logic was incorrect. Rather, where 
// our code actually required functions to be successful, other strategies were used. So, when the code was in the hands
// of the person charged with refactoring, a summary of line errors was communicated to them and they were able to make 
// adjustmets to the code to get it to pass all specs. Once this process took place, our code passed seemlessly. 
 
// This challenged really helped solidify our understanding of JavaScript functions, objects, and basic syntax. In observing
// that our code was not functional with our first attempt, and comtemplating why it worked with our final attempt, we
// each immediately understood that functions were absolutely necessary as they are capable of taking arguments and iterating
// over arrays, etc. Where syntax was concerned, we had a few issues with very simple things and that's probably due to some
// oversight where details proved to be important. The focus was more on getting the mathematical processes written properly.
// So, it was a great lesson in paying attention to details. We also felt that Pseudocode, can be very tedious. Explaining 
// the steps that must take place in writing code in plain English can be difficult at times. But, pseudocode is made 
// slightly less frustrating by taking a test driven approach to development. It takes practice to write the sort of 
// pseudocode that can be implemented into real code effortlessly. We are all looking forward to improving our pseudocodde 
// skills in the weeks to come. 
 
// Our group worked exceptionally well together. We were able to get the bulk of this challenge completed within one day
// because we made ourselves available to one another. We were quick to respond to each other's messages and were all 
// thoughtful and considerate in our responses to one another in equal measure. We look forward to the next group challenge. 
//
//
//
