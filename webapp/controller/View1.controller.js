sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Text",
    "sap/ui/core/library",
],
function (Controller,MessageToast) {
    "use strict";
    
	
    return Controller.extend("project1.controller.View1", {
        onInit: function () {

             // get the EventBus
             var oEventBus = this.getOwnerComponent().getEventBus();
               
            // put the onClick method into the EventBus
            oEventBus.subscribe("onClick", this.onClick, this);

        },
        
        onShowHello:function(oEvent) {
			
            var oRouter = this.getOwnerComponent().getRouter();
           oRouter.navTo("view2");
        //    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("view2", { buttonId: "_IDGenButton1" });
        
        //fetch the id of the button which invoked the function onShowHello()
        var buttonId = oEvent.getSource().getId().split("--").pop();
        

        // html formated text in json
         var odata=	
        "link: <a href=\"//https://nrg.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=5&homePage=%2FCM%2FT_NRG_KNOWLEDGE_TEMPLATE%2FVIEW%3Fitem_id%3D190959%26search_index%3D1&homePageEncoded=true\" target=\"_blank\" style=\"color:green; font-weight:600;\">link to sap.com</a> -refer>links open in a new window." +
         "<p>paragraph: <strong>strong</strong> and <em>emphasized</em>.</p>" +
        "list of</a> terms and descriptions</dd>";

        this.getView().getModel("device").setProperty("/",{ "FirstName":buttonId, "HTML":odata} );
            

		},
        onShowview:function(){
          
           var oRouter = this.getOwnerComponent().getRouter();
           oRouter.navTo("view2");
        },



        //dialog fragement
        onOpenDialog : function () {

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "project1.view.HelloDialog"
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		}
        // async onOpenDialog() {
        //     // create dialog lazily
        //     this.oDialog ??= await this.loadFragment({
        //         name: "project1.view.HelloDialog"
        //     });
        
        //     this.oDialog.open();
        // }
        ,
		
		onCloseDialog : function(){
			
		this.byId("helloDialog").close();
			},
			
		onOkayclick :function(){
				
				MessageToast.show("dialog button (okay) pressed");
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("view2");
				
			},

            //nw 
            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("view3");
            },

            //onClick event for new button (event bus demo)
            onClick: function(){
                MessageToast.show("the click event is initiated");
            }
            
          
      });
        
    });

