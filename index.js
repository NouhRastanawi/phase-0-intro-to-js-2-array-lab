const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const new_array = cats.slice(0);
    new_array.push(name);
    return new_array;
 }
 function prependCat(name) {
    const new_array = cats.slice(0);
    new_array.unshift(name);
    return new_array; 
 }
 function removeLastCat() {
    const new_array = cats.slice(0);
    new_array.pop();
    return new_array;
 }
 function removeFirstCat() {
    const new_array = cats.slice(0);
    new_array.shift();
    return new_array;
 }