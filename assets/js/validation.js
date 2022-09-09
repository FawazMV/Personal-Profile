$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            w3lName:{
                minlength:4,
                maxlength:12
            },
            w3lSender:{
                email:true,

            }
        }
    })
})
