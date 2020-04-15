function Entry (userName, userText) {
  this.userName = userName;
  this.userText = userText;
}

Entry.prototype.totalWords = function () {
  return this.userText.split(' ').length
}

Entry.prototype.totalVowels = function() {
  var totalVowels = 0;
  var string = this.userText.toLowerCase();
  for (var index = 0; index < this.userText.length; index++){
    if (this.userText.charAt(index) === 'a' || this.userText.charAt(index) === 'e' || this.userText.charAt(index) === 'i' || this.userText.charAt(index) === 'o' || this.userText.charAt(index) === 'u')
      totalVowels += 1;
  }
  return totalVowels;
}

Entry.prototype.totalConsonants = function() {

}

$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();
      var userName = $('#userName').val();
      var userText = $('#userText').val();
      var entry = new Entry(userName, userText);
      $("#wordCount").text(entry.totalWords());
      $('#totalVowels').text(entry.totalVowels());
      $('#totalConsonants').text(entry.totalConsonants());

  });
});