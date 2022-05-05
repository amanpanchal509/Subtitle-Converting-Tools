window.onload = run;

    function run(){
        let OptArea =  document.getElementById("OptArea");
        // OptArea.innerHTML = JSON.stringify(Subtitles[0].content);
        OptArea.innerHTML = "";
        for (let i = 0;i < Subtitles.length;i++)
        {
            let index;
            let timeFrom,timeTo,timeStamps = "";
            let dialogue,pharse;

            index = (i+1);

            pharse = JSON.stringify(Subtitles[i].content);
            pharse = pharse.replace(/"/gm,"");

            pharse = pharse.replace(/(\\r|\\n)/g,"<br> ");;
            console.log(pharse+"\n");
            dialogue = pharse;

            timeFrom = Subtitles[i].from;
            timeTo = Subtitles[i].to;

            function calcTime(time){
                seconds : Math.floor(time);
                milliSeconds : Math.floor((time - seconds)*1000);
                minutes : Math.floor((time/60));
                hours : Math.floor((time/(60*60)));
            }
            // console.log("Hours : "+ calcTime(timeFrom)+" Minuts : "+timeFrom+" Seconds : "+timeFrom+" MilliSeconds : "+timeFrom);

            OptArea.innerHTML += index + "<br/>" +
                                timeStamps + "<br/>" +
                                dialogue + "<br/><br/>";
        }
        // OptArea.innerHTML = JSON.stringify(Subtitles[397]);
        // console.log(OptArea.innerHTML);
    }

    // alert("Js file 1 is running");
