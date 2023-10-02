interface Handler {
    setNext(handler: Handler): void;
    handleRequest(request: string): void;
  }
