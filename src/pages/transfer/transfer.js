import { history, routes } from '../../core/router';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';
import { insertTransfer, getAccountList } from './transfer.api';
import { formValidation } from './transfer.validation';
import { setAccountOptions } from './transfer.helpers';


//Recoger parámetros de la url para ver el id de cuenta.
const params = history.getParams();

getAccountList().then(accountList => {
    setAccountOptions(accountList, params.id);
});

let transfer = {
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    day: '',
    month: '',
    year: '',
    date: '',
    email: ''
};

//Recoger los valores del formulario
onUpdateField('iban', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        iban: value,
    };

    //validacion
    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result); //muestra el error
    });
});

onUpdateField('name', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        name: value
    };

    formValidation.validateField('name', transfer.name).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        amount: value
    };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        concept: value
    };

    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        notes: value
    };

    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
    });
});

onUpdateField('day', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        day: value,
        date: `${transfer.year}-${transfer.month}-${transfer.day}`,
    };

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        month: value,
        date: `${transfer.year}-${transfer.month}-${transfer.day}`,
    };

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        year: value,
        date: `${transfer.year}-${transfer.month}-${transfer.day}`,
    };

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

onUpdateField('email', (event) => {
    const value = event.target.value;

    transfer = {
        ...transfer,
        email: value
    };

    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
    });
});


//Mandar la información al servidor mediante un método de la API.
onSubmitForm('transfer-button', () => {
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);

        if (result.succeeded) {
            insertTransfer(transfer).then(() => {
                { history.push(routes.accountList) };
                alert('Transferencia realizada con éxito');
            });
        };
    });    
})