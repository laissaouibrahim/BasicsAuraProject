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
      // Create the new expense
      let newCamping = component.get("v.newItem");
      console.log("Create camping: " + JSON.stringify(newCamping));
      helper.createItem(component, newCamping);
    }
  },
  // Load expenses from Salesforce
  doInit: function (component, event, helper) {
    // Create the action
    let action = component.get("c.getItems");
    // Add callback behavior for when response is received
    action.setCallback(this, function (response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.items", response.getReturnValue());
      } else {
        console.log("Failed with state: " + state);
      }
    });
    // Send action off to be executed
    $A.enqueueAction(action);
  },
});
