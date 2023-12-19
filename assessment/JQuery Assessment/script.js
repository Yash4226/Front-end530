$("#formValidation").validate({
    rules:{
        name:{
            required: true,
            minlength: 2
        },
        email:{
            email:true  
        },
        number:{
            number:true,
            minlength: 10,
            maxlength: 10
        },
        dob:{
            required:true
        },
        city:{
            required:true
        },
        state:{
            required:true
        },
        edu:{
            required:true
        },
        check:{
            required:true
        },
        pass:{
            required:true
        }
    },
    messages: {
        name:{
            required: "Please enter your Name",
            minlength: "name at least 2 character"
        },
        email:"Please enter your Email",
        number:"Please enter your 10digit Number",
        dob:"enter your Birth Date",
        city:"Select City",
        state:"select state",
        edu:"select education",
        check:"check it !!",
        pass:"please enter your password"
    },

    submitHandler: function(form) {
      form.submit();
    }
});