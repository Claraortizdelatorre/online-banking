// método que mapea la cuenta desde la API al modelo que tenemos en la vista (view model)
const mapAccountFromApiToViewModel = account => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance}€`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),//formato DD/MM/YYYY
    };
};

export const mapAccountListFromApiToViewModel = accountList => {
    return accountList.map(account => 
        mapAccountFromApiToViewModel(account));
};