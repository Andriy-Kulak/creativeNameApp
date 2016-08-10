define(["require", "exports", 'components/models/creative.model'], function (require, exports, CreativeModel) {
    "use strict";
    'use strict';
    describe('creative model', function () {
        var model;
        var testConcat;
        beforeEach(function () {
            model = new CreativeModel();
        });
        it(" should initialize correctly", function () {
            expect(model).toBeDefined();
        });
        it("properties should initialize correctly", function () {
            expect(model.hasOwnProperty('id'));
            expect(model.hasOwnProperty('creativeName'));
            expect(model.hasOwnProperty('product'));
            expect(model.hasOwnProperty('dateCreated'));
            expect(model.hasOwnProperty('creativecategory'));
            expect(model.hasOwnProperty('intendedscreen'));
            expect(model.hasOwnProperty('creativetype'));
            expect(model.hasOwnProperty('creativemessage'));
            expect(model.hasOwnProperty('size'));
            expect(model.hasOwnProperty('abtestlabel'));
            expect(model.hasOwnProperty('creativeversion'));
            expect(model.hasOwnProperty('videolength'));
            expect(model.hasOwnProperty('creativeops'));
            expect(model.hasOwnProperty('text'));
            expect(model.hasOwnProperty('dateCreated'));
            expect(model.hasOwnProperty('getCreativeName'));
        });
        it(" should prevent you from inputting a length that is > 4 characters", function () {
            expect(model).toBeDefined();
        });
        it(" should be able to generate a creative name, given correct inputs. TEST with creative Message", function () {
            model.campaignName = "CN";
            model.mediaType = { id: 1, code: "MT", name: "MT" };
            model.sizeHeight = 25;
            model.sizeWidth = 50;
            model.lob = { id: 1, code: "LOB", name: "MT" };
            model.videoLength = { id: 1, code: "VL", name: "MT" };
            model.product = { id: 1, code: "Prod", name: "MT" };
            model.abTestLabel = { id: 1, code: "ABTest", name: "MT" };
            model.creativeCategories = { id: 1, code: "CC", name: "MT" };
            model.intendedScreen = { id: 1, code: "IS", name: "MT" };
            model.creativeOps = { id: 1, code: "CO", name: "MT" };
            model.creativeType = { id: 1, code: "CT", name: "MT" };
            model.creativeMessage = "CM";
            model.campaignName = "CN";
            model.creativeVersion = 4;
            model.dateCreated = Date.now();
            model.getCreativeName(); // run the concat function within model
            expect(model.text).toBe('MT_LOB_Prod_CC_IS_CT_CM_50_25_ABTest_4_VL_CO');
        });
        it(" should be able to generate a creative name, given correct inputs. TEST WITHOUT creative Message", function () {
            model.campaignName = "CN";
            model.mediaType = { id: 1, code: "MT", name: "MT" };
            model.sizeHeight = 25;
            model.sizeWidth = 50;
            model.lob = { id: 1, code: "LOB", name: "MT" };
            model.videoLength = { id: 1, code: "VL123", name: "MT" };
            model.product = { id: 1, code: "Prod", name: "MT" };
            model.abTestLabel = { id: 1, code: "ABTest123", name: "MT" };
            model.creativeCategories = { id: 1, code: "CC", name: "MT" };
            model.intendedScreen = { id: 1, code: "IS", name: "MT" };
            model.creativeOps = { id: 1, code: "CO", name: "MT" };
            model.creativeType = { id: 1, code: "CT", name: "MT" };
            model.creativeMessage;
            model.campaignName = "CN123";
            model.creativeVersion = 4;
            model.dateCreated = Date.now();
            model.getCreativeName();
            expect(model.text).toBe('MT_LOB_Prod_CC_IS_CT_X_50_25_ABTest123_4_VL123_CO');
        });
    });
});
//# sourceMappingURL=creative.model.spec.js.map