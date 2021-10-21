$.validator.addMethod(
  "letterswithbasicpunc",
  function (value, element) {
    return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
  },
  "Letters or punctuation only please"
);
$(document).ready(function () {
  $("#mengcoba").validate({
    rules: {
      fname: {
        required: true,
        letterswithbasicpunc: true,
      },
      nrp: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 14,
      },
      jurusan: {
        required: true,
        jurusan: true,
      },
      nohp: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 14,
      },
    },
    messages: {
      fname: {
        required: " Harus diisi yaaa",
        letterswithbasicpunc: " tidak boleh angka",
      },
      nrp: {
        required: " tolong isi nrp dengan benar",
      },
      jurusan: {
        required: " tolong diisi dengan benar",
      },
      nohp: {
        required: " tolong isi no hp dengan benar",
      },
    },
  });
});
