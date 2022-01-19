$(function () {

    $("#Enviar").click(
        function () {

            var mensagem = $("#mensagem").val();

            var stringUrl = "/RespostaChats/api/Chat";

            $.ajax({
                type: "POST",
                url: "../api/Chat",
                async: false,
                data: { mensagem: mensagem },

                success: function (data) {

                    $("#displaymensagem").append(" >> EU : " + mensagem + "\n");
                    $("#displaymensagem").append(data.resposta + "\n");

                    $("#mensagem").val("")
                }
            });


        }
    );

});
