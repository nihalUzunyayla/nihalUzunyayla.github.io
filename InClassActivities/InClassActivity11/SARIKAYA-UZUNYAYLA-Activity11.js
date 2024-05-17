$(document).ready(function() {
    $("#nav_list a").on("click", function(event) {
        event.preventDefault();

        let title = $(this).attr("title");
        let path = `json_files/${title}.json`;
        $.getJSON(path, function(response) {
            $("main").empty();

            $.each(response.speakers, function(i, speaker) {
                let $h1 = $("<h1>").text(speaker.title);
                let $img = $("<img>").attr("src", speaker.image).attr("alt", speaker.speaker);
                let $h2 = $("<h2>").html(`${speaker.month}<br>${speaker.speaker}`);
                let $p = $("<p>").text(speaker.text);

                $("main").append($h1, $img, $h2, $p);
            });
        });
    });
});
