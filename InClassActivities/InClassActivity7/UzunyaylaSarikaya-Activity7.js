// Nihal UZUNYAYLA 19050111018
// Edanur SARIKAYA 19050111004

var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("name").focus();
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
};

function displayResults() {
    var average = 0;
    var totalScore = 0;
    var highestScore = 0;
    var topScorer = "";

    for (var i = 0; i < scores.length; i++) {
        totalScore += scores[i];
        average = totalScore / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            topScorer = names[i];
        }
        
    }

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Results</h2>" +
        "<p>Average score = " + average + "</p>" +
        "<p>High score = " + topScorer + " with a score of " + highestScore + "</p>";
}

function displayScores() {
    var table = document.getElementById("scores_table");
    table.innerHTML = "<h2>Scores</h2>" +
        "<tr><th align='left'>Name</th><th align='left'>Score</th></tr>";

    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow();
        var name = row.insertCell();
        var score = row.insertCell();

        name.textContent = names[i];
        score.textContent = scores[i];
    }
}

function addScore() {
    var inputName = $("name");
    var inputScore = $("score");
    var name = inputName.value.trim();
    var score = parseInt(inputScore.value);

    if (score < 0 || score > 100 || name === "" || isNaN(score) ) {
        alert("You must enter a name and a valid score.");
        inputName.value = "";
        inputScore.value = "";
        inputName.focus();
        return;
    }

    names.push(name);
    scores.push(score);
    inputName.value = "";
    inputScore.value = "";
    inputName.focus();
}
