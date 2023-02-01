import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router'

let login = {
    user: '',
    password: '',
};

/*el usuario escribe una palabra en el input, recogemos lo introducido*/
onUpdateField('user', event => {
    const value = event.target.value;
    login = {
        ...login, //copia todos los campos de login
        user: value //solo cambia el valor del usuario
    };

    //validación
    formValidation.validateField('user', login.user).then(result => {
        onSetError('user', result);
    })
});

onUpdateField('password', event => {
    const value = event.target.value;
    // login.password = value;
    login = {
        ...login, //copia todos los campos de login
        password: value //solo cambia el valor del usuario
    };

    //validación
    formValidation.validateField('password', login.user).then(result => {
        onSetError('password', result);
    })
});

//navegar a la siguiente pag
const onNavigate = (isValid) => {
    if(isValid){
        history.push(routes.accountList);
    }else{
        alert('Usuario y/o contraseña no válidos.')
    }
}


//Botón enviar
onSubmitForm('login-button', () => {
    //validar todo el formulario
   formValidation.validateForm(login).then(result => {
        onSetFormErrors(result);
        if(result.succeeded){ //si la validación es correcta ...
            isValidLogin(login).then(isValid => { //validar credenciales
                onNavigate(isValid); //navegar a la siguiente pág
            })
        }
   }) 
});




