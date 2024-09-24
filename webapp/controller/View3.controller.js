sap.ui.define([
    "sap/ui/core/mvc/Controller",'sap/m/MessageToast','sap/ui/model/json/JSONModel',
	'sap/m/library'
],
    function (Controller,MessageToast,JSONModel,library) {
        "use strict";
    var BreadcrumbsSeparatorStyle = library.BreadcrumbsSeparatorStyle;
    return Controller.extend("project1.controller.View3", {
        onInit: function () {

            var oMData = [],
            oModel = new JSONModel();

        Object.keys(BreadcrumbsSeparatorStyle).forEach(function (item) {
            oMData.push({
                'key': item,
                'text': BreadcrumbsSeparatorStyle[item]
            });
        });

        oModel.setData({ items: oMData });
        this.getView().setModel(oModel);
    },
     
        onPress : function(oEvent){
            MessageToast.show(oEvent.getSource().getText() + ' has been clicked');
        },

        //getting method from event bus
        onClick: function(){

         //get the event bus
         var oEventBus = this.getOwnerComponent().getEventBus().publish("onClick");

         //get the onClick method out of the event bus
         oEventBus.publish("onClick");

        }


    });
        
});
