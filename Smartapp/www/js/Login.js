var TOKEN = '';
var TOKEN_TYPE = '';


function fazerLogin()
{
    loadingElement('btn-login','Fazendo login...');
    
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email.length == 0 && senha.length == 0)
    {
        alert("Preencha todos os campos!");
        closeLoading('btn-login')
        return;
    }

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
        success: tratarSucessoLogin,
        error: tratarErroLogin,
        complete: function(xhr, status){
            closeLoading('btn-login')
        }
    }) 
    closeLoading('btn-login');
    if(TOKEN.length > 0)
    {
        openPage('Menu');
    }
}


function tratarSucessoLogin(data,status,xhr)
{
    TOKEN = data.access_token;
    TOKEN_TYPE = data.token_type
    alert("success");
    document.getElementById('email').value = '';
    document.getElementById('senha').value = ''; 
    console.log(data,status,xhr);
}

function tratarErroLogin(xhr, errorType, error)
{
    var resposta = xhr.responseText;
    var respostas = JSON.parse(resposta);
    alert(respostas.error_description);
}
