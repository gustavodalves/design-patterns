import BaseHandler from './Base';

export default class MilkHandler extends BaseHandler {
    handleRequest(request: string): void {
        if (request === 'milk') {
            console.log('Milk Handler: Adding milk.');
        } else {
            super.handleRequest(request);
        }
    }
}
