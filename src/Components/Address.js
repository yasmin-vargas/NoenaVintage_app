// Assuming you have a function to fetch addresses from your database
const fetchAddressesFromDatabase = async () => {
    // Implement fetching logic
};

// Function to map an address to Shipmondo format
const mapAddressToShipmondoFormat = (address) => {
    return {
        name: address.name,
        attention: null,
        address1: address.address1,
        address2: address.address2 || null,
        zipcode: address.zipcode,
        city: address.city,
        country_code: address.countryCode,  // Ensure it's in ISO 3166-1 alpha-2 format
        email: address.email,
        mobile: address.mobile,
        telephone: address.telephone || null,
        instruction: null,
    };
};

// When creating or updating a shipment
const selectedShippingAddress = /* get selected shipping address from user input or state */;
const selectedBillingAddress = /* get selected billing address from user input or state */;

const shipTo = mapAddressToShipmondoFormat(selectedShippingAddress);
const billTo = mapAddressToShipmondoFormat(selectedBillingAddress || selectedShippingAddress);

const shipmentData = {
    // Other shipment data
    ship_to: shipTo,
    bill_to: billTo,
};

// Send shipmentData to Shipmondo
