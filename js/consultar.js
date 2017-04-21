$(document).ready(function() {
    // alert(document.location.toString().indexOf('?'));

    var $_GET = {};
    if (document.location.toString().indexOf('?') !== -1) {
        var query = document.location
            .toString()
            // get the query string
            .replace(/^.*?\?/, '')
            // and remove any existing hash string (thanks, @vrijdenker)
            .replace(/#.*$/, '')
            .split('&');

        // alert(query.toString());
        // alert(query.length);

        for (var i = 0, l = query.length; i < l; i++) {
            var aux = decodeURIComponent(query[i]).split('=');
            $_GET[aux[0]] = aux[1];
        }
    }
    //get the 'index' query parameter
    // alert($_GET['id']);
    var id = $_GET['id'];

    $.ajax({
        type: "GET",
        url: "http://localhost:36759/Aluno.svc/ConsultarAluno",
        // cache: false,
        // contentType: "application/json",
        data: {
            id: id
                // "Alunos": [{ "Matricula": 4, "Nome": "edi", "P1": 3.00, "P2": 9.00 }]
        },
        dataType: "json",
        success: function(data) {
            // alert("ajax deu certo");
            // console.log(data.ConsultarAlunoResult.Alunos);


            var matricula = data.ConsultarAlunoResult.Alunos[0].Matricula;
            var nome = data.ConsultarAlunoResult.Alunos[0].Nome;
            var p1 = data.ConsultarAlunoResult.Alunos[0].P1;
            var p2 = data.ConsultarAlunoResult.Alunos[0].P2;


            $("#matricula").val(matricula);
            $("#nome").val(nome);
            $("#p1").val(p1);
            $("#p2").val(p2);

        }
    });

});