/* eslint-disable camelcase */
const Many = require('extends-classes');
const axios = require('axios');

const ACL = require('./config/ACL');
const ACLEntry = require('./config/ACLEntry');
const Backend = require('./config/Backend');
const CacheSetting = require('./config/CacheSetting');
const Condition = require('./config/Condition');
const Dictionary = require('./config/Dictionary');
const DictionaryInfo = require('./config/DictionaryInfo');
const DictionaryItem = require('./config/DictionaryItem');
const Domain = require('./config/Domain');
const GCSLog = require('./config/GCSLog');
const Service = require('./config/Service');
const Settings = require('./config/Settings');
const Stats = require('./config/Stats');
const VCL = require('./config/VCL');
const VCLSnippet = require('./config/VCLSnippet');
const Version = require('./config/Version');

class Fastly extends Many(
  ACL,
  ACLEntry,
  Backend,
  CacheSetting,
  Condition,
  Dictionary,
  DictionaryInfo,
  DictionaryItem,
  Domain,
  GCSLog,
  Service,
  Settings,
  Stats,
  VCL,
  VCLSnippet,
  Version
) {
  constructor(apiKey = false, service_id, timeout = 15000) {
    super();
    const self = this;
    if (!apiKey) {
      throw new Error('fastly api key must be provided');
    }
    self.service_id = service_id;
    self.request = axios.create({
      baseURL: 'https://api.fastly.com/',
      timeout,
      headers: {
        'Fastly-Key': apiKey,
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/json',
      },
    });
  }
}

/**
 * Function to create a new fastly-promises instance.
 *
 * @param {string} apiKey - The Fastly API key.
 * @param {string} service_id - The Fastly service ID.
 * @returns {Fastly} The exported module.
 */
module.exports = (apiKey, service_id) => new Fastly(apiKey, service_id);
