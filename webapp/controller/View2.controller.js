sap.ui.define([
    "sap/ui/core/mvc/Controller",'sap/m/MessageToast'
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("view2").attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function(oEvent) {
            var oParams = oEvent.getParameter("arguments");
            var sButtonId = oParams.buttonId;            
            // Display a notification or perform other actions based on buttonId
            if (sButtonId === "_IDGenButton1") {
                // Show notification or do something for button1
                //MessageToast.show("You came from Button 1");
            } else  {
                // Show notification or do something for button2
               //MessageToast.show("You came from Button 2");
            }
              
     
            //creating text as a link dynamically 
            var sentence =this.byId("_IDGenText").getText();
            MessageToast.show(sentence);
           
            // Display the formatted sentence in an appropriate control
             this.getView().byId("_IDGenText").setText(sentence);

             
            
        },
        onPress: function (evt) {
            MessageToast.show( "tile Pressed");}
		
      });
        
    });
