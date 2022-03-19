// Write your solution here!
const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const cats2=[...cats, name]
    return cats2
}
function prependCat(name){
    const cats2=[name, ...cats]
    return cats2
}
function removeLastCat(){
    const cats2=[...cats.slice(0, cats.length-1)]
    return cats2
}
function removeFirstCat(){
    const cats2=[...cats.slice(1)]
    return cats2
}