import BaseHandler from './Base';

export default class TeaHandler extends BaseHandler {
    handleRequest(request: string): void {
        if (request === 'tea') {
            console.log('Tea Handler: Brewing tea.');
        } else {
            super.handleRequest(request);
        }
    }
}
