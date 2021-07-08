"use strict";

//Global Assets
const whatYouWanToDoNow = `What you want to do now? \n\nCheck accountability = getAccountabilityLog() \nGenerate log = generateLog() \nOther = help() `
const pleaseInitiateBalance = `   Please configure the initial balance. Write "getInitialBalance(number)".

\n          Poring: (◕‿◕✿)\n`
const notPremium = `
        (ಥ﹏ಥ)

You are not premium user.

      getPremium()
`

console.log(`Welcome to the myFinances
Please generate a class with this sequence:

let YOURNAME = new accounting (firstName, lastName)
YOURNAME.getInitalBalance(number)
`)
//ACCOUNTING APP - FOR PERSONAL PURPOSES
class accounting {
    #accountabilityLog
    #businessAccount
    #initialBalanceConfigured
    #currentTable
    //Collecting Data
    #interactionCounter

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName


        //Logs
        this.#accountabilityLog = []
    



        //when this is true, it should open the use of extra features
        this.#businessAccount = false
        //Generate initial balance, it only has one chance.
        this.#initialBalanceConfigured = false

        //Collecting Data
        this.#interactionCounter = 0
        //Current table
        this.#currentTable = 0
    }
    // Help
    help() {
        //This variables are here because is using the user name and last name.
        let helpText = `\n                (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
        
Hello! ${this.firstName} ${this.lastName}, 

Here i will show you what you can do in our App!

about() - General information about your account.

getInitialBalance() - This is necessary to start the program! Put the number to initiate the balance

delete() - This will delete the last entry!

edit() - This you will be able to edit one item in your log. 
         Make sure you write the (index, type, category, description, quantity and value)

getAccountabilityLog() - This will allow you to check your log and your balance.

getExpensesLog() - Check all your expenses

getIncomesLog() - Check all your incomes    

generateLog() - Generate a new item of your log.
                Make sure you write the (type, category, description, quantity and value).
                Type can only be "incomes" or "expenses". Incomes is positive value and expenses negative value.

getPremium() - Purchase BusinessAccount. You will be able to do more things! 
help() - I will provide all the commands!

reset() - This will reset the app, you will need to initiate balance to start again.


If you have more questions... well... 

                                    (｡◕‿◕｡)\n
`
        let helpTextPremium = `\n                (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)
        
Hello! ${this.firstName} ${this.lastName}, 

Thank you for supporting us! I will show you now your new commands available.
Dont worry you can still see the other commands.

*******************
PREMIUM COMMANDS:

cancelPremium() - Cancel the premium account.

changeTable(num) - Navigate between tables. Remember the main table is # 1.

createNewTableLog(initialBalance) - Create a new independent table different from the first one. 

deleteTable(num) -  Write the number of the table that you would like to delete. Remeber deleting table 1 is impossible.
                    Instead use reset().

filterByCategory() - Write the name of the category you want to filter.

*******************

about() - General information about your account.

getInitialBalance() - This is necessary to start the program! Put the number to initiate the balance

delete() - This will delete the last entry!

edit() - This you will be able to edit one item in your log. 
         Make sure you write the (index, type, category, description, quantity and value)

getAccountabilityLog() - This will allow you to check your log and your balance.

getExpensesLog() - Check all your expenses

getIncomesLog() - Check all your incomes    

generateLog() - Generate a new item of your log.
                Make sure you write the (type, category, description, quantity and value).
                Type can only be "incomes" or "expenses". Incomes is positive value and expenses negative value.

getPremium() - Purchase BusinessAccount. You will be able to do more things! 
help() - I will provide all the commands!

reset() - This will reset the app, you will need to initiate balance to start again.


If you have more questions... well... 

                                    (｡◕‿◕｡)\n
`
        console.clear()
        this.#interactionCounter++
        //Here i edit the premium accounts
        let help = this.#businessAccount ? helpTextPremium : helpText
        console.log(help)
    }
    //About this account
    about() {
        console.clear()
        let accountLevel = this.#businessAccount ? `Premium Account` : `Free Account`
        console.log(`
        About this account (⌐■_■)
        
        first name: ${this.firstName}
        last name: ${this.lastName}
        
        Account type: ${accountLevel}

        Number of tables: ${this.#accountabilityLog.length}

        This user has made ${this.#interactionCounter} interactions since the first use of the app.
        `)
        console.log(whatYouWanToDoNow)
    }
    //Generate initial balance
    getInitialBalance(num) {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured === false) {
            let newLog = [{
                type: `initial`,
                category: `balance`,
                description: ``,
                quantity: ``,
                value: ``,
                expenses: null,
                incomes: num,
            }]
            console.clear()
            console.log(`\nStatus: Initial Balance Added   (づ｡◕‿‿◕｡)づ \n
            Hello ${this.firstName}, welcome to myFinances!
            My name is Poring and i will be your bot helping you in taking care of your finances!
            Let me know how i can help writing "help()"!

            Your initial balance is: ${num}€
            
            See you soon! 
            
            Poring: (◕‿◕✿)`)


            return (this.#accountabilityLog.push(newLog), this.#initialBalanceConfigured = true)
        } else {
            console.clear()
            console.log(`\n----You already initiate the initial balance. If you would like to restart the balance, please use "reset()". \n----WARNING: reset it will clear everything.
            
            Poring: (ಥ﹏ಥ)`)
        }
    }
    //Reset
    reset() {
        this.#interactionCounter++ //We keep track even they reset
        this.#accountabilityLog = [] //Empty Array
        this.#initialBalanceConfigured = false //Need to start the process again
        this.#currentTable = 0 //Change to index 0 to avoid conflict
        console.clear()

        console.log(`
                            (っ˘ڡ˘ς)

        ....  Im resetting the app please wait...`)

        setTimeout(() => {
            console.clear()
            console.log(`
                            ｡◕‿‿◕｡  

                    Welcome back ${this.firstName}!`)
            setTimeout(() => {
                console.clear()
                console.log(`
                             ƪ(˘⌣˘)ʃ  

                Initiate your balance to start working
                    
                    "getInitialBalance(number)"`)
            }, 3000)
        }, 3000)

    }
    //Delete last Input
    delete() {
        this.#interactionCounter++
        //The delete is only for the accountability Log, the expenses and incomes log are just visual
        if (this.#initialBalanceConfigured) {
            if (this.#accountabilityLog[this.#currentTable].length != 1) {
                this.#accountabilityLog[this.#currentTable].pop()
                console.log(`\nStatus: Last item deleted   (づ｡◕‿‿◕｡)づ \n`)

            } else {
                console.clear()
                console.log(`
                                ┬┴┬┴┤(･_├┬┴┬┴

                    ...you cant delete your initial balance...
                    
                Make sure your Log has items to delete. Adding is simple:
                
          "generateLog(incomes / expenses, category, description, quantity, value)"`)

                console.log(whatYouWanToDoNow)
            }
        } else {
            console.clear()
            console.log(pleaseInitiateBalance)

        }
    }
    // Edit one item
    edit(index, type, category, description, quantity, value) {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured == true) {
            if (index != 0) {
                let editedItem = []
                if (type.toLowerCase() == `expenses`) {
                    let editedLog = {
                        type: type,
                        category: category,
                        description: description,
                        quantity: quantity,
                        value: value * -1, //Multiply by negative to transform to negative value
                        expenses: (quantity * value) * -1, //Multiply by negative to transform to negative value
                        incomes: null
                    }
                    editedItem.push(editedLog)
                } else if (type.toLowerCase() == `incomes`) {
                    let editedLog = {
                        type: type,
                        category: category,
                        description: description,
                        quantity: quantity,
                        value: value,
                        expenses: null,
                        incomes: quantity * value
                    }
                    editedItem.push(editedLog)
                }
                console.clear()
                console.log(`\nStatus: Index ${index} Changed   (づ｡◕‿‿◕｡)づ \n`)

                console.log(whatYouWanToDoNow)
                return this.#accountabilityLog[this.#currentTable][index] = editedItem[0] //its editedItem[0] because is an object inside an array and i need only the object and not the array.
            } else {
                console.clear()
                console.log(`\n You can not edit the initial balance! (ノಠ益ಠ)ノ彡┻━┻
                
                Please try index from 1 to ...99?
                
                Poring: (◕‿◕✿)\n`
                )
            }
        } else console.log(pleaseInitiateBalance)
    }
    //Generate tables
    getAccountabilityLog() {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            console.clear()
            console.log(`\nProviding balance from ${this.firstName} ${this.lastName}  (~˘▾˘)~ \n`)
            console.log(`Current table: ${this.#currentTable + 1}`) //I do +1 because its using the 0 for the index 0.
            console.table(this.#accountabilityLog[this.#currentTable])

            //here I use reduce, to calculate the total of the log. I take advantage that expenses will be always negative.
            let balance = this.#accountabilityLog[this.#currentTable].reduce((acc, crr) => acc + crr.incomes + crr.expenses, 0)
            console.log(`\n                       ******** YOUR BALANCE NOW IS: ${balance.toFixed(2)}€ ******** \n`)
            console.log(whatYouWanToDoNow)
        }
        else {
            console.clear()
            console.log(pleaseInitiateBalance)
        }
    }
    getExpensesLog() {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {

            let expensesTable = this.#accountabilityLog[this.#currentTable].filter(isExpenses => isExpenses.type == `expenses`) //Im filtering only the expenses
            let totalExpenses = expensesTable.reduce((acc, crr) => acc + crr.expenses, 0)
            console.clear()
            console.table(expensesTable)
            console.log(`\n                       ******** YOUR TOTAL EXPENSES ARE: ${totalExpenses}€ ******** \n`)
            console.log(whatYouWanToDoNow)
        }
    }
    getIncomesLog() {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {


            //Here i use slice to take out from the calculation the initial balance.
            let incomesTable = this.#accountabilityLog[this.#currentTable].filter(isIncomes => isIncomes.type == `incomes`) //Im filtering only the expenses
            let totalIncomes = incomesTable.reduce((acc, crr) => acc + crr.incomes, 0)
            console.clear()
            console.table(incomesTable)
            console.log(`\n                       ******** YOUR TOTAL INCOMES ARE: ${totalIncomes}€ ******** \n`)
            console.log(whatYouWanToDoNow)
        }
    }
    //Generate data
    generateLog(type, category, description, quantity, value) {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            if (type.toLowerCase() == `expenses`) {
                let newLog = {
                    type: type,
                    category: category,
                    description: description,
                    quantity: quantity,
                    value: value * -1, //Multiply by negative to transform to negative value
                    expenses: (quantity * value) * -1, //Multiply by negative to transform to negative value
                    incomes: null
                }
                console.clear()
                console.log(`\nStatus: Expenses Added   (づ｡◕‿‿◕｡)づ \n`)
                console.log(whatYouWanToDoNow)
                return this.#accountabilityLog[this.#currentTable].push(newLog)
            } else if (type.toLowerCase() == `incomes`) {
                let newLog = {
                    type: type,
                    category: category,
                    description: description,
                    quantity: quantity,
                    value: value,
                    expenses: null,
                    incomes: quantity * value
                }
                console.clear()
                console.log(`\nStatus: Income Added   (づ｡◕‿‿◕｡)づ \n`)
                console.log(whatYouWanToDoNow)

                return this.#accountabilityLog[this.#currentTable].push(newLog)
            } else {

                console.log(`Please write inside TYPE "incomes" or "expenses"`)
            }
        } else {
            console.clear()
            console.log(pleaseInitiateBalance)
        }
    }

    //*****Premium Account*****
    //Get premium account
    getPremium() {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            if (!this.#businessAccount) {
                this.#businessAccount = true
                console.clear()
                console.log(`
                         (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)

        Thank you for supporting us and getting Premium Account.
                
                            ${this.firstName},
                        
                Use help() to learn the new commands \n`)
            } else {
                console.clear()
                console.log(`
                            | (• ◡•)| (❍ᴥ❍ʋ)

                You are already premium user ${this.firstName}.
                `)
                console.log(whatYouWanToDoNow)
            }
        } else {
            console.clear()
            console.log(pleaseInitiateBalance)
        }

    }
    //Cancel premium
    cancelPremium() {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            if (this.#businessAccount) {
                this.#businessAccount = false
                console.clear()
                console.log(`
                        (._.) ( l: ) ( .-. ) ( :l ) (._.)
    
                                We will miss you!
                    
                                ${this.firstName}       
                    `)
                console.log(whatYouWanToDoNow)
            } else {
                console.clear()
                console.log(notPremium)
                console.log(whatYouWanToDoNow)
            }
        } else {
            console.clear()
            console.log(pleaseInitiateBalance)
        }


    }
    //Filter
    filterByCategory(filter) {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            if (this.#businessAccount) {
                console.clear()
                let categoryTable = this.#accountabilityLog[this.#currentTable].filter(isCategory => isCategory.category == filter.toLowerCase()) //Im filtering only the category
                let totalCategory = categoryTable.reduce((acc, crr) => acc + crr.expenses + crr.incomes, 0)

                console.log(`Filter by category: ${filter.toUpperCase()}      ~(˘▾˘~)    \n`)
                console.table(categoryTable)
                console.log(`\n                       ******** YOUR BALANCE IN THIS CATEGORY IS: ${totalCategory}€ ******** \n`)
                console.log(whatYouWanToDoNow)
            } else {
                console.clear()
                console.log(`
                                  (ಥ﹏ಥ)
    
                    You are not premium user ${this.firstName}.
                    
                                getPremium()
                    `)
                console.log(whatYouWanToDoNow)
            }
        } else {
            console.clear()
            console.log(pleaseInitiateBalance)
        }
    }
    //Can create new independent table
    createNewTableLog(initialBalance) {
        this.#interactionCounter
        if (this.#initialBalanceConfigured) {
            if (this.#businessAccount) {
                let newLog = [{
                    type: `initial`,
                    category: `balance`,
                    description: ``,
                    quantity: ``,
                    value: ``,
                    expenses: null,
                    incomes: initialBalance,
                }]
                console.clear()
                console.log(`\nStatus: Balance #${this.#accountabilityLog.length + 1} Added   (づ｡◕‿‿◕｡)づ \n`)
                console.log(`Current log: ${this.#accountabilityLog.length + 1}`)
                console.log(`Use changeLog() to change between your logs.`)
                console.log(whatYouWanToDoNow)
                return (this.#accountabilityLog.push(newLog), this.#currentTable++)
            } else {
                console.log(notPremium)
                console.log(whatYouWanToDoNow)
            }
        } else {
            console.log(pleaseInitiateBalance)
        }
    }
    //Navigate between tables
    changeTable(num) {
        this.#interactionCounter++

        if (this.#initialBalanceConfigured) {
            if (this.#businessAccount) {
                if (this.#accountabilityLog.length != 1) {
                    if (num <= this.#accountabilityLog.length && num > 0) {
                        //This rule is create so the user cant submit a table that does not exist.
                        //The more table the user create, more numbers can be input.
                        this.#currentTable = num - 1 //We need to -1 because we need to fit the correct index.
                        console.clear()
                        console.log(`\nStatus: Changed to table #${num}   (づ｡◕‿‿◕｡)づ \n`)
                        console.log(whatYouWanToDoNow)
                    } else {
                        console.clear()
                        console.log(`
                    （╯°□°）╯︵( .o.)
    
        The table ${num}, does not exist!.
        You have only ${this.#accountabilityLog.length} tables.
                
                `)
                        console.log(whatYouWanToDoNow)
                    }
                } else {
                    console.log(`
                    （╯°□°）╯︵( .o.)
    
        You have only ${this.#accountabilityLog.length} table.
                
                `)
                    console.log(whatYouWanToDoNow)
                }
            } else {
                console.log(notPremium)
            }
        } else {
            console.log(pleaseInitiateBalance)
        }
    }
    //Delete a table
    deleteTable(num) {
        this.#interactionCounter++
        if (this.#initialBalanceConfigured) {
            if (this.#businessAccount) {
                if (num <= this.#accountabilityLog.length) {
                    if (num != 1) {
                        this.#accountabilityLog.splice(num - 1, num - 1) //This delete the piece inside the array
                        this.#currentTable = 0 //To prevent any random glitch
                        console.clear()
                        console.log(`\nStatus: Table #${num} Deleted   (づ｡◕‿‿◕｡)づ \n`)
                        console.log(`\nStatus: Changed to table #1   (づ｡◕‿‿◕｡)づ \n`)
                        console.log(whatYouWanToDoNow)
                        
                    } else {
                        console.clear()
                        console.log(`
                            （╯°□°）╯︵( .o.)
            
                You can not delete the first table otherwise, use reset().
                        `)
                        console.log(whatYouWanToDoNow)
                    }
                } else {
                    console.clear()
                    console.log(`
                    （╯°□°）╯︵( .o.)
    
        You can not delete a table that does not exist.
                `)
                    console.log(whatYouWanToDoNow)
                }
            } else {
                console.clear()
                console.log(notPremium)
                console.log(whatYouWanToDoNow)
            }
        } else {
            console.log(pleaseInitiateBalance)
        }
    }
}

