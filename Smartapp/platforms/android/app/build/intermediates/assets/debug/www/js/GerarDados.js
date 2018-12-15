var SERVER_IP = '';
var SERVER_PORT = '';

function gerarDados()
{
    document.getElementById('temperatura').value = Math.floor(Math.random() * 100);
    document.getElementById('umidade').value = Math.floor(Math.random() * 60) + 20;
}

function salvarDadosServidor()
{
    var endereco = document.getElementById('server-ip');
    var porta = document.getElementById('server-port');

    if(endereco.value.length == 0 && porta.value.length == 0)
    {
        alert("Preencha todos os campos!");
        return;
    }
    SERVER_IP =  endereco.value;
    SERVER_PORT = porta.value;

    alert("Salvo!");
}

function preencheDadosServidor()
{
    if(SERVER_IP == '')
    {
        SERVER_IP = 'localhost'
    }
        
    if(SERVER_PORT == '')
    {
        SERVER_PORT = '52636'
    }
    
    document.getElementById('server-ip').value = SERVER_IP;
    document.getElementById('server-port').value = SERVER_PORT;
}

function enviarDados()
{
    loadingElement('btn-enviarDados','Enviando...');

    var temperatura = document.getElementById('temperatura').value;
    var umidade = document.getElementById('umidade').value;

    var body = {
        Temperatura: temperatura,
        Umidade: umidade
    };

    var body2 = "{Temperatura:'12,7',Umidade:'20'}";
    var body3 = { "Temperatura":"12,7","Umidade":"20"}

    if(SERVER_IP == '')
    {
        //SERVER_IP = 'localhost'
        SERVER_IP = '35.202.210.132'
    }
        
    if(SERVER_PORT == '')
    {
        //SERVER_PORT = '52636'
        SERVER_PORT = '80'
    }
    
    var url_server = 'http://'+SERVER_IP+':'+SERVER_PORT+'/api/DadosSensor';
    
    var _data = JSON.stringify(body);

    $.ajax({
        async : false,
        crossDomain: true,
        type: 'POST',
        url: url_server,
        dataType: "json",
        data: _data,
        processData: false,
        contentType: 'application/json',
        Cache : false,
        success: tratarSucessoCadastro,
        error: tratarErroCadastro,
        complete: function(xhr, status){
            closeLoading('btn-enviarDados')
        }
    })
}

function tratarSucessoCadastro(data,status,xhr)
{
    alert("Acao:" +data.acao+".<br/> Sucesso:"+data.sucesso+ "<br/> Inconsistencias:"+data.inconsistencias);
    document.getElementById('temperatura').value = '';
    document.getElementById('umidade').value = ''; 
    console.log(data,status,xhr);
}

function tratarErroCadastro(xhr, errorType, error)
{
    var resposta = xhr.responseText;
    var respostas = JSON.parse(resposta);
    alert(respostas.error_description);
}

