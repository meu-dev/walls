function loguear()
{

    const user=document.getElementById('usuario').value;
    const password=document.getElementById('pass').value;


    if(user == 'user' && password == "12345")
    {
        window.location="index.html";
    }
    else
    {
        alert("Datos incorrectos")
    }

}