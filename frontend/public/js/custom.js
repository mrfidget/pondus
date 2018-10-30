$(function () {
    // build the call to the REST API
    $("#logit").submit(function (event) {
        console.log('I is in');
        // don't go anywhere
        event.preventDefault();
        //collect the data
        var data = $("#logit :input").serializeArray();
        console.log(data[0].value);
//dologit
    });
});