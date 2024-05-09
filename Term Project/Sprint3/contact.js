$(document).ready(function() {
    // Autocomplete for email field
    $('#email').autocomplete({
        minLength: 0, // Minimum length before triggering autocomplete
        source: function(request, response) {
            var term = request.term;
            var atIndex = term.lastIndexOf('@');
            var suggestions = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@outlook.com"];
            var suggestions2 = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
            var result;

            if (atIndex >= 0) {
                var prefix = term.substring(0, atIndex + 1);
                var domainPart = term.substring(atIndex + 1);
                
                result = $.grep(suggestions2, function(suffix) {
                    return suffix.indexOf(domainPart) !== -1;
                });
                
                result = $.map(result, function(suffix) {
                    return prefix + suffix;
                });
            } else {
                result = $.map(suggestions, function(suffix) {
                    return term + suffix;
                });
            }
            
            response(result);
        }
    });

    // Form validation rules
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        // Specify validation error messages
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must be at least 10 characters long"
            }
        }
        
    });

    // Text counter for message field
    $('#message').textcounter({
        max: 150, // Max character count
        countContainer: '#count', // Count container
        alertAt: 130, // Trigger alert at this character count
        alertContainer: '#charCount', // Alert container
        alertClass: 'warning' // CSS class for alert
    });
});
