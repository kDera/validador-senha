function pswValidation(){
    let senha = document.getElementById("password").value;
    

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
}