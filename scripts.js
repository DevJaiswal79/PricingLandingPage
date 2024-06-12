document.addEventListener('DOMContentLoaded', () => {
    const pricingOptions = document.querySelectorAll('.pricing-option');

    pricingOptions.forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.style.backgroundColor = '#f0f0f0';
        });

        option.addEventListener('mouseleave', () => {
            option.style.backgroundColor = '#fff';
        });
    });

    const exchangeRates = {
        USD: 1,
        EUR: 0.93,
        RS: 83.57,
    };

    const currencySelector = document.getElementById('currency-selector');
    const billingCycleSelector = document.getElementById('billing-cycle');

    currencySelector.addEventListener('change', updatePrices);
    billingCycleSelector.addEventListener('change', updatePrices);

    function updatePrices() {
        const selectedCurrency = currencySelector.value;
        const symbol = currencySelector.options[currencySelector.selectedIndex].getAttribute('data-symbol');
        const rate = exchangeRates[selectedCurrency];
        const billingCycle = billingCycleSelector.value;

        pricingOptions.forEach(option => {
            const basePrice = parseFloat(option.getAttribute(`data-price-${billingCycle}`));
            const convertedPrice = (basePrice * rate).toFixed(2);
            option.querySelector('.price').innerHTML = `${symbol}${convertedPrice}<span>/${billingCycle}</span>`;
        });
    }

    updatePrices();
});
