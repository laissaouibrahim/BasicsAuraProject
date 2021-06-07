({
	 packItem : function(component, event, helper) {
        let newMessage = event.getSource().get("v.label");
        console.log("packItem : v.item.Packed__c: " + newMessage);
        component.set("v.item.Packed__c", true);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
    },
})