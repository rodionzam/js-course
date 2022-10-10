import '../css/style.css'
import './plugins'
import locations from "./store/locations";
import formUI from "./views/form";
import ticketUI from "./views/tickets";
import currencyUI from "./views/currency";

document.addEventListener('DOMContentLoaded', () => {
    const form = formUI.form;

    // Events
    initApp();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })

    // Handlers
    async function initApp() {
        await locations.init();
        formUI.setAutocompleteData(locations.shortCitiesList);
    }

    async function onFormSubmit() {
        // Собрать данные
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        await locations.fetchTicket({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        });

        ticketUI.renderTickets(locations.lastSearch);
    }
});