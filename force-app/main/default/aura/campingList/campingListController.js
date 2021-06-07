({
  clickCreateItem: function (component, event, helper) {
    let validExpense = component
      .find("Campingform")
      .reduce(function (validSoFar, inputCmp) {
        // Displays error messages for invalid fields
        inputCmp.showHelpMessageIfInvalid();
        return validSoFar && inputCmp.get("v.validity").valid;
      }, true);
    // If we pass error checking, do some real work
    if (validExpense) {
      // Create the new camping
      let newCamping = component.get("v.newItem");
      let theCampings = component.get("v.items");
      console.log("Create camping: " + JSON.stringify(newCamping));
      console.log("Campings before 'create': " + JSON.stringify(theCampings));
      theCampings.push(newCamping);
      component.set("v.items", theCampings);
      console.log("Campings after 'create': " + JSON.stringify(theCampings));
      component.set("v.newItem", {
        sobjectType: "Camping_Item__c",
        Name: "",
        Quantity__c: 0,
        Price__c: 0,
        Packed__c: false,
      });
    }
  },
});
