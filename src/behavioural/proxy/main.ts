import ObjectProtected from './ObjectProtected';
import ProtectionProxy from './protection';

const realObject = new ObjectProtected();
const proxy = new ProtectionProxy(realObject);

proxy.confidentialOperation();
