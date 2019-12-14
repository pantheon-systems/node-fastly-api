/* eslint-disable func-names */
/* eslint-disable no-undef */
const { expect } = require('chai');

const fastly = require('../.');

require('dotenv').config({ path: `${__dirname}/.env` });

if (!process.env.FASTLY_TEST_API_KEY) {
  throw new Error('FASTLY_TEST_API_KEY must be set in the environment');
}

/*

*/
describe('Endpoint Testing', function() {
  let api = {};
  const settings = {
    service: {},
  };
  before(async function() {
    this.timeout(10000);
    if (!process.env.FASTLY_TEST_API_KEY) {
      this.skip('FASTLY_TEST_API_KEY must be set in the environment');
    }
    api = fastly(process.env.FASTLY_TEST_API_KEY);
    const result = await api.createService({ name: 'NodeJS Testing' });
    expect(result.status).to.equal(200);
    settings.service = result.data;
    console.log(`New service id: ${result.data.id}`);
  });

  after(async function() {
    const result = await api.deleteService(settings.service.id);
    console.log('deleted?', result.data);
    expect(result.status).to.equal(200);
  });

  describe('Fastly', function() {
    it('throw an error if no api key is passed', function() {
      expect(fastly).to.throw();
    });
  });

  describe('Service', function() {
    describe('readServices', async function() {
      let readServicesResult;
      before(async function() {
        readServicesResult = await api.readServices();
      });

      it('should return a 200', function() {
        expect(readServicesResult.status).to.equal(200);
      });
      it('should return a list of services', function() {
        expect(readServicesResult.data).to.have.lengthOf.above(0);
      });
      it('should contain our test service', () => {
        const serviceIds = readServicesResult.data.map(item => {
          return item.id;
        });
        expect(serviceIds).to.include(settings.service.id);
      });
    });
    describe('readServiceDetails', function() {
      let readServiceDetailsResult;
      before(async function() {
        readServiceDetailsResult = await api.readServiceDetails(settings.service.id);
      });

      it('should return 200', function() {
        expect(readServiceDetailsResult.status).to.equal(200);
      });
      it('should have our service id', function() {
        expect(readServiceDetailsResult.data.id).to.equal(settings.service.id);
      });
    });
    describe('readService', function() {
      let readServiceResult;
      before(async function() {
        readServiceResult = await api.readService(settings.service.id);
      });
      it('should return 200', function() {
        expect(readServiceResult.status).to.equal(200);
      });
    });
    describe('updateService', function() {
      const newName = 'NodeJS Testing - updateService';
      let updateServiceResult;
      let checkResult;
      before(async function() {
        updateServiceResult = await api.updateService(settings.service.id, {
          name: newName,
        });
        checkResult = await api.readService(settings.service.id);
        console.log(checkResult);
      });
      it('should return 200', function() {
        expect(updateServiceResult.status).to.equal(200);
      });
      it('has updated name in readService', function() {
        expect(checkResult.data.name).to.equal(newName);
      });
    });
  });

  describe('Version', function() {
    describe('readVersions', async function() {
      let readVersionsResult;
      before(async function() {
        readVersionsResult = await api.readVersions(settings.service.id);
      });

      it('should return 200', function() {
        expect(readVersionsResult.status).to.equal(200);
      });
      it('should have one version', function() {
        expect(readVersionsResult.data).to.have.length(1);
      });
    });
    describe('readVersion', async function() {
      let readVersionResult;
      const versionNumber = 1;
      before(async function() {
        readVersionResult = await api.readVersion(settings.service.id, versionNumber);
      });

      it('should return 200', function() {
        expect(readVersionResult.status).to.equal(200);
      });
      it('should match the number we asked for', function() {
        expect(readVersionsResult.data.number).to.equal(versionNumber);
      });
    });
    describe('validateVersion', async function() {
      let validateVersionResult;
      const versionNumber = 1;
      before(async function() {
        validateVersionResult = await api.validateVersion(settings.service.id, versionNumber);
      });

      it('should return 200', function() {
        expect(validateVersionResult.status).to.equal(200);
      });
      it('have a status of "ok"', function() {
        expect(validateVersionsResult.data.status).to.equal('ok');
      });
    });
    describe('createVersion', async function() {
      let createVersionResult;
      let checkResult;
      const versionData = {
        comment: 'This is a createVersion test comment',
      };
      before(async function() {
        createVersionResult = await api.createVersion(settings.service.id, versionNumber);
        checkResult = await api.readVersion(settings.service.id, createVersionResult.data.number);
      });

      it('should return 200', function() {
        expect(createVersionResult.status).to.equal(200);
      });
      it('contain our comment', function() {
        expect(checkResult.status).to.equal(200);
        expect(checkResult.data.comment).to.equal(versionData.comment);
      });
    });
    /**
     * This test requires that we set a domain and backend or director.
     */
    describe.only('activateVersion', async function() {
      // let activateVersionResult;
      // before(async function() {
      //   activateVersionResult = await api.activateVersion(settings.service.id, versionNumber);
      //   checkResult = await api.readVersion(settings.service.id, activateVersionResult.data.number);
      // });

      it('should return 200');
    });
  });
});
