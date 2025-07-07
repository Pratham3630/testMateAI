function generateAIInsight() {
  const input = document.getElementById("inputText").value.trim();

  if (!input) {
    alert("Please paste test steps or logs first.");
    return;
  }

  // Simulate AI responses for now (you'll replace later with smarter logic or GPT API)
  document.getElementById("bugSummary").querySelector("p").textContent =
    "Likely a null pointer issue due to missing object instantiation during checkout flow.";
  
  document.getElementById("fixSuggestion").querySelector("p").textContent =
    "Add null checks and validate object creation before triggering the checkout event.";

  document.getElementById("regressionScope").querySelector("p").textContent =
    "Retest payment flow, cart update, and guest checkout paths.";

  document.getElementById("automationImpact").querySelector("p").textContent =
    "Update Playwright scripts to assert null-safe objects. Add negative test for empty cart checkout.";
}
