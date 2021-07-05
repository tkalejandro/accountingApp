
// **********HERE IS MY APP************//
class trainingApp {
    constructor(companyName) {
        this.companyName = companyName
        this.listOfEmployees = []

    }

    //Function to generate a table
    getTableList() {
        console.clear()
        console.table(this.listOfEmployees)
    }
    //Creates a new employee
    registerEmployee(firstName, lastName, age, techKnowledgeScore, techInstallationScore, englishLevelScore) {
        let newObject = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            secretID: `${firstName.length * age}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${this.companyName}.com`,
            techKnowledge: techKnowledgeScore >= 0 && techKnowledgeScore <= 25 ? `beginner` : techKnowledgeScore >=26 && techKnowledgeScore <= 50 ? `technician` : techKnowledgeScore >= 51 && techKnowledgeScore <= 75 ? `specialist` : techKnowledgeScore >= 76 && techKnowledgeScore <= 90 ? `expert` : techKnowledgeScore >= 91 && techKnowledgeScore <= 100 ? `mentor` : `Not a valid number`,
            techInstallation: techInstallationScore >= 0 && techInstallationScore <= 25 ? `beginner` : techInstallationScore >=26 && techInstallationScore <= 50 ? `technician` : techInstallationScore >= 51 && techInstallationScore <= 75 ? `specialist` : techInstallationScore >= 76 && techInstallationScore <= 90 ? `expert` : techInstallationScore >= 91 && techInstallationScore <= 100 ? `mentor` : `Not a valid number`,
            englishLevel: englishLevelScore >= 0 && englishLevelScore <= 25 ? `beginner` : englishLevelScore >=26 && englishLevelScore <= 50 ? `technician` : englishLevelScore >= 51 && englishLevelScore <= 75 ? `specialist` : englishLevelScore >= 76 && englishLevelScore <= 90 ? `expert` : englishLevelScore >= 91 && englishLevelScore <= 100 ? `mentor` : `Not a valid number`,
            needTraining: techInstallationScore <= 50 || techKnowledgeScore <= 50 || englishLevelScore <= 50
        }
        return this.listOfEmployees.push(newObject)
    }
    

}

class admin extends trainingApp {
    constructor(companyName, isAdmin) {
        super(companyName)
        this.isAdmin = isAdmin
        
    }
    
}

//All this functions are use to simplify the app.
const getRandomNum = num => Math.floor(Math.random() * num) //Generate number from 0 to NUM
const getRandomAge = (min,max) => Math.floor(Math.random() * (max - min + 1) + min ) //Generate number from MIN to MAX

//Lets create the company!
const tkAlejandroCompany = new trainingApp(`tk-co`)



//Lets generate employees:
tkAlejandroCompany.registerEmployee(`Alejandro`, `Coronado`, 29, 75, 50, 80)
tkAlejandroCompany.registerEmployee(`Pedro`, `Sanchez`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Nibushi`, `Zhongguoren`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Pepito`, `Melano`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`John`, `Smith`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Namibia`, `White`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Wendy`, `Zulca`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Malika`, `Swarosky`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))
tkAlejandroCompany.registerEmployee(`Florencia`, `Pepperoni`, getRandomAge(20,68), getRandomNum(100), getRandomNum(100), getRandomNum(100))





tkAlejandroCompany.getTableList()


