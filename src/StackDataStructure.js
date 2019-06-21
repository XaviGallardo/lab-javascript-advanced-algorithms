class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 5;
  }
  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  push(element) {
    if (this.canPush() === true) {
      this.stackControl.push(element);
    } else return "Stack Overflow";
    return this.stackControl;
  }
  pop() {
    if (this.isEmpty() === true) {
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  }
}
