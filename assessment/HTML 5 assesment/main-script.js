//for input
function clr(){
    document.getElementById("result").value="";
}
//for display
function display(val)
{
    document.getElementById("result").value+=val;
}

// for remove single digit back press
function back(){
    var bck=document.getElementById("result").value;
    var res=bck.slice(0,-1);
    document.getElementById("result").value=res;
}

//for calcu
function finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
//for percantage
function pr()
{
    var x=document.getElementById("result").value;
    var y=document.getElementById("result").value;
    var prc=x*y/100;
    document.getElementById("result").value=prc;
}


