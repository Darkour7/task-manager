export class Task {
  constructor(name) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.state = "TODO";
  }

  toggleState(state) {
    this.state = state;
  }

  toggleOnGoing() {
    if(this.state === "COMPLETED") return;
    if (this.state === "TODO") {
      this.state = "ONGOING";
      return;
    }
    this.state = "TODO";
  }

  toggleCompletion() {
    if (this.state !== "COMPLETED") {
      this.state = "COMPLETED";
      return;
    }
    this.state = "TODO";
  }
}
