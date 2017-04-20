$(document).ready(function() {

    function getMedia(p1, p2) {

        return ((p1 * 0.4) + (p2 * 0.6));

    };

    function getSituacao(media) {
        if (media >= 7) {
            return "aprovado";
        } else {
            return "reprovado";
        }
    };

    function editar() {
        // alert("vamos editar");
        // var par = $(this).parent().parent();
        // var tdMatricula = par.children("td:nth-child(4)");

        // console.log(tdMatricula.text());
        // $("#matricula").text($(tdMatricula).text());

        // for (var i = 0; i < colunas.length; i++) {
        //     console.log(colunas.length);
        // }

        var $_GET = {};
        if (document.location.toString().indexOf('?') !== -1) {
            var query = document.location
                .toString()
                // get the query string
                .replace(/^.*?\?/, '')
                // and remove any existing hash string (thanks, @vrijdenker)
                .replace(/#.*$/, '')
                .split('&');

            for (var i = 0, l = query.length; i < l; i++) {
                var aux = decodeURIComponent(query[i]).split('=');
                $_GET[aux[0]] = aux[1];
            }
        }
        //get the 'index' query parameter
        alert($_GET['index']);
    }

    $.ajax({
            type: "GET",
            url: "http://localhost:36759/Aluno.svc/ListarAlunos",
            // cache: false,
            // contentType: "application/json",
            dataType: "json",
            success: function(data) {
                // console.log(data);


                for (var i = 0; i < data.ListarAlunosResult.Alunos.length; i++) {

                    var media = getMedia(data.ListarAlunosResult.Alunos[i].P1, data.ListarAlunosResult.Alunos[i].P2);

                    $("tbody")
                        .append($("<tr/>")
                            .append('<td><input type="checkbox" name="todos" value="todos" id="todos"></td>')
                            .append('<td><a href="#">Consultar</a></td>')
                            .append('<td><a href="editar.html?id=' + data.ListarAlunosResult.Alunos[i].Matricula + '" class = btnEditar ">Editar</a></td>')
                            .append("<td name='matricula'>" + data.ListarAlunosResult.Alunos[i].Matricula + "</td>")
                            .append("<td name='nome'>" + data.ListarAlunosResult.Alunos[i].Nome + "</td>")
                            .append("<td name='p1'>" + data.ListarAlunosResult.Alunos[i].P1 + "</td>")
                            .append("<td name='p2'>" + data.ListarAlunosResult.Alunos[i].P2 + "</td>")
                            .append('<td>' + media + '</td>')
                            .append('<td>' + getSituacao(media) + '</td>'));
                }

                $(".btnEditar").bind("click", editar);
            }
        }),

        $("#aprovados").click(function() {
            $.ajax({
                type: "GET",
                url: "http://localhost:36759/Aluno.svc/ListarAlunosAprovados",
                // cache: false,
                // contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    console.log(data.ListarAlunosAprovadosResult.Alunos);

                    $("tbody tr").remove();

                    for (var i = 0; i < data.ListarAlunosAprovadosResult.Alunos.length; i++) {

                        var media = getMedia(data.ListarAlunosAprovadosResult.Alunos[i].P1, data.ListarAlunosAprovadosResult.Alunos[i].P2);

                        $("tbody")
                            .append($("<tr/>")
                                .append('<td><input type="checkbox" name="todos" value="todos" id="todos"></td>')
                                .append('<td><a href = "#">Consultar</a></td>')
                                .append('<td><a href = "#">Editar</a></td>')
                                .append("<td>" + data.ListarAlunosAprovadosResult.Alunos[i].Matricula + "</td>")
                                .append("<td>" + data.ListarAlunosAprovadosResult.Alunos[i].Nome + "</td>")
                                .append("<td>" + data.ListarAlunosAprovadosResult.Alunos[i].P1 + "</td>")
                                .append("<td>" + data.ListarAlunosAprovadosResult.Alunos[i].P2 + "</td>")
                                .append('<td>' + media + '</td>')
                                .append('<td>' + getSituacao(media) + '</td>'));


                    }


                }
            });
        }),

        $("#reprovados").click(function() {
            $.ajax({
                type: "GET",
                url: "http://localhost:36759/Aluno.svc/ListarAlunosReprovados",
                // cache: false,
                // contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    console.log(data.ListarAlunosReprovadosResult.Alunos);

                    $("tbody tr").remove();

                    for (var i = 0; i < data.ListarAlunosReprovadosResult.Alunos.length; i++) {

                        var media = getMedia(data.ListarAlunosReprovadosResult.Alunos[i].P1, data.ListarAlunosReprovadosResult.Alunos[i].P2);

                        $("tbody")
                            .append($("<tr/>")
                                .append('<td><input type="checkbox" name="todos" value="todos" id="todos"></td>')
                                .append('<td><a href = "#">Consultar</a></td>')
                                .append('<td><a href = "#">Editar</a></td>')
                                .append("<td>" + data.ListarAlunosReprovadosResult.Alunos[i].Matricula + "</td>")
                                .append("<td>" + data.ListarAlunosReprovadosResult.Alunos[i].Nome + "</td>")
                                .append("<td>" + data.ListarAlunosReprovadosResult.Alunos[i].P1 + "</td>")
                                .append("<td>" + data.ListarAlunosReprovadosResult.Alunos[i].P2 + "</td>")
                                .append('<td>' + media + '</td>')
                                .append('<td>' + getSituacao(media) + '</td>'));
                    }
                }
            });
        }),

        $("#listar").click(function() {
            $.ajax({
                type: "GET",
                url: "http://localhost:36759/Aluno.svc/ListarAlunos",
                // cache: false,
                // contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    // console.log(data);

                    $("tbody tr").remove();

                    for (var i = 0; i < data.ListarAlunosResult.Alunos.length; i++) {

                        var media = getMedia(data.ListarAlunosResult.Alunos[i].P1, data.ListarAlunosResult.Alunos[i].P2);

                        $("tbody")
                            .append($("<tr/>")
                                .append('<td><input type="checkbox" name="todos" value="todos" id="todos"></td>')
                                .append('<td><a href = "#">Consultar</a></td>')
                                .append('<td><a href = "editar.html" class="editar">Editar</a></td>')
                                .append("<td>" + data.ListarAlunosResult.Alunos[i].Matricula + "</td>")
                                .append("<td>" + data.ListarAlunosResult.Alunos[i].Nome + "</td>")
                                .append("<td>" + data.ListarAlunosResult.Alunos[i].P1 + "</td>")
                                .append("<td>" + data.ListarAlunosResult.Alunos[i].P2 + "</td>")
                                .append('<td>' + media + '</td>')
                                .append('<td>' + getSituacao(media) + '</td>'));
                    }
                }
            })
        });





});