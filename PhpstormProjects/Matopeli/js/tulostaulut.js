
    var httpRequest;
    var testUrl = 'php/testi.php';
    var list = [];
    document.onload = makeRequest(testUrl);


    function makeRequest(url) {
        console.log("asd");
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }

        // set a callback function for when the httpRequest completes
        httpRequest.onreadystatechange = alertContents;

        // now do the actual AJAX request
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // the callback
    // this will be run when the request completes (see above)
    function alertContents() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var asd = httpRequest.responseText;
                var strLines = asd.split("*");
                console.log(strLines.length);
                for(var i=0; i<strLines.length-1;i++){
                    console.log(strLines[i]);
                    var obj = JSON.parse(strLines[i]);
                    list.push(obj);
                }
               taytaTaulu(0);
            } else {
              //  alert('There was a problem with the request.');
            }
        }
    }

    var header = document.getElementById("sivunapit");
    var btns = header.getElementsByClassName("btn-dark");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("btn-dark active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

        });
    }


    function taytaTaulu(sivuNro){
        var listai = (sivuNro * 10);
        console.log(sivuNro);
        for(var i = 0; i < 10; i++) {
            if (typeof list[listai + i] === 'undefined') {
                document.getElementById("" + i).innerHTML =
                    "<th scope=\"row\">" + (i + 1 + listai) + "</th>\n" +
                    "<td>" + " " + "</td>\n" +
                    "<td>" + " " + "</td>\n" +
                    "<td>" + " " + "</td>\n";

            } else {
                document.getElementById("" + i).innerHTML =
                    "<th scope=\"row\">" + (i + 1 + listai) + "</th>\n" +
                    "<td>" + list[listai + i].pisteet + "</td>\n" +
                    "<td>" + list[listai + i].nimi + "</td>\n" +
                    "<td>" + list[listai + i].aika + "</td>\n";
            }
        }
    }


    function etsiListasta(){
        var nimi = document.getElementById("hakunimi").value;
        for (var i =0; i<list.length ; i++)
        if(list[i].nimi.includes(nimi)){
            var y = 0;
            for(var x = i - 4; x <= i+5; x++){
                if(x<0){
                    taytaTaulu(0);
                    return false;
                }
            document.getElementById("" + y).innerHTML =
                "<th scope=\"row\">" + (x + 1) + "</th>\n" +
                "<td>" + list[x].pisteet + "</td>\n" +
                "<td>" + list[x].nimi + "</td>\n" +
                "<td>" + list[x].aika + "</td>\n";
                y++;
        }
        return false;
        }
    }




