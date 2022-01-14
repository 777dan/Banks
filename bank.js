let checkTF = false;


let bankAccount1 = new BankAccount(13444, "private", "John", "Johnson", 5555, 2000);
let bankAccount2 = new BankAccount(64332, "private", "Jane", "William", 3333, 5000);

function BankAccount(number, bank1, name, surname, code, account) {
    if (checkTF == false) {
        let cashMachine = new CashMachine(number, code, account, prompt("Введите свой номер карточки"), prompt("Введите код карты"));
        // function CashMachine(numC, codeC) {
        //     if (numC == number && codeC == code) {
        //         checkTF = true;
        //         alert("Вы успешно проверены");
        //         let ques1 = prompt("Введите сумму для вывода");
        //         console.log(account);
        //         account -= ques1
        //         console.log(account);
        //         checkTF = true;
        //     }
        //     else {
        //         alert("Неверный номер карты. Введите снова");
        //     }
        // }
    }
}

function CashMachine(number, code, account, numC, codeC) {
    if (numC == number && codeC == code) {
        checkTF = true;
        alert("Вы успешно проверены");
        let ques1 = prompt("Введите сумму для вывода");
        console.log(account);
        account -= ques1
        console.log(account);
        checkTF = true;
    }
    else {
        alert("Неверный номер карты. Введите снова");
    }
}
