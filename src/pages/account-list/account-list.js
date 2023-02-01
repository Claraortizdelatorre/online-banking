import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel} from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';


//Añadir cuentas
getAccountList().then(accountList => {
    const viewModelAccountList = mapAccountListFromApiToViewModel(accountList); //transforma datos con el formato correspondiente
    addAccountRows(viewModelAccountList);


    //seleccion
    viewModelAccountList.forEach(account => {
        onUpdateField(`select-${account.id}`, (event) => { //selección elegida (transferencias, movimientos)
            const route = event.target.value; //ruta donde queremos navegar
            history.push(route); //accedemos a la ruta
        });
    });
});
