let formData = {
    email: "",
    message: ""
};

let formStorageKey = "feedback-form-state";

let form = document.querySelector(".feedback-form");

let emailInput = form.elements.email;
let messageTextArea = form.elements.message;



if(localStorage.getItem(formStorageKey)) {
    let storageValue = localStorage.getItem(formStorageKey);
    let storageObj = JSON.parse(storageValue);

    emailInput.value = storageObj.email;
    messageTextArea.value = storageObj.message;

    formData.email = storageObj.email;
    formData.message = storageObj.message;
}

form.addEventListener("input", evt => {
    formData.email = evt.currentTarget.elements.email.value;
    formData.message = evt.currentTarget.elements.message.value;

    let formDataJSON = JSON.stringify(formData);
    localStorage.setItem(formStorageKey, formDataJSON);
});

form.addEventListener("submit", evt => {
    evt.preventDefault();
    let emailField = evt.target.elements.email.value;
    let messageField = evt.target.elements.message.value;
    if(emailField === "" || messageField === ""){
        alert("Fill please all fields");
        return;
    }
    
    console.log(formData);
    //console.log(formData.email);
    //console.log(formData.message);
    localStorage.removeItem(formStorageKey);
    form.reset();
});


        