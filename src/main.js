function Entry (userName, userText) {
  this.userName = userName;
  this.userText = userText;
}

Entry.prototype.totalWords = function () {
  return this.userText.split(' ').length
}

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
      var userName = $('#userName').val();
      var userText = $('#userText').val();
      var entry = new Entry(userName, userText);
      $("#wordCount").text(entry.totalWords());


  });
});