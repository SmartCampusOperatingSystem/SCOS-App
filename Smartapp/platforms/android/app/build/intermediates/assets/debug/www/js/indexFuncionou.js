


function fazerLogin()
{
    loadingElement('btn-login','Fazendo login...');

    var email = document.getElementById('email');
    var senha = document.getElementById('senha');

    var url = 'http://localhost:52636/api/Default';
      
    MobileUI.ajax.get(url)
    .set('Authorization','EgKQ-Yr4dHUgM21qMzNv1LAsBA2NOQ2f6WTdzNfKvomu4Eko5kB-MVAlfTSukm03hXFSvy_qUJL0_OqAjO9ACx4ekxECEVTYWayqHEw_FymlBi5kw_vPabJ_tzw-9mnJS5oYqHEpCPKr0KYWNvOkqlxEbgfw09R3SLWkpz9f6AhdgRdISCwhOBlE9vSNmb25Ek36Sm9l-_cH-JBZiHdEJUi6CWobvk6xcVonw95PDqfquiTxBeFvxajmBHDFmmst0Xj4wQZVrhmCnhBMe4q2v1vhlLoOZL4nti0KUQZ598VUj-J94KSayAcp0mNMIUYQ')
    .end(retornoWebService)    
}

function retornoWebService(erro,res)
{
    closeLoading('btn-login')
    if(erro)
    {
        alert(res.body.Message);
    }
    else
    {
        alert("Sucesso!")
    }

    console.log(res);
}

