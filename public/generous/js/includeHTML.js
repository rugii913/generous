// <!-- https://kay0426.tistory.com/27 HTML 파일 분리하는 법 -->

function includeHTML(callback) {
    var z, i, element, file, xhr;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        element = z[i];
        /*search for elements with a certain atrribute:*/
        file = element.getAttribute("include-html");
        //console.log(file);
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    element.removeAttribute("include-html");
                    includeHTML(callback);
                }
            };
            xhr.open("GET", file, true);
            xhr.send();
            /*exit the function:*/
            return;
        }
    }
    setTimeout(function () {
        if (typeof callback === "function") { // check before calling it // commit a9c80a, a31e0d에서 수정된 부분
            callback();
        }
    }, 0);
}
