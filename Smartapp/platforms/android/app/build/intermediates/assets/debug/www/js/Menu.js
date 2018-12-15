


function TestarGet()
{
    loadingElement('btn-get','Agurando retorno...');

    $.ajax({
        async : true,
        crossDomain: true,
        type: 'GET',
        url: 'http://localhost:52636/api/Default',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        Cache : false,
        headers: {
            "Authorization": TOKEN_TYPE +" "+ TOKEN},
        success: tratarSucessoGet,
        error: tratarErroGet,
        complete: function(xhr, status){
            
        }
    })
    closeLoading('btn-get');
}

function tratarSucessoGet(data,status,xhr)
{
    alert(data[0], data[1]);
    console.log(data,status,xhr);
}

function tratarErroGet(xhr, errorType, error)
{
    var resposta = xhr.responseText;
    var respostas = JSON.parse(resposta);
    alert(respostas.error_description);
    console.log(error,errorType,xhr);
}

