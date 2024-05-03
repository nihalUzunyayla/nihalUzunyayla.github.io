$(document).ready(function () {
    $("#birthday").datepicker({ // Instructor accepted this way of selecting the month and year for the DatePicker style.
        changeMonth: true, 
        changeYear: true, 
        dateFormat: 'mm/dd/yy' 
    });
});

$(document).ready(function () {
    var languages = ["ActionScript", "AppleScript", "Asp",
        "JavaScript", "Lisp", "Perl",
        "PHP", "Python", "Java", "C#"];

    $("#language").autocomplete({
        source: languages
    });
});

