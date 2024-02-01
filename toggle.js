$('p').css('color','red');
let count=0;



$('.container').on('click',function(ev){

    console.log("Div clicked");

    if(ev){
        count++;
        console.log(count);
    }
    if(count%2!=0){
        $('.super').css('background-color','black');
        $('.black').css('display','none');
        $('.white').css('display','inline-block');
    }else{
        $('.super').css('background-color','white');
        $('.white').css('display','none');
        $('.black').css('display','inline-block');
    }
});