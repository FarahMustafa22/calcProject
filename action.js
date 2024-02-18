function set(op) {

    document.getElementById("display").value += op;

}

function degreesToRadians() {
    var deg = document.getElementById("display").value;
    document.getElementById("display").value = deg * (Math.PI / 180);
}

function radiansToDegrees() {
    var rad = document.getElementById("display").value;
    document.getElementById("display").value = (rad * 180) / Math.PI;
}

function hund()
{
    var num = document.getElementById("display").value;
    document.getElementById("display").value = num /100
}


function factorial() 
{
    var fac = document.getElementById("display").value;
    for(let i = fac-1 ; i>=1 ; i--)
    {
        fac*=i
        
    }
    document.getElementById("display").value= fac;

}

function ce() {

    var elem = document.getElementById("display").value;
    var length = elem.length;
    length--;
    var a = elem.substr(0, length);

    
    document.getElementById("display").value = a;
}

function ac()
{
    document.getElementById("display").value=''
}

function asine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));
    
}

function calculateWithIn() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = Math.log(tempStore)
}

function cosine() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));

}

function fLog() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = Math.log10(tempStore);

}

function convertToExponential() {
    var tempStore = document.getElementById("display").value * Math.E;

    document.getElementById("display").value =tempStore;
}

function tangent() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}


function sqrRoot() {
    var tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function expp()
{
    var tempStore1 = document.getElementById("display").value;
    document.getElementById("display").value = tempStore1+'E'
}

function power()
{
    var tempStore1 = document.getElementById("display").value;
     document.getElementById("display").value = tempStore1 +"**";

}

function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}

