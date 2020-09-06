"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extends_classes_1 = __importDefault(require("extends-classes"));
const ACL_1 = __importDefault(require("./config/ACL"));
const ACLEntry_1 = __importDefault(require("./config/ACLEntry"));
// import Backend from './config/Backend';
// import CacheSetting from './config/CacheSetting';
// import Condition from './config/Condition';
// import Dictionary from './config/Dictionary';
// import DictionaryInfo from './config/DictionaryInfo';
// import DictionaryItem from './config/DictionaryItem';
// import Domain from './config/Domain';
// import GCSLog from './config/GCSLog';
// import Service from './config/Service';
// import Settings from './config/Settings';
// import Stats from './config/Stats';
// import VCL from './config/VCL';
// import VCLSnippet from './config/VCLSnippet';
// import Version from './config/Version';
class Fastly extends extends_classes_1.default(ACL_1.default, ACLEntry_1.default) {
    constructor(apiKey = false, timeout = 15000) {
        if (!apiKey) {
            throw new Error('Fastly API key must be provided.');
        }
        super(apiKey, timeout);
    }
}
exports.default = (apiKey, timeout = 15000) => new Fastly(apiKey, timeout);
/**
 * Idea: the Fastly class contains a "use" method that loads each endpoint file
 * Each endpoint file has a static member - "instantiate" - that accepts an object with two members:
 *   - a JSON fetcher
 *   - a Form fetcher
 *
 * Basically app.ts looks like:
 *
 *   import ACL from './config/ACL';
 *
 *   class Fastly {
 *     constructor(apiKey) {
 *       this.jsonRequest = { ... };
 *       this.formRequest = { ... };
 *
 *       this.use(ACL);
 *     }
 *
 *     use(endpointClass: IEndpoint, addNamespace: boolean = true) {
 *       // instantiated will be instanceof ACLWorker, not ACL
 *       const instantiated = endpointClass.instantiate({ jsonRequest: this.jsonRequest, formRequest: this.formRequest });
 *       const methods = Object.getOwnPropertyNames(instantiated).filter(item => typeof instantiated[item] === 'function');
 *       methods.forEach(method => {
 *         this[method] = instantiated[method];
 *         if (addNamespace) {
 *           this[instantiated.namespace][method] = instantiated[method];
 *         }
 *       });
 *     }
 *   }
 *
 * And then ACL.ts looks like:
 *
 *   class ACL {
 *     instantiate({jsonRequest, formRequest}: { jsonRequest: AxiosInstance; formRequest: AxiosInstance}) {
 *       return new ACLWorker(jsonRequest, formRequest)
 *     }
 *   }
 *
 *   class ACLWorker {
 *     request: AxiosInstance = null;
 *     request_form: AxiosInstance = null;
 *
 *     constructor(jsonRequest, formRequest) {
 *       this.request = jsonRequest;
 *       this.request_form = formRequest;
 *     }
 *
 *     readAcls(service_id, version) {
 *       // ...
 *     }
 *
 *     readAcl(service_id, version, name) {
 *       // ...
 *     }
 *   }
 *
 *   export default ACL;
 */
//# sourceMappingURL=app.js.map