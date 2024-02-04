import inquirer from "inquirer";
let information = [{
        name: "Account_Number",
        type: "number",
        message: "Enter Account_Number"
    }, {
        name: "Pin",
        type: "password",
        mask: "*",
        message: "Enter Pin"
    }];
let atm = inquirer.prompt(information)
    .then((val) => {
    function check_1() {
        if (val.Account_Number != 1 && val.Account_Number != 2) {
            console.log("Account_number or Pin is incorrect");
        }
        else if (val.Account_Number == 1 && val.Pin == 1) {
            inquirer.prompt([{
                    name: "Action",
                    type: "list",
                    choices: ["Check_Balance", "Cash_Transfer", "Account_Information"]
                }])
                .then((valu) => {
                let available_balance = 3500;
                if (valu.Action == "Account_Information")
                    console.log(`Account_number = ${val.Account_Number} && Pin = ${val.Pin} `);
                else if (valu.Action == "Check_Balance")
                    console.log(available_balance);
                else if (valu.Action == "Cash_Transfer") {
                    inquirer.prompt([{
                            name: "account_number",
                            type: "number",
                            message: "Select Account_Number"
                        }, {
                            name: "Transaction_Amount",
                            type: "number",
                            message: "Select Transaction Amount"
                        }])
                        .then((value) => {
                        if (value.account_number == 2) {
                            let remaining_balance = available_balance - value.Transaction_Amount;
                            console.log(`${value.Transaction_Amount} is sent to account_number ${value.account_number}, 
                        Remaining balance ${remaining_balance} `);
                        }
                    });
                }
            });
        }
        else if (val.Account_Number == 2 && val.Pin == 2) {
            inquirer.prompt([{
                    name: "Action",
                    type: "list",
                    choices: ["Check_Balance", "Cash_Transfer", "Account_Information"]
                }])
                .then((valu) => {
                let available_balance = 4500;
                if (valu.Action == "Account_Information")
                    console.log(`Account_number = ${val.Account_Number} && Pin = ${val.Pin} `);
                else if (valu.Action == "Check_Balance")
                    console.log(available_balance);
                else if (valu.Action == "Cash_Transfer") {
                    inquirer.prompt([{
                            name: "account_number",
                            type: "number",
                            message: "Select Account_Number"
                        }, {
                            name: "Transaction_Amount",
                            type: "number",
                            message: "Select Transaction Amount"
                        }])
                        .then((value) => {
                        if (value.account_number == 1) {
                            let remaining_balance = available_balance - value.Transaction_Amount;
                            console.log(`${value.Transaction_Amount} is sent to account_number ${value.account_number}, 
                            Remaining balance ${remaining_balance} `);
                        }
                    });
                }
            });
        }
    }
    check_1();
    
});

       

      