// método que mapea la cuenta desde la API al modelo que tenemos en la vista (view model)
const mapMovementsFromApiToViewModel = movement => {
    return {
        id: movement.id,
        iban: movement.iban,
        alias: movement.name,
        description: movement.description,
        amount: `${movement.amount}€`,
        balance: `${movement.balance}€`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date (movement.realTransaction).toLocaleDateString(),
        accountId: movement.accountId,
    };
};


export const mapMovementsListFromApiToViewModel = accountList => {
    return accountList.map(account => 
        mapMovementsFromApiToViewModel(account));
};