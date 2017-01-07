$(function() {

  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitSuccess: function($form, event) {
      event.preventDefault();

      var name = $("input#name").val(),
        email = $("input#email").val(),
        message = $("textarea#message").val(),
        firstName = name;

        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }

        $.ajax({
          url: "//formspree.io/site@falci.me",
          type: "POST",
          dataType: "json",
          data: {
            name: name,
            email: email,
            message: message
          },
          cache: false,
          success: function() {
            $('#success')
              .html("<div class='alert alert-success'>");

            $('#success > .alert-success')
              .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append( "</button>");

            $('#success > .alert-success')
              .append("<strong>" + successMessage + "</strong>");

            $('#success > .alert-success')
              .append('</div>');

            $('#contactForm').trigger("reset");
          },
          error: function() {

            $('#success')
              .html("<div class='alert alert-danger'>");

            $('#success > .alert-danger')
              .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append( "</button>");

            $('#success > .alert-danger')
              .append(errorMessage);

            $('#success > .alert-danger').append('</div>');

            $('#contactForm').trigger("reset");
          },
        })
      },
      filter: function() {
        return $(this).is(":visible");
      },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
     $('#success').html('');
  });
