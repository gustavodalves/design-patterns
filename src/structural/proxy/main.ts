import ObjectProtected from './ObjectProtected';
import ProtectionProxy from './Protection';

const realObject = new ObjectProtected();
const proxy = new ProtectionProxy(realObject);

proxy.confidentialOperation();