//TRY YOUR APP HERE:

//const YOURNAME = new accounting(`YOURFIRSTNAME`, `YOURLASTNAME`)


//EXAMPLE:
/*
const tkAlejandro = new accounting(`Alejandro`, `Coronado`)

tkAlejandro.getInitialBalance(4000) //INITIATE


tkAlejandro.generateLog(`incomes`, `salary`, `My work as freelance by DCI`, 1, 1500)
tkAlejandro.generateLog(`expenses`, `rent`, `Payment of the month`, 1, 700)
tkAlejandro.generateLog(`incomes`, `sales`, `4 hours of programming lessons`, 4, 49.98)
tkAlejandro.generateLog(`expenses`, `restaurant`, `Hamburguer at Mc Donalds`, 1, 89.8)



tkAlejandro.help()


tkAlejandro.getAccountabilityLog()


tkAlejandro.generateLog(`incomes`, `salary`, `My work as freelance by DCI`, 1, 1500)
tkAlejandro.generateLog(`expenses`, `rent`, `Payment of the month`, 1, 1000)
tkAlejandro.generateLog(`incomes`, `sales`, `8 hours of programming lessons`, 8, 49.98)
tkAlejandro.generateLog(`expenses`, `restaurant`, `Ceviche Peruano Restaurant`, 1, 47.8)
tkAlejandro.generateLog(`expenses`, `restaurant`, `Tacos Al Pastor Restaurant`, 1, 22.5)
tkAlejandro.generateLog(`expenses`, `restaurant`, `Ceviche Peruano Restaurant with friend`, 2, 47.8)
tkAlejandro.generateLog(`expenses`, `car payment`, `First payment of my new car`, 1, 2500)

tkAlejandro.getAccountabilityLog()

tkAlejandro.about()
tkAlejandro.help()



tkAlejandro.generateLog(`expenses`, `rent`, `Payment of the month`, 1, 2000)
tkAlejandro.generateLog(`expenses`, `rent`, `Payment of the month`, 1, 1000)
tkAlejandro.getAccountabilityLog()
tkAlejandro.edit(12, `incomes`, `tax`, `Tax refund`, 1, 2000)

tkAlejandro.getAccountabilityLog()
tkAlejandro.getExpensesLog() //5455,70
tkAlejandro.getIncomesLog() //5599,76
tkAlejandro.getAccountabilityLog()//4000 + 144,06 (difference)

tkAlejandro.about()
tkAlejandro.getPremium()
tkAlejandro.about()
tkAlejandro.getPremium() //Already have it!

tkAlejandro.generateLog(`incomes`, `restaurant`, `I sold a catering service to 5 friends`, 5, 128)
tkAlejandro.getAccountabilityLog()

//Lets check if the filter balance is working
tkAlejandro.filterByCategory(`restaurant`)
tkAlejandro.help()
tkAlejandro.about()
tkAlejandro.cancelPremium() //Already Cancel
tkAlejandro.cancelPremium()
tkAlejandro.about()
tkAlejandro.help()
tkAlejandro.about()

tkAlejandro.getAccountabilityLog()

tkAlejandro.filterByCategory(`restaurant`)
tkAlejandro.getPremium()
tkAlejandro.help()
tkAlejandro.getAccountabilityLog()

tkAlejandro.createNewTableLog(1500)
tkAlejandro.getAccountabilityLog()
tkAlejandro.generateLog(`expenses`, `spotify`, `I bought a spotify business`, 1, 48.88)
tkAlejandro.generateLog(`expenses`, `legal`, `Pay the inscription of business`, 1, 566)
tkAlejandro.getAccountabilityLog()
tkAlejandro.changeTable(3)
tkAlejandro.createNewTableLog(2500)
tkAlejandro.getAccountabilityLog()
tkAlejandro.changeTable(0)
tkAlejandro.changeTable(1)
tkAlejandro.getAccountabilityLog()
tkAlejandro.about()
tkAlejandro.deleteTable(1) //This should not work
tkAlejandro.getAccountabilityLog()
tkAlejandro.changeTable(2)
tkAlejandro.getAccountabilityLog()
tkAlejandro.changeTable(3)
tkAlejandro.getAccountabilityLog()
tkAlejandro.deleteTable(2) // 2 was deleted. 3 move to 2.
tkAlejandro.about()
tkAlejandro.deleteTable(2)
tkAlejandro.about()

tkAlejandro.getExpensesLog()
tkAlejandro.getIncomesLog()


tkAlejandro.about()
tkAlejandro.help()
//tkAlejandro.reset()

tkAlejandro.generateLog(`expenses`, `restaurant`, `restaurant with some friends`, 1, 45)
tkAlejandro.getAccountabilityLog()
tkAlejandro.filterByCategory(`restaurant`)


tkAlejandro.filterByCategory(`restaurant`)
tkAlejandro.createNewTableLog(4500)
tkAlejandro.getAccountabilityLog()
tkAlejandro.changeTable(1)
tkAlejandro.getAccountabilityLog()
//tkAlejandro.reset()

*/




