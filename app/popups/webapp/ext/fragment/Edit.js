sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");

            debugger
            this.loadFragment({
                id: "edit",
                name: "popups.ext.controller.edit",
            }).then(function (oDialog) {
                var v1 = oEvent.getSource().getParent().getCells()[0].mProperties.text;
                var v2 = oEvent.getSource().getParent().getCells()[1].mProperties.text;
                var v3 = oEvent.getSource().getParent().getCells()[2].mProperties.text;
                sap.ui.getCore().byId("edit--helloDialog").mAggregations.content[0].mAggregations.items[1].setValue(v1).setEditable(false)
                sap.ui.getCore().byId("edit--helloDialog").mAggregations.content[0].mAggregations.items[3].setValue(v2)
                sap.ui.getCore().byId("edit--helloDialog").mAggregations.content[0].mAggregations.items[5].setValue(v3)

                oDialog.open();
            });
        },
    };
});
