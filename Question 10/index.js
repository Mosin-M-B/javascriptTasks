var input = document.getElementById('data');
var arr = JSON.parse(localStorage.getItem('email')) || [];
var result=document.getElementById('result');

showdata();
var c=0;
function change() {
    if(input.value!='')
    {
        
            arr.push(input.value);
            localStorage.setItem('email',JSON.stringify(arr));
            input.value='';
            showdata();
    }else{
        alert("Pleas Enter The data")
    }
}
function showdata()
{
    if(arr.length==0)
{
    result.innerHTML='<h1>database empty</h1>'
}
    else{
        result.innerHTML='';
    arr.map((ele)=>{
        var p=document.createElement('p');
        var hr = document.createElement('hr');
        p.innerText=ele;
        hr
        result.appendChild(p);
    })
    }
}