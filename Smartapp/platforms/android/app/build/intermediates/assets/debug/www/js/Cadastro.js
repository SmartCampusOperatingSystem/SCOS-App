


function fazerCadastro()
{
    loadingElement('btn-cadastro','Fazendo login...');

    var email = document.getElementById('emailCadastro').value;
    var senha = document.getElementById('senhaCadastro').value;

    var body = {
        grant_type: 'password',
        username: email,
        password: senha
    };

    $.ajax({
        async : false,
        crossDomain: true,
        type: 'POST',
        url: 'http://localhost:52636/api/token',
        data: body,
        dataType : 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        Cache : false,
        success: tratarSucessoCadastro,
        error: tratarErroCadastro,
        complete: function(xhr, status){
            closeLoading('btn-cadastro')
        }
    })
}

function tratarSucessoCadastro(data,status,xhr)
{
    alert("success");
    document.getElementById('email').value = '';
    document.getElementById('senha').value = ''; 
    console.log(data,status,xhr);
}

function tratarErroCadastro(xhr, errorType, error)
{
    var resposta = xhr.responseText;
    var respostas = JSON.parse(resposta);
    alert(respostas.error_description);
}

