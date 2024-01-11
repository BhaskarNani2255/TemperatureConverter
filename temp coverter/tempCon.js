

document.getElementById("convert-btn").onclick= 

function converter()
{

    let input=0;
    // let result;
    
    input =+document.getElementById("degree-selection").value;
    console.info(input, typeof input);
    
    let type = document.getElementById("type-selection").value;
    console.log(type ,typeof type);
    if( type == "Fahrenheit" )
    {
        
        let Fresult=document.getElementById("result-selection").value=(input * 9/5) + 32+"°F";
        console.info(Fresult,123);
        result=Fresult;
    }
    else if(type == "Celsius")
    {
        let Cresult=document.getElementById("result-selection").value=(input - 32) * 5/9 +"°C"; 
        console.info(Cresult);
        result=Cresult;
    }

}









function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     let time = hh + ":" + mm +  " "/*+ ss */+ " " + session;
     document.getElementById("time").innerText= time;
     let t = setTimeout(function(){ currentTime() }, 1000);

  }
  
currentTime();