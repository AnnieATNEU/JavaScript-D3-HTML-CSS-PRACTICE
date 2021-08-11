var time = 0;

setTimeout(function(){
  console.log('hey ninjas, 3 secs have passed');  
}, 1000);


var timer = setInterval(function(){
    time += 2;
    console.log('hey'+ ' ' + time + ' ' + 'secs have passed');  
  if (time >5){
    clearInterval(timer);
}
 }, 2000);
