(function() {
  emailjs.init("z7Ew3T32ttGGogyiA");
})();

function send() {
  var fromName = document.getElementById("name").value;
  var fromEmail = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  emailjs.send("service_sj0i00s", 'template_xlatq3c', {
    from_name: fromName,
    to_email: 'sudipto@1700@gmail.com',
    message: fromEmail+'  '+message
  }).then(function(response) {
    alert("Email sent successfully!");
  }, function(error) {
    alert("An error has occurred: " + JSON
      .stringify(error));
  });
}