import ObjectProtected from './ObjectProtected';

export default class ProtectionProxy {
    constructor(private realObject: ObjectProtected) {}

    confidentialOperation() {
        if (this.hasPermission()) {
            this.realObject.confidentialOperation();
        } else {
            console.log('Access denied to confidential operation.');
        }
    }

    private hasPermission(): boolean {
        const authorizedUser = true;
        return authorizedUser;
    }
}
