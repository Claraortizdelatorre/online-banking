import { onUpdateField, onSubmitForm } from '../../common/helpers';

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

});

onUpdateField('password', event => {
    const value = event.target.value;
    // login.password = value;
    login = {
        ...login, //copia todos los campos de login
        password: value //solo cambia el valor del usuario
    };
});

onSubmitForm('login-button', () => {
    console.log({ login }) //info login
});