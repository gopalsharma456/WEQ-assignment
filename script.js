document
  .getElementById("pricingToggle")
  .addEventListener("change", function () {
    // Get the pricing elements
    const starterPrice = document.getElementById("starterPrice");
    const standardPrice = document.getElementById("standardPrice");
    const supremePrice = document.getElementById("supremPrice");
    const periodElements = document.querySelectorAll(".per-month");

    const monthlyPrices = {
      starter: 2.8,
      standard: 4.2,
      supreme: 7.0,
    };

    const yearlyPrices = {
      starter: (monthlyPrices.starter * 12 * 0.8).toFixed(2),
      standard: (monthlyPrices.standard * 12 * 0.8).toFixed(2),
      supreme: (monthlyPrices.supreme * 12 * 0.8).toFixed(2),
    };

    if (this.checked) {
      // Switch to yearly pricing
      starterPrice.textContent = `$${yearlyPrices.starter}`;
      standardPrice.textContent = `$${yearlyPrices.standard}`;
      supremePrice.textContent = `$${yearlyPrices.supreme}`;
      periodElements.forEach((element) => {
        element.textContent = "Per Year";
      });
    } else {
      // Switch to monthly pricing
      starterPrice.textContent = `$${monthlyPrices.starter}`;
      standardPrice.textContent = `$${monthlyPrices.standard}`;
      supremePrice.textContent = `$${monthlyPrices.supreme}`;

      periodElements.forEach((element) => {
        element.textContent = "Per Month";
      });
    }
  });
