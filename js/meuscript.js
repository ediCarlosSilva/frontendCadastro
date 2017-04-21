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


    $.ajax({
            type: "GET",
            url: "http://localhost:36759/Aluno.svc/ListarAlunos",
            // cache: false,
            // contentType: "application/json",
            dataType: "json",
            success: function(data) {

                for (var i = 0; i < data.ListarAlunosResult.Alunos.length; i++) {

                    var media = getMedia(data.ListarAlunosResult.Alunos[i].P1, data.ListarAlunosResult.Alunos[i].P2);

                    $("tbody")
                        .append($("<tr/>")
                            .append('<td><input type="checkbox" name="todos" value="todos" id="todos"></td>')
                            .append('<td><a href="consultar.html?id=' + data.ListarAlunosResult.Alunos[i].Matricula + '">Consultar</a></td>')
                            .append('<td><a href="editar.html?id=' + data.ListarAlunosResult.Alunos[i].Matricula + '" class="btnEditar">Editar</a></td>')
                            // .append('<td><a href="#" class="btnEditar">Editar</a></td>')
                            .append("<td name='matricula'>" + data.ListarAlunosResult.Alunos[i].Matricula + "</td>")
                            .append("<td name='nome'>" + data.ListarAlunosResult.Alunos[i].Nome + "</td>")
                            .append("<td name='p1'>" + data.ListarAlunosResult.Alunos[i].P1 + "</td>")
                            .append("<td name='p2'>" + data.ListarAlunosResult.Alunos[i].P2 + "</td>")
                            .append('<td>' + media + '</td>')
                            .append('<td>' + getSituacao(media) + '</td>'));
                }

                // $(".btnEditar").bind("click", editar);
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
                                .append('<td><a href="consultar.html?id=' + data.ListarAlunosAprovadosResult.Alunos[i].Matricula + '">Consultar</a></td>')
                                .append('<td><a href="editar.html?id=' + data.ListarAlunosAprovadosResult.Alunos[i].Matricula + '" class="btnEditar">Editar</a></td>')
                                // .append('<td><a href="#" class="btnEditar">Editar</a></td>')
                                .append("<td name='matricula'>" + data.ListarAlunosAprovadosResult.Alunos[i].Matricula + "</td>")
                                .append("<td name='nome'>" + data.ListarAlunosAprovadosResult.Alunos[i].Nome + "</td>")
                                .append("<td name='p1'>" + data.ListarAlunosAprovadosResult.Alunos[i].P1 + "</td>")
                                .append("<td name='p2'>" + data.ListarAlunosAprovadosResult.Alunos[i].P2 + "</td>")
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
                                .append('<td><a href="consultar.html?id=' + data.ListarAlunosReprovadosResult.Alunos[i].Matricula + '">Consultar</a></td>')
                                .append('<td><a href="editar.html?id=' + data.ListarAlunosReprovadosResult.Alunos[i].Matricula + '" class="btnEditar">Editar</a></td>')
                                // .append('<td><a href="#" class="btnEditar">Editar</a></td>')
                                .append("<td name='matricula'>" + data.ListarAlunosReprovadosResult.Alunos[i].Matricula + "</td>")
                                .append("<td name='nome'>" + data.ListarAlunosReprovadosResult.Alunos[i].Nome + "</td>")
                                .append("<td name='p1'>" + data.ListarAlunosReprovadosResult.Alunos[i].P1 + "</td>")
                                .append("<td name='p2'>" + data.ListarAlunosReprovadosResult.Alunos[i].P2 + "</td>")
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
                                .append('<td><a href="consultar.html?id=' + data.ListarAlunosResult.Alunos[i].Matricula + '">Consultar</a></td>')
                                .append('<td><a href="editar.html?id=' + data.ListarAlunosResult.Alunos[i].Matricula + '" class="btnEditar">Editar</a></td>')
                                // .append('<td><a href="#" class="btnEditar">Editar</a></td>')
                                .append("<td name='matricula'>" + data.ListarAlunosResult.Alunos[i].Matricula + "</td>")
                                .append("<td name='nome'>" + data.ListarAlunosResult.Alunos[i].Nome + "</td>")
                                .append("<td name='p1'>" + data.ListarAlunosResult.Alunos[i].P1 + "</td>")
                                .append("<td name='p2'>" + data.ListarAlunosResult.Alunos[i].P2 + "</td>")
                                .append('<td>' + media + '</td>')
                                .append('<td>' + getSituacao(media) + '</td>'));
                    }
                }
            })
        });





});