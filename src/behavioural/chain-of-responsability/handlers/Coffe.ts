import BaseHandler from './Base';

export default class CoffeeHandler extends BaseHandler {
    handleRequest(request: string): void {
        if (request === 'coffee') {
            console.log('Coffee Handler: Brewing coffee.');
        } else {
            super.handleRequest(request);
        }
    }
}
