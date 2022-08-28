// 1
console.log(hello);                                   
var hello = 'world';                                 
// prediction: ReferenceERROR
// Answer:Uncaught ReferenceError: hello is not defined


// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// prediction: magnet
// Answer: same asnwer

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// prediction: 'super cool'
// Answer: same answer


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// prediction: 'chicken' / half-chicken
// ANSWER: same answer


// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// prediction: mean is not define, food is not define, but could be if we are using it from the pervious line of code that declared food;
// ANSWER: food is not define, mean is not define, food is not define.

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// prediction: genre is not define, rewind() 'rock','r&b' , "disco"
// ANSWER: same answer

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// prediction: san jose, seattle, burbank, san jose
// ANSWER: the same 

// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// prediction: TYpeERROR 