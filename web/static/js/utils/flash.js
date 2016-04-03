// Singleton for setting and displaying flash messages

let instance = null;

class Flash {
  constructor() {
    if(instance) {
      return instance
    }

    instance = this
    instance.message = null
    instance.msgRetrieved = false
    return instance
  }

  set(msg) {
    this.message = msg
    this.msgRetrieved = false
  }

  get() {
    if(this.msgRetrieved) {
      this.message = null
    } else {
      this.msgRetrieved = true
    }
    return this.message
  }
}
export default new Flash;
