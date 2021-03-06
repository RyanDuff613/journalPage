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
  for (var index = 0; index < string.length; index++){
    if (string.charAt(index) === 'a' || string.charAt(index) === 'e' || string.charAt(index) === 'i' || string.charAt(index) === 'o' || string.charAt(index) === 'u')
      totalVowels += 1;
  }
  return totalVowels;
}

Entry.prototype.totalConsonants = function() {
  var totalVowels = 0;
  var string = this.userText.replace(/\W/g, '').toLowerCase();
  for (var index = 0; index < string.length; index++){
    if (string.charAt(index) === 'a' || string.charAt(index) === 'e' || string.charAt(index) === 'i' || string.charAt(index) === 'o' || string.charAt(index) === 'u')
      totalVowels += 1;
  }
  return string.length - totalVowels;
}

Entry.prototype.teaser = function(){
  var firstPeriod = this.userText.indexOf('.');
  var teaser = '';
  if (this.userText.slice(0, firstPeriod + 1).split(' ').length > 8){
    teaser = this.userText.split(' ').slice(0,8).join(' ') + "...";
  } else {
    teaser = this.userText.slice(0, firstPeriod+1);
  }
  return teaser;
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
      $('#teaser').text(entry.teaser());

  });
});