var container = document.createElement('div');
//container.setAttribute('class','container p-5');
container.classList.add('container','p-5');

var row = document.createElement('div');
row.setAttribute('class','row');

var col = document.createElement('div');
col.setAttribute('class','col-sm-8 offset-3');

var div1 = document.createElement('div');
div1.setAttribute('class','row');

var div2 = document.createElement('div');
div2.setAttribute('class','col-sm-8');

var date = document.createElement('input');
date.setAttribute('type','date');
date.setAttribute('class','form-control');
date.setAttribute('id','dateValue');
div2.append(date);

var div3 = document.createElement('div');
div3.setAttribute('class','col-sm-3');

var div4 = document.createElement('div');
div4.setAttribute('class','col-sm-12');

var button = document.createElement('button');
button.type='button';
button.classList.add('btn','btn-primary');
button.addEventListener('click',displayData);
button.innerHTML = "Display Data";
div3.append(button);

div1.append(div2,div3,div4);
col.append(div1);
row.append(col);
container.append(row);
document.body.append(container);

function displayData(){
    var arr = [];
    arr = date.value.split('-');
    var p = document.createElement('p');
    var span = document.createElement('span');
    div4.innerHTML = '';
    var date1 = new Date();
    var userDate = new Date(arr[0],parseInt(arr[1])-1,arr[2]);
    console.log(date1 +','+userDate);
    var timeDiff = Math.ceil(date1.getTime() - userDate.getTime() ); 
    
    var yrDiff = date1.getFullYear() - userDate.getFullYear();
    var monthDiff = (yrDiff*12) + (date1.getMonth() - userDate.getMonth());
    var secsDiff = Math.floor(timeDiff/1000);
    var minsDiff = Math.floor(timeDiff/(60*1000));
    var hrsDiff = Math.floor(timeDiff/(60*60*1000)) ;
    var daysDiff = Math.floor(hrsDiff/24);
    
    span.innerHTML = 'Given input date is '+ userDate ;
    p.innerHTML = 'year '+ yrDiff +'<br>' +  'month '+ monthDiff + '<br>' +  'day '+ daysDiff+'<br>'+'hour '+hrsDiff+'<br>'+'minute '+minsDiff+'<br>'+'second '+secsDiff+'<br>'+'milli second '+timeDiff;
    p.style.textAlign = 'center';
    div4.append(span,p);
}


