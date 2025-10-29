function copy(o){
    var copy = Object.create(Object.getPrototypeOf(o));
    var propNames = Object.getOwnPropertyNames(o);

    propNames.forEach(function (name){
        var desc = Object.getOwnPropertyDescriptor(o, name);
        Object.defineProperty(copy, name, desc);
    });


    return copy;
}

var o1= {a:1, b:2};
var o2= copy(o1);

console.log(o1==o2);
console.log(o1===o2);




/*function Y(){
    this.sum=0;
    this.count=0;
}

function X(){
    this.sum=100;
    this.count=200;
}

X.prototype.add = function(array){
    array.forEach(function(entry)
    {
        this.sum += entry;
        ++this.count;
    },obj2); //al cambiar this por la instancia de un objeto que tiene los mismos nombres de variable, modifica dicha instancia.
};

var obj = new X();
var obj2= new Y();
obj.add([2,5,9]);

console.log(obj.sum);
console.log(obj.count);
console.log(obj2.sum);
console.log(obj2.count);
*/