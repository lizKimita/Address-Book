//Business logic
function Contact (first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//User Interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var contactFirstName = $("input#new-first-name").val();
    var contactLastName = $("input#new-last-name").val();

    var addedContact = new Contact(contactFirstName, contactLastName);

    $("ul#contacts").append("<li><span class ='contact'>" + addedContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(addedContact.firstName);
      $(".first-name").text(addedContact.firstName);
      $(".last-name").text(addedContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
