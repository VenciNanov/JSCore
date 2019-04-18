let AutoService = require('./autoService.js');
let assert = require('chai').assert;

describe("AutoService", function () {
    describe("constructor", function () {
        it("it should init with a number as garageCapacity", function () {
            let service = new AutoService(123);
            assert.equal(service.garageCapacity, 123);
        });
        it('should init with a negative number as capactity', function () {
            let service = new AutoService(-123);
            assert.equal(service.garageCapacity, -123);
        })
        it('should contain array of work in progress when init', function () {
            let service = new AutoService(123);
            assert.isArray(service.workInProgress);
            assert.isEmpty(service.workInProgress);
        });
        it('should contain array of backlogWork when init', function () {
            let service = new AutoService(123);
            assert.isArray(service.backlogWork);
            assert.isEmpty(service.backlogWork);
        })
        it('should contain any in work in progress when init and cars added', function () {
            let service = new AutoService(123);

            service.signUpForReview('kolio', 'SV2332MS', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' })

            assert.lengthOf(service.workInProgress, 1);
        })
    });

    describe('availableSpace', () => {
        let service;

        beforeEach(() => {
            service = new AutoService(2);
        })

        it('should return right number with 1 car in it', () => {
            service.signUpForReview('kolio', 'SV2332MS', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' })

            let result = service.availableSpace;

            assert.equal(result, 1);
        })
    })

    describe('signUpForReview', () => {
        let service;

        beforeEach(() => {
            service = new AutoService(1);
        })

        it('should add car to workInProgress when empty', () => {
            let client = {
                plateNumber: "SV2332MS",
                clientName: "kolio",
                carInfo: { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }
            }

            service.signUpForReview('kolio', 'SV2332MS', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' })

            assert.isNotEmpty(service.workInProgress);
            assert.lengthOf(service.workInProgress, 1)
        });

        it('should not add car to workInProgress when full', () => {
            let client1 = {
                plateNumber: "SV2332MS",
                clientName: "kolio",
                carInfo: { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }
            }
            service.signUpForReview('kolio', "SV2332MS", { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' })
            service.signUpForReview('stamat', "SV2332MS", { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' })

            assert.isNotEmpty(service.workInProgress);
            assert.lengthOf(service.workInProgress, 1);
            assert.isNotEmpty(service.backlogWork)
            assert.lengthOf(service.backlogWork, 1);
        });
    })

    describe('carInfo', () => {
        let service;

        beforeEach(() => {
            service = new AutoService(1);
        })
        it('should return right car with right parameters', () => {
            service.signUpForReview('kolio', "SV2332MS", {})
            let client1 = {
                plateNumber: "SV2332MS",
                clientName: "kolio",
                carInfo: {}
            };

            let result = service.carInfo("SV2332MS", 'kolio');

            assert.equal(result.clientName, client1.clientName)
            assert.equal(result.plateNumber, client1.plateNumber)
            assert.deepEqual(result.carInfo, client1.carInfo)

        })

        it('should return message when wrong params are passed', () => {
            service.signUpForReview('kolio', "SV2332MS", {})
            let result = service.carInfo('123', 'stamat');

            assert.isNotObject(result);
            assert.equal(result, `There is no car with platenumber 123 and owner stamat.`)

        })

    });

    describe('repairCar', () => {
        let service;

        beforeEach(() => {
            service = new AutoService(1);
        })

        it('should repair car when there is broken items', () => {
            service.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            let result = service.repairCar();

            assert.equal(result, 'Your doors were repaired.')
        })
        it('should remove car from worklist when its repaired', () => {
            service.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            let result = service.repairCar();

            assert.lengthOf(service.workInProgress, 0);
            assert.isEmpty(service.workInProgress)
        })
        it('should return right message when there is nothing to repair', () => {
            service.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ' });

            let result = service.repairCar();

            assert.equal(result, 'Your car was fine, nothing was repaired.');
        })
        it('should return right message when there is no cars to in workInProggress', () => {

            let result = service.repairCar();

            assert.equal(result, 'No clients, we are just chilling...')
        })
        it('should remove repaired car from list when its repaired', () => {
            service.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            let result = service.repairCar();

            assert.lengthOf(service.workInProgress, 0)
        })
        it('should take car from backlog when workinprogress is empty', () => {
            service.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ' });
            service.signUpForReview('stamat', 'CA1234CA', { 'engine': 'MFRGG24', 'transmission': 'FF4418ZZ', 'doors': 'broken' });

            let result = service.repairCar();
            let result2 = service.repairCar();
            assert.lengthOf(service.workInProgress, 0);
            assert.isEmpty(service.workInProgress);
            assert.lengthOf(service.backlogWork, 0)
            assert.isEmpty(service.backlogWork);

        })
    })
})