import Many from 'extends-classes';

import ACL from './config/ACL';
import ACLEntry from './config/ACLEntry';
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

class Fastly extends Many(
  ACL,
  ACLEntry,
  // Backend,
  // CacheSetting,
  // Condition,
  // Dictionary,
  // DictionaryInfo,
  // DictionaryItem,
  // Domain,
  // GCSLog,
  // Service,
  // Settings,
  // Stats,
  // VCL,
  // VCLSnippet,
  // Version
) {
  constructor(apiKey: string | boolean = false, timeout: number = 15000) {
    if (!apiKey) {
      throw new Error('Fastly API key must be provided.');
    }
    super(apiKey, timeout);
  }
}

export default (apiKey: string | boolean, timeout: number = 15000): Fastly => new Fastly(apiKey, timeout)
