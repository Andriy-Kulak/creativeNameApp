/* jshint strict: true */
/* jshint jasmine: true */

import CreativeService = require('components/services/creative.service');
import app = require('modules/creative/creative.module');

describe('Creative Service', function () {

    beforeEach(function () {
        angular.mock.module('creative.module');

        angular.mock.module(function ($provide) {
            $provide.service('CreaitveService', CreativeService);
        });

        inject(function ($injector) {
            service = $injector.get('CreaitveService');
            httpBackend = $injector.get('$httpBackend');
        });
    }
    );

    var httpBackend: ng.IHttpBackendService;
    var service;

    it(" needs to be initialized", () => {
        expect(service).toBeDefined();
    });

    it("should get list of Creative Ops options", () => {
        httpBackend.whenGET("/api/creativeops").respond([
            { "id": 1, "name": "Secure", "code": "SE" }, { "id": 2, "name": "Google", "code": "GO" }, { "id": 3, "name": "Amazon", "code": "AZ" }, { "id": 4, "name": "SpongeCell", "code": "SC" }, { "id": 5, "name": "Flashtalking", "code": "FT" }, { "id": 6, "name": "BackUp (creative)", "code": "BU" }, { "id": 7, "name": "Tracking Pixel", "code": "TP" }, { "id": 8, "name": "NA", "code": "X" }
        ]);

        service.getCreativeOps().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("Secure");
            expect(response.data[0].code).toEqual("SE");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available lob options", () => {
        httpBackend.whenGET("/api/lobs").respond([
            { "id": 1, "name": "Secure", "code": "SE" }, { "id": 2, "name": "Google", "code": "GO" }, { "id": 3, "name": "Amazon", "code": "AZ" }, { "id": 4, "name": "SpongeCell", "code": "SC" }, { "id": 5, "name": "Flashtalking", "code": "FT" }, { "id": 6, "name": "BackUp (creative)", "code": "BU" }, { "id": 7, "name": "Tracking Pixel", "code": "TP" }, { "id": 8, "name": "NA", "code": "X" }
        ]);

        service.getLOBs().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("Secure");
            expect(response.data[0].code).toEqual("SE");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Intended Screens", () => {
        httpBackend.whenGET("/api/intendedscreens").respond([
            { "id": 1, "name": "Desktop", "code": "DTP" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);
    
        service.getIntendedScreens().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("Desktop");
            expect(response.data[0].code).toEqual("DTP");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Products", () => {
        httpBackend.whenGET("/api/lobs").respond([
            { "id": 1, "name": "Prod Test", "code": "DTP" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getLOBs().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("Prod Test");
            expect(response.data[0].code).toEqual("DTP");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Creative Categories", () => {
        httpBackend.whenGET("/api/lobs").respond([
            { "id": 1, "name": "CreativeCat", "code": "DTP" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getLOBs().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("CreativeCat");
            expect(response.data[0].code).toEqual("DTP");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Video Lengths", () => {
        httpBackend.whenGET("/api/videolengths").respond([
            { "id": 1, "name": "Video Length Test", "code": "VLT" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getVideoLengths().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("Video Length Test");
            expect(response.data[0].code).toEqual("VLT");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available A/B Test Labels", () => {
        httpBackend.whenGET("/api/abtestlabels").respond([
            { "id": 1, "name": "AbTest", "code": "ABTT" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getAbTestLabels().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("AbTest");
            expect(response.data[0].code).toEqual("ABTT");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Creative Ops", () => {
        httpBackend.whenGET("/api/creativeops").respond([
            { "id": 1, "name": "CreativeOpsTest", "code": "COT" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getCreativeOps().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("CreativeOpsTest");
            expect(response.data[0].code).toEqual("COT");
        })
        httpBackend.flush();
    });

    it("should be able to get a list of available Creative Types", () => {
        httpBackend.whenGET("/api/creativetypes").respond([
            { "id": 1, "name": "CreativeTest", "code": "CT" }, { "id": 2, "name": "Tablet", "code": "MBT" }, { "id": 3, "name": "Smartphone", "code": "MOB" }, { "id": 4, "name": "Connected TV", "code": "OTC" }
        ]);

        service.getCreativeTypes().then(function (response) {
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0].id).toEqual(1);
            expect(response.data[0].name).toEqual("CreativeTest");
            expect(response.data[0].code).toEqual("CT");
        })
        httpBackend.flush();
    });
});