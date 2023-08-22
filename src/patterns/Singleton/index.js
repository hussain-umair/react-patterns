// it is to use a single instance of an object through out
// the application and without having to recreate that object and losing any information inside it.

class FancyLogger {
  constructor() {
    if (FancyLogger.instance === null) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log('Fanct: '+ message)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}
const loggerInstance = new FancyLogger()
Object.freeze(loggerInstance)
export default loggerInstance


export function logFirstImplementation() {
  loggerInstance.printLogCount()
  loggerInstance.log('First file')
  loggerInstance.printLogCount()
}


export function logSecondImplementation() {
  loggerInstance.printLogCount()
  loggerInstance.log('Second file')
  loggerInstance.printLogCount()
}

logFirstImplementation()
logSecondImplementation()