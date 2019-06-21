class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 5;
  }
  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(element) {
    if (this.canEnqueue() === true) {
      this.queueControl.unshift(element);
    } else return "Queue Overflow";
    return this.queueControl;
  }
  dequeue(element) {
    if (this.isEmpty() === true) {
      return "Queue Underflow";
    } else {
      return this.queueControl.pop(element);
    }
  }
}
