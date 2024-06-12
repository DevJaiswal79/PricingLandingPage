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

    const currencySelector = document.createElement('select');
    currencySelector.innerHTML = `
        <option value="$">$ USD</option>
        <option value="€">€ EUR</option>
        <option value="₹">₹ Rs</option>
    `;
    document.querySelector('header').appendChild(currencySelector);

    currencySelector.addEventListener('change', (event) => {
        const currencySymbol = event.target.value;
        document.querySelectorAll('.price').forEach(price => {
            price.innerHTML = price.innerHTML.replace(/^\D/, currencySymbol);
        });
    });
});
