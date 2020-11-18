$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Wah, Anda sepertinya belum mengisi kolom nama, isi terlebih dahulu ya.",
                    minlength: "Nama Anda harus terdiri dari minimal 2 karakter ya."
                },
                subject: {
                    required: "Wah, Anda sepertinya belum mengisi kolom Subjek, isi terlebih dahulu ya.",
                    minlength: "Subjek Anda harus terdiri dari minimal 4 karakter ya."
                },
                number: {
                    required: "Wah, Anda sepertinya belum mengisi kolom nomor, isi terlebih dahulu ya.",
                    minlength: "Nomor Anda harus terdiri dari minimal 5 karakter ya."
                },
                email: {
                    required: "Anda belum memasukan email, silahkan isi terlebih dahulu ya."
                },
                message: {
                    required: "Wah, Anda sepertinya belum mengisi kolom pesan, isi terlebih dahulu ya.",
                    minlength: "Hanya itu yang Anda tuliskan? Yakin ?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})