$(document).ready(function() {
    // Enable/disable registration date field based on checkbox
    $('#student').change(function() {
        if (this.checked) {
            $('#registrationDate').prop('disabled', false);
            // Add datepicker to registration date field
            $('#registrationDate').datepicker({
                changeMonth: true,
                changeYear: true,
                showOtherMonths: true,
                selectOtherMonths: true,
                dateFormat: 'mm/dd/yy',
                yearRange: "-10:+0"
            });
        } else {
            $('#registrationDate').prop('disabled', true);
            // Remove datepicker from registration date field
            $('#registrationDate').datepicker('destroy');
        }
    });

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


    $('#membership-form').validate({
        rules: {
            password: {
                required: true,
                minlength: 6,
                strongPassword: true // Özel bir kural eklemek için
            },
            'repeat-password': {
                required: true,
                equalTo: '#password'
            }
        },
        messages: {
            password: {
                required: 'Please enter a password.',
                minlength: 'Password must be at least 6 characters long.'
            },
            'repeat-password': {
                required: 'Please repeat the password.',
                equalTo: 'Passwords do not match.'
            }
        }
    });

    // Özel bir kural eklemek için
    $.validator.addMethod('strongPassword', function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value);
    }, 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');

    // Şimdilik submit butonuna basınca bir şey olmasını istemiyoruz
    $('#membership-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
    });
});
