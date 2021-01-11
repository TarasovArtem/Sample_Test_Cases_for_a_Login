let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form) {
            let formData = new formData(form);
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Send');
                    }
                }
            }
            xhr.open('POST', 'mail.phpxhr.send(formData);', true);
            xhr.send(formData);

            form.reset();
        }
    });
}

validateForms('.form', {
    login: {required: true},
    password: {required: true},
    email: {required: true, email: true}
},
'.thanks-popup', 'send goal'
);