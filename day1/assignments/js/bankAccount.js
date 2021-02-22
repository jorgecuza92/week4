
class BankAccount {
  constructor(firstName, lastName, middleName, accountType="checkings", balance=100, status) {
    this.firstName = firstName
    this.lastName = lastName
    this.middleName = middleName
    this.accountType = accountType
    this.balance = balance
    this.status = status
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
    // this.fee -= balance // need to work on how to charge a fee when balance is under $100
  }

  transfer(amount, destination) {
    this.withdraw(amount)
    destination.deposit(amount)
  }
}

let checkingsAccount = new BankAccount("Jorge", "Cuza", "A", "checkings", 100, "open")
checkingsAccount.deposit(150)
console.log(checkingsAccount.balance)


let savingsAccount = new BankAccount("Jorge", "Cuza", "A", "savings", 100, "open")
checkingsAccount.transfer(50, savingsAccount)
console.log(savingsAccount.balance)