$(document).ready(function() {

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(risultato) {
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);
      var listaAlbum = risultato.response;
      for(var i=0; i<listaAlbum.length; i++) {
        var albumCorrente = listaAlbum[i];
        var context = {
          poster: albumCorrente.poster,
          title: albumCorrente.title,
          author: albumCorrente.author,
          year: albumCorrente.year,
          genre: albumCorrente.genre
        };

        var risultatoDaAggiungere = template(context);

        $(".cds-container").append(risultatoDaAggiungere);
      }

    },
    error: function() {
      alert("minchiafai");
    }
  });

  $(".filtro-album select").on("input", function() {
    var filtro = $(this).val().toLowerCase();

    $(".cd").each(function() {
      var genereCd = $(this).data("genre").toLowerCase();
      if (filtro === "" || genereCd === filtro) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
