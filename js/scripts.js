$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var question1Score = parseInt($("input:radio[name=choice1]:checked").val());

    var question2Score = parseInt($("input:radio[name=choice2]:checked").val());

    var question3Score = parseInt($("input:radio[name=choice3]:checked").val());

    var question4Score = parseInt($("input:radio[name=choice4]:checked").val());

    var question5Score = parseInt($("input:radio[name=choice5]:checked").val());

    var totalScore =  parseInt(question1Score) + parseInt(question2Score) + parseInt(question3Score) + parseInt(question4Score) + parseInt(question5Score);

    if (totalScore >= 11) {
      $("#python").hide();
      $("#cSharp").hide();
      $("#ruby").show();
    }

    else if (totalScore <= 7) {
      $("#cSharp").hide();
      $("#ruby").hide();
      $("#python").show();
    }

    else if (totalScore < 11) {
      $("#ruby").hide();
      $("#python").hide();
      $("#cSharp").show();
    }
  });
});
