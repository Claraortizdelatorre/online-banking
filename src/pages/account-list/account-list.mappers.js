// método que mapea la cuenta desde la API al modelo que tenemos en la vista (view model)
const mapAccountFromApiToVm = account => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance}€`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
    };
};

export const mapAccountListFromApiToVM = accountList => {
    return accountList.map(account => 
        mapAccountFromApiToVm(account));
};