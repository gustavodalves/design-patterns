export default abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): void {
        this.nextHandler = handler;
    }

    handleRequest(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}
