class accounting {
    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.accountabilityLog = []

        this.expensesLog = []
        this.incomesLog = []

    }
    
    generateLog( type, category, description, quantity, value) {
        let secretID = 0
        if (type == `expenses`) {
            let newLog = {
                secretID: secretID,
                type: type,
                category: category,
                description: description,
                quantity: quantity,
                value: value,
                total: quantity * value
            }
        } else {
            let newLog = {
                secretID: secretID,
                type: type,
                category: category,
                description: description,
                quantity: quantity,

            }
        }
        
        
    }

}