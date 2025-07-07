function generateAIInsight() {
  const input = document.getElementById("inputText").value.trim();
  if (!input) {
    alert("Please paste test steps or logs first.");
    return;
  }

  const bugSummaries = [
    "Null reference error during login submission flow.",
    "Unexpected timeout when fetching API data.",
    "State object not reset between test runs.",
    "Missing validation on input field causing crash."
  ];

  const fixSuggestions = [
    "Add null checks and ensure object instantiation.",
    "Refactor async call with better error handling.",
    "Reset test environment state after each run.",
    "Add frontend validation for user input fields."
  ];

  const regressionScopes = [
    "Retest login, signup, and session handling.",
    "Verify all API error cases and network failures.",
    "Run all UI state-based test cases again.",
    "Cover edge cases for empty and invalid inputs."
  ];

  const automationImpacts = [
    "Update assertion logic in Playwright tests.",
    "Mock API responses to avoid real delays.",
    "Add cleanup hooks in beforeEach and afterEach.",
    "Include test for invalid form data submission."
  ];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  document.getElementById("bugSummary").querySelector("p").textContent = getRandom(bugSummaries);
  document.getElementById("fixSuggestion").querySelector("p").textContent = getRandom(fixSuggestions);
  document.getElementById("regressionScope").querySelector("p").textContent = getRandom(regressionScopes);
  document.getElementById("automationImpact").querySelector("p").textContent = getRandom(automationImpacts);
}

function fillSample() {
  const sample = `1. Navigate to checkout page
2. Add item to cart
3. Click “Pay Now” → observe error
4. JS console shows TypeError: Cannot read property 'id' of undefined`;
  document.getElementById("inputText").value = sample;
}

function copyInsights() {
  const blocks = document.querySelectorAll(".output-block p");
  const text = Array.from(blocks).map(p => p.textContent).join("\n\n");
  navigator.clipboard.writeText(text).then(() => {
    alert("Insights copied to clipboard!");
  });
}
