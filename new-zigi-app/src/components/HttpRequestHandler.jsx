function HttpRequestHandler() {

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState){
            console.log(request.responseText);
            document.getElementById("JsonCallbackLable").innerText = request.responseText;
        }
    });
    // request.open('GET', 'https://bgu4u.bgu.ac.il/pls/scwp/!app.gate?app=ann&step=998&ex_department=201&ex_degree_level=1&ex_year=2022');
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

    return(
        <label type="text" id="JsonCallbackLable"></label>
    );
}

export default HttpRequestHandler