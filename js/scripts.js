$(document).ready(function() {
  $("#userName").submit(function(event) {
    const name1Input = $("input#name1").val();

    $(".letter-content").append(name1Input);

    $(".letter").show();

    event.preventDefault();
  })
});