
function searchValidate() {
    //Selecciono elemento input del formulario
    var inputSearch = document.forms["myFormSearch"]["input-Search"];
    console.log(inputSearch.value.length);

    //Resetear borde rojo input
    inputSearch.style.border = "none";

    //Validar si el campo está vacio
    if (inputSearch.value == "") {
        inputSearch.style.border = "1px solid red";
        inputSearch.placeholder = "Campo obligatorio";
        return false;
    }
    //Validar si el texto introducido es mayor a 3 caracteres 
    else if (inputSearch.value.length < 3) {
        inputSearch.style.border = "1px solid red";
        return false;
    } else {
        return true;
    }
}

function loginValidate() {
    //Selecciono elementos input del formulario, imprimo por consola los valores recogidos por el formulario
    var inputEmail = document.forms["myFormLogin"]["login-email"];
    console.log(inputEmail.value);
    var inputPassword = document.forms["myFormLogin"]["login-pass"];
    console.log(inputPassword.value);
    //Variable que acumula errores de validación
    var acumErrores = 0;

    //Resetear la clase que muestra error por pantalla         
    inputEmail.classList.remove("is-invalid");
    inputPassword.classList.remove("is-invalid");

    //Validar si el campo email está vacio
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Email is required";
        acumErrores++;
    //Validar si el email introducido cumple el estandar    
    } else if (!isValidEmail(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Enter a valid email address";
        acumErrores++;
    }
    //Validar si el campo password está vacio
    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Password is required";
        acumErrores++;
    }
    //Contador de errores de validación acumulados, devolverá true si no hay errores o false si hay algún error de validación
    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }

}

function singinValidate() {
    //Selecciono elementos input y select del formulario, imprimo por consola los valores recogidos por el formulario
    var inputEmail = document.forms["myFormSingin"]["singin-email"];
    console.log(inputEmail.value);
    var inputPassword = document.forms["myFormSingin"]["singin-pass"];
    console.log(inputPassword.value);
    var inputRepeatPassword = document.forms["myFormSingin"]["repeat-singin-pass"];
    console.log(inputRepeatPassword.value);
    var selectProvince = document.forms["myFormSingin"]["singin-province"];
    console.log(selectProvince.value);
    //Variable que acumula errores de validación
    var acumErrores = 0;


    //Resetear la clase que muestra error por pantalla            
    inputEmail.classList.remove("is-invalid");
    inputPassword.classList.remove("is-invalid");
    inputRepeatPassword.classList.remove("is-invalid");
    selectProvince.classList.remove("is-invalid");


    //Validar si el campo email está vacio
    if (inputEmail.value == "") {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Email is required";
        acumErrores++;
    //Validar si el email cumple el estandar    
    } else if (!isValidEmail(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmail").textContent = "Enter a valid email address";
        acumErrores++;
    }
    //Validar si el campo password está vacio
    if (inputPassword.value == "") {
        inputPassword.classList.add("is-invalid");
        document.getElementById("errorPassword").textContent = "Password is required";
        acumErrores++;
    //Si el campo password está implementado, comprobamos el campo Repeat Password    
    } else {
        //Validar si el campo Repeat Password está vacio
        if (inputRepeatPassword.value == "") {
            inputRepeatPassword.classList.add("is-invalid");
            document.getElementById("errorRepeatPassword").textContent = "Repeat Password is required";
            acumErrores++;
        }
        //Validar si el campo Repeat Password es igual al campo Password
        else if (inputRepeatPassword.value !== inputPassword.value) {
            inputRepeatPassword.classList.add("is-invalid");
            document.getElementById("errorRepeatPassword").textContent = "Password is not the same";
            acumErrores++;
        }
    }
    //Validar que se ha seleccionado una provincia
    if (selectProvince.value == "notSelect") {
        selectProvince.classList.add("is-invalid");
        document.getElementById("errorProvince").textContent = "Select Province";
        acumErrores++;
    }
    //Contador de errores de validación acumulados, devolverá true si no hay errores o false si hay algún error de validación
    if (acumErrores > 0) {
        return false;
    } else {
        return true;
    }
}


// Función que valida con una expresión regular que la direccíon de email introducida cumpla el estandar
function isValidEmail(mail) { 
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;     
    return regex.test(mail)? true : false;
}
