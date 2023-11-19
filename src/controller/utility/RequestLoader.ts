export class RequestLoader {
  isLoading = false;

  start() {
    this.isLoading = true;
    return this;
  }

  stop() {
    this.isLoading = false;
  }

}
