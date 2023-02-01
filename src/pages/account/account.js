import { 
    onUpdateField, 
    onSubmitForm, 
    onSetError, 
    onSetFormErrors, 
    onSetValues } from '../../common/helpers';
import { formValidation } from './account.validations';
import { history } from '../../core/router';
import { insertAccount, getAccount, updateAccount } from './account.api';
import { mapAccountFromVMToApi, mapAccountFromApiToViewModel } from './account.mappers';



//coger parámetros url
const params = history.getParams();

// comprobamos si la url tiene id o no para saber si es modo edición o nuevo
const isEditMode = Boolean(params.id); // -> params.id ? true : false

if (isEditMode) {
    getAccount(params.id).then(apiAccount => {
        account = mapAccountFromApiToViewModel(apiAccount);
        onSetValues(account);
    });
}

let account = {
    id: '',
    type: '',
    alias: '',
};


/** Recuperamos la info del servidor */
onUpdateField('type', (event) => {
    const value = event.target.value;

    account = {
        ...account,
        type: value,
    };

    //validacion
    formValidation.validateField('type', account.type).then(result => {
        onSetError('type', result); //muestra el error
    });
});

onUpdateField('alias', (event) => {
    const value = event.target.value;

    account = {
        ...account,
        alias: value,
    };
    //validacion
    formValidation.validateField('alias', account.alias).then(result => {
        onSetError('alias', result);
    });
});


const onSave = () => {
    const apiAccount = mapAccountFromVMToApi(account);
    return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
}

onSubmitForm('save-button', () => {
    //valida todo
    formValidation.validateForm(account).then(result => {
        onSetFormErrors(result);

        if(result.succeeded) {
            onSave().then(() => {
                history.back();
            });
        }
    });
}) 