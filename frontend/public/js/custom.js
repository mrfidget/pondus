function setShowSubmitErrorMsg(flag) {
    if (flag) {
        $("#submitError").show();
    } else {
        $("#submitError").hide();
    }

}
function validateInput(formData) {
    if (typeof formData != 'undefined') {
        //if(formData != ''){
        return true;
        //}
    } else {
        return false;
    }
};
function toUpperCaseFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

$("#dismissSubmitError").click(function () {
    setShowSubmitErrorMsg(false)
})

$(function () {
    $("#logit").submit(function (event) {
        // there is no error
        setShowSubmitErrorMsg(false);
        // don't go anywhere
        event.preventDefault();
        // collect the data
        var data = $("#logit :input").serializeArray();
        var name = data[0].value;
        var kilo = data[1].value;
        var stone = data[2].value;
        //TODO: some validation would be nice this one sucks ass but would do for now as a place holder
        var isValidForm = validateInput(data);
        // data.forEach(element => {
        //     isValidForm = isValidForm + validateInput(element);
        // });
        if (isValidForm) {
            console.log('valid');
            // clean up data
            name = toUpperCaseFirst(name);
            // set a timestamp
            var timestamp = moment().format('YYYY-MM-DD');
            // send it to ELK
            var url;
            //typeof window.appConfig.ELK_URL != 'undefined'  ? url = window.appConfig.ELK_URL : 'test'
            console.log(url);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost:9200/pondus/weights",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "processData": false,
                "data": "{ \"name\" : \"Amaya\", \"kilogram\": \"21.5\", \"stones\": \"3.0\",\"created_at\":\"2018-10-31\"}"
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
            console.log(name, kilo, stone, timestamp);
        } else {
            setShowSubmitErrorMsg(true);
        }



        //dologit
    });
});