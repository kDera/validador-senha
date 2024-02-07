function pswValidation(){
    let senha = document.getElementById("password").value;
    let resultado = document.getElementById("resultado")
    

    //validar tamanho minimo de 8 digitos
    pswSize = senha.length >= 8 ; 

    //validar letras minusculas
    letraMin = /[a-z]/.test(senha) // /[...]/ definir um intervalo de itens
    //validar letras minusculas
    letraMai = /[A-Z]/.test(senha)
    //validar letras minusculas
    letraMin = /[a-z]/.test(senha)
    //validar se tem numero
    Num = /\d/.test(senha);
    //validar caracter especial
    carcEsp = /[!@#$%^&*]/.test(senha);


    //mostra de resultados
        console.log("senha:"+senha);

        console.log("A senha tem 8 dígitos? "+pswSize);
        console.log("A senha tem minúscula? "+letraMin);
        console.log("A senha tem MAIÚSCULA? "+letraMai);
        console.log("A senha tem numeral? "+Num);
        console.log("A senha tem caractere especial? "+carcEsp);
    
    document.getElementById("resultado").innerText

    if(pswSize && letraMin && letraMai && Num && carcEsp){
        document.getElementById("resultado").innerText = "a senha cumpre com todos os requisitos";
    }
    else{
        msg = document.getElementById("resultado").innerText= "a senha não cumpre os seguintes requisitos:" //mostar o que falta
        //se o tam for menor que 8, mostrar
        if(!pswSize) {document.getElementById("resultado").innerText += "\n  não atingiu os 8 dígitos"}
        if(!letraMin) {document.getElementById("resultado").innerText += "\n  não tem letra minuscula"}
        if(!letraMai) {document.getElementById("resultado").innerText += "\n  não tem letra maiuscula"}
        if(!Num) {document.getElementById("resultado").innerText += "\n  não tem numeral"}
        if(!carcEsp) {document.getElementById("resultado").innerText += "\n não tem caractere especial"}
        
    }
}