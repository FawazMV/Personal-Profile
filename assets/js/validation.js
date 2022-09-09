$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            Name:{
                minlength:4,
                maxlength:15
            },
            Sender:{
                email:true,

            }
        }
    })
})

