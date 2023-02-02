import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { history } from '../../core/router';


//trae los datos
getMovementsList().then(movementList => {
    console.log("entra aqui")
    const viewModelMovementList = mapMovementsListFromApiToViewModel(movementList); //transforma datos con el formato correspondiente
    console.log(viewModelMovementList)
    addMovementRows(viewModelMovementList);


    //seleccion
    viewModelMovementList.forEach(movements => {
        onUpdateField(`select-${movements.id}`, (event) => { //cuenta elegida
            const route = event.target.value; //ruta donde queremos navega
            history.push(route); //accedemos a la ruta
        });
    });
});
//