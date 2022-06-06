function calculateTip() {
    console.clear();
    var bill = parseInt(readBill());
    // if(bill == "")
    //     console.log("bill: empty");
    // else
    //     console.log("bill: " + bill);

    var tip = parseInt(document.querySelector('input[name="n"]:checked').value);
    var radios = document.getElementsByName("n");
    var input_custom = document.getElementById("input-custom");
    if(radios[5].checked)
    {
        tip = parseInt(input_custom.value);
        console.log("custom tip: " + tip + "%");
    }

    var people = parseInt(readPeople());

    var result = bill / people / 100 * tip;
    // console.log("result: " + result);
    var totalEach = bill / people + result;

    var roundedResult = Math.round(100*result)/100;
    var roundedTotalEach = Math.round(100*totalEach)/100;

    if(!Number.isFinite(result)){
        document.getElementById("txt-result1").innerHTML = "";
        document.getElementById("txt-result2").innerHTML = "";
    }
    else{
        document.getElementById("txt-result1").innerHTML = "$" + roundedResult;
        document.getElementById("txt-result2").innerHTML = "$" + roundedTotalEach;
    }
}

function readBill() {
    var bill = document.getElementById("bill");
    var bill_content = bill.value;
    // if(bill_content != ""){
    //     console.log("bill: " + bill_content);
    // }
    // else {
    //     console.log("bill: empty");
    // }
    return bill_content;
}

function readPeople() {
    var people = document.getElementById("people");
    var people_content = people.value;
    // if(people_content != "")
    //     console.log("people: " + people_content);
    // else 
    //     console.log("people: empty");

    return people.value;
}

function readTip() {
    var tip = document.querySelector('input[name="n"]:checked').value;
    // try {
    //     console.log(tip);
    // } catch (error) {
    //     console.log("tip: empty");
    // }
    return tip;
}

function zeroPeople() {
    var people = parseInt(readPeople());
    var text = document.getElementById("zero-error");
    var element = document.getElementById("display-people");
    if(people == 0) {
        console.log("reading zero people");
        if(!element.classList.contains("border-red"))
            element.classList.add("border-red");

        if(text.classList.contains("hide"))
        {
            text.classList.remove("hide");
            text.classList.add("show");
        }
    }
    else {
        console.log("reading more than zero people");
        if(element.classList.contains("border-red"))
            element.classList.remove("border-red"); 

        if(text.classList.contains("show")){
            text.classList.remove("show");
            text.classList.add("hide");
        }
    }
}

function reset() {
    var bill = document.getElementById("bill");
    var people = document.getElementById("people");
    var custom = document.getElementById("input-custom");
    resetCustom();

    bill.value = ''; people.value = ''; custom.value = '';
    var radios = document.getElementsByName("n");
    for (let index = 0; index < radios.length; index++) {
        radios[index].checked = false;
    }
    document.getElementById("txt-result1").innerHTML = "";
    document.getElementById("txt-result2").innerHTML = "";
    console.clear();
}

function showCustom() {
    var custom_button = document.getElementById("custom-button");
    var custom_input = document.getElementById("custom-input");

    custom_button.classList.add("hide");
    custom_input.classList.remove("hide");

    setTimeout(function() { focusCustom(); greenlight()}, 0);
}

function focusCustom() {
    var input = document.getElementById("input-custom");
    input.focus();
}

function resetCustom() {
    var custom_button = document.getElementById("custom-button");
    var custom_input = document.getElementById("custom-input");

    custom_button.classList.remove("hide");
    custom_input.classList.add("hide");
}

function greenlight() {
    // console.log("green");
    var display_bill = document.getElementById("display-bill");
    var input_bill = document.getElementById("bill");
    if(input_bill === document.activeElement) {
        console.log("input-bill is active");
        display_bill.classList.add("border-green");
    }
    else {
        display_bill.classList.remove("border-green");
    }

    var btn_custom = document.getElementById("custom-input");
    var input_custom = document.getElementById("input-custom");
    if(input_custom === document.activeElement) {
        checkCustom();
        console.log("input-custom is active");
        btn_custom.classList.add("border-green");
    }
    else {
        btn_custom.classList.remove("border-green");
    }

    var display_people = document.getElementById("display-people");
    var input_people = document.getElementById("people");
    if(input_people === document.activeElement) {
        console.log("input-people is active");
        display_people.classList.add("border-green");
    }
    else {
        display_people.classList.remove("border-green");
    }
}

function checkCustom() {
    var btn_custom = document.getElementById("custom-input");
    var input_custom = document.getElementById("input-custom");
    var radios = document.getElementsByName("n");
    for (let index = 0; index < radios.length; index++) {
        if(index != (radios.length-1))
            radios[index].checked = false;
    }
    var input_radio = radios[5];
    input_radio.checked = true;
}

document.onclick = function() {
    console.log("clicked!");
    greenlight();
}