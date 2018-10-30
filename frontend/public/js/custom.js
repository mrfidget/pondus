function setShowSubmitErrorMsg(flag) {
    if (flag) {
        $("#submitError").show();
    } else {
        $("#submitError").hide();
    }

}
function validateInput(formData) {
    if (typeof formData != 'undefined') {
        if(formData != ''){
            return true;
        }
    }else{        
        return false;
    }
};
function toUpperCaseFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

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
        // perform some validation
        var isValidForm;
        // data.forEach(element => {
        //     isValidForm = isValidForm + validateInput(element);
        // });
        if(isValidForm){
            console.log('valid');
        }else{
            setShowSubmitErrorMsg(true);  
        }
        name = toUpperCaseFirst(name);
        //var cleanData = data.forEach(validateInput);
        // set a timestamp

        // send it to ELK
        console.log(name,kilo,stone);
        //dologit
    });
});