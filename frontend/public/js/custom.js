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
    $('#logit').parsley().on('field:validated', function () {
        var ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
    })
        .on('form:submit', function () {
            // there is no error
            setShowSubmitErrorMsg(false);
            // don't go anywhere            
            // collect the data
            var data = $("#logit :input").serializeArray();
            var name = data[0].value;
            var kilo = data[1].value;
            var stone = data[2].value;            
            // clean up data
            name = toUpperCaseFirst(name);
            // set a timestamp
            var timestamp = moment().format('YYYY-MM-DD HH:mm');
            // send it to ELK
            console.log(name, kilo, stone, timestamp);
            var _url;
            window.appConfig ? _url = window.appConfig.ELK_URL : _url = 'localhost:9200';
            console.log(_url);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://" + _url + "/pondus/weights",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "processData": false,
                "data": "{ \"name\" : \"" + name + "\", \"kilogram\": \"" + kilo + "\", \"stones\": \"" + stone + "\",\"created_at\":\"" + timestamp + "\"}"
            };
            $.ajax(settings)
                .done(function (response) {
                    console.log(response);
                });  
            return false;          
        });
});