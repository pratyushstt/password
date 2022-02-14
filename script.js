var score=new Array(4);
score=[0,0,0,0];

var word="";

$("#password").focus(function(){
    $(this).keyup(function(e){
        if(e.keyCode>40 || e.keyCode==8){
            word = document.getElementById("password").value;
            // console.log(word);
            var y = word.charAt(word.length-1);
            score=[0,0,0,0];
            for(var i=0; i<word.length; i++){
                y=word.charAt(i);
                // console.log(y);
                if(y>='a' && y<='z')
                    score[0]=score[0]+1;
                else if(y>='A' && y<='B')
                    score[1]=score[1]+1;
                else if(y>='0' && y<='9')
                    score[2]=score[2]+1;
                else
                    score[3]=score[3]+1;                
            };
            checkStrength();
        }
    });
});


function checkStrength() {
    var sum=0;
    for(var i=0;i<4;i++){
        if(score[i]>0)
            sum= sum+1;
    }
    
    if(document.getElementById("password").value.length>7){
        sum= sum+1;
    }
    else if(document.getElementById("password").value.length>1 && sum>1)
        sum=sum-1;
    else{}
    // console.log(score);
    console.log(sum);

    if(sum==5){
        document.getElementById("judgement").className="text-success";
        document.getElementById("judgement").innerText="Secure!";
        document.getElementById("innerP").className="progress-bar bg-success";
        document.getElementById("innerP").ariaValueNow="100";
        document.getElementById("innerP").style.width="100%";
    }
    else {
        if(sum==1){
            document.getElementById("judgement").className="text-danger";
            document.getElementById("judgement").innerText="Very Weak!";
            document.getElementById("innerP").className="progress-bar bg-danger";
            document.getElementById("innerP").ariaValueNow="20";
            document.getElementById("innerP").style.width="20%";
        }
        else if(sum==0){
            document.getElementById("judgement").className="text-danger";
            document.getElementById("judgement").innerText="Enter to check";
            document.getElementById("innerP").className="progress-bar bg-danger";
            document.getElementById("innerP").ariaValueNow="0";
            document.getElementById("innerP").style.width="0%";
        }        
        else if(sum==2){
            document.getElementById("judgement").className="text-warning";
            document.getElementById("judgement").innerText="Weak!";
            document.getElementById("innerP").className="progress-bar bg-warning bg-gradient";
            document.getElementById("innerP").ariaValueNow="45";
            document.getElementById("innerP").style.width="45%";
        }        
        else if(sum==3){
            document.getElementById("judgement").className="text-warning";
            document.getElementById("judgement").innerText="Weak!";
            document.getElementById("innerP").className="progress-bar bg-warning";
            document.getElementById("innerP").ariaValueNow="65";
            document.getElementById("innerP").style.width="65%";
        }
        else{
            document.getElementById("judgement").className="text-success";
            document.getElementById("judgement").innerText="Moderate!";
            document.getElementById("innerP").className="progress-bar bg-success bg-opacity-75";
            document.getElementById("innerP").ariaValueNow="85";
            document.getElementById("innerP").style.width="85%";
        }
    }
}