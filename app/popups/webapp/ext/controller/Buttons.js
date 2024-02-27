sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        create: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
       
            debugger
            var autoid = "";
            autoid += Math.round(Math.random() * 9);
            autoid += Math.round(Math.random() * 9);
            this.loadFragment({
                id: "Create",
                name: "popups.ext.controller.create",
            }).then(function (oDialog) {
              
                sap.ui.getCore().byId("Create--helloDialog").mAggregations.content[0].mAggregations.items[1].setValue(autoid)
                oDialog.open();
            });
        },
        SAVE: function(oEvent) {
            debugger
            MessageToast.show("saved successfully");
            var autoid = "";
            autoid += Math.round(Math.random() * 9);
        //   var id = oEvent.oSource.oParent.oParent.mAggregations.items[1].mProperties.value;
          var sname = oEvent.oSource.oParent.oParent.mAggregations.items[3].mProperties.value;
          var snum = oEvent.oSource.oParent.oParent.mAggregations.items[5].mProperties.value;
            let testdata = JSON.stringify({ id:id,sname:sname,snum:snum });
            // let id2 = parseInt(id)
;
            // let name2 = parseInt(name);
            $.ajax({
                url: '/odata/v4/my/stud',
                type: 'POST',
                contentType: 'application/json',
                data: testdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                    var des = oEvent.oSource.getParent().getParent().getParent().close()
                    des.destroy()
                    location.reload()
                    // des.close()
                    //close()        // with out variable complete application is closed.
                    // destroy()                 
                },
              
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
        },

        CANCEL: function(oEvent) {
            debugger
            var des = oEvent.oSource.getParent().getParent().getParent().close()
            des.close()
            des.destroy()
        },

        

        Edit: function(oEvent) {
            // MessageToast.show("Custom handler invoked.");
        debugger
        var id = oEvent.oSource.oParent.oParent.mAggregations.items[1].mProperties.value;
        var sname = oEvent.oSource.oParent.oParent.mAggregations.items[3].mProperties.value;
        var snum = oEvent.oSource.oParent.oParent.mAggregations.items[5].mProperties.value;
          let testdata = JSON.stringify({ id:id,sname:sname,snum:snum });
          var url = '/odata/v4/my/stud/' + id;
          $.ajax({
            url: url,
            type: 'PUT',
            contentType: 'application/json',
            data: testdata, 
            success: function(data) {
                debugger
                // Handle success
                console.log(data);
                var des = oEvent.oSource.getParent().getParent().getParent().close()
                des.destroy()
                location.reload()
                // des.close()
                //close()        // with out variable complete application is closed.
                // destroy()                 
            },
          
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle error
                console.error(textStatus, errorThrown);
            }
        })

        },


        }
});
