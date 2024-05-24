$(document).ready(function() {
    let jsonFilePath = "datas/healthy_living_tips.json";
    let tipIndex = 0;
    let healthTips; 

    $.getJSON(jsonFilePath, function(data) {
        healthTips = data.healthy_living_tips;
        showTip(healthTips[tipIndex]); 
    });

    $("#nextButton").on("click", function() {
        tipIndex++;
        if (tipIndex >= healthTips.length) {
            tipIndex = 0;
        }
        showTip(healthTips[tipIndex]); 
    });

    $("#prevButton").on("click", function() {
        tipIndex--; // İndeksi bir azalt
        if (tipIndex < 0) {
            tipIndex = healthTips.length - 1;
        }
        showTip(healthTips[tipIndex]);
    });

    function showTip(tip) {
        $("#tip-title").text(tip.title);
        $("#tip-description").text(tip.description);
    }
});
