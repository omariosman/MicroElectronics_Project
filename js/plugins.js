$(document).ready(function(){
    "use strict";
    // Get value on button click and show alert
    $("#myBtn").click(function(){
        var str = $("#myInput").val();
        //console.log(str);
        $("#input2").val(str);
        for ( var i = 0; i < str.length; i++ )
        {
        if (str.charAt(i) == '`'){
            NOT();
            }
        }
            
        for ( var i = 0; i < str.length; i++ )
        {
        if (str.charAt(i) == '&'){
            AND();
        }
        }

                
        for ( var i = 0; i < str.length; i++ )
        {
        if (str.charAt(i) == '|'){
            OR();
        }
        }

        
        
    function NOT(){
       // var ret = stringToReplace.replace(/\\n/g,'\n');

        var firstLine = "M1 y a vdd vdd PMOS"
        var secondLine = "M2 y a 0 0 NMOS";
        var end = "END";
        
        $("#resultDiv").html(firstLine + "<br>" + secondLine + "<br>" + end);
    }
    });
    
    function AND(){
       // var ret = stringToReplace.replace(/\\n/g,'\n');

        var firstLine = "M1 W1 a 0 0 NMOS "
        var secondLine = "M2 W2 b W1 W1 NMOS ";
        var thirdLine = "M3 W2 b vdd vdd PMOS";
        var fourthLine = "M4 W2 a vdd vdd PMOS ";
        var fifthLine = "M5 y W2 vdd vdd PMOS";
        var sixthLine = "M6 y W2 0 0 NMOS";
        var end = "END";
        
        $("#resultDiv").html(firstLine + "<br>" + secondLine + "<br>" + thirdLine + "<br>" + fourthLine + "<br>" +fifthLine + "<br>" + sixthLine + "<br>" + end);
    }
        function OR(){
       // var ret = stringToReplace.replace(/\\n/g,'\n');

        var firstLine = "M1 W1 a 0 0 NMOS "
        var secondLine = "M2 W1 b 0 0 NMOS ";
        var thirdLine = "M3 W1 a W2 W2 PMOS";
        var fourthLine = "M4 W2 b vdd vdd PMOS ";
        var fifthLine = "M5 y W2 vdd vdd PMOS";
        var sixthLine = "M6 y W2 0 0 NMOS ";
        var end = "END";
        
        $("#resultDiv").html(firstLine + "<br>" + secondLine + "<br>" + thirdLine + "<br>" + fourthLine + "<br>" +fifthLine + "<br>" + sixthLine + "<br>" + end);
    }
    }); 
    


 

 
 
 


 

 
 



  