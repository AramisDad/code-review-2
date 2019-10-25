$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var question1Score = parseInt($("input:radio[name=choice1]:checked").val())
    alert(question1Score)
    var question2Score = parseInt($("input:radio[name=choice2]:checked").val())
    alert(question2Score)
    var question3Score = parseInt($("input:radio[name=choice3]:checked").val())
    alert(question3Score)
    var question4Score = parseInt($("input:radio[name=choice4]:checked").val())
    alert(question4Score)
    var question5Score = parseInt($("input:radio[name=choice5]:checked").val())
    alert(question5Score)

    

    event.preventDefault();
  });
});
