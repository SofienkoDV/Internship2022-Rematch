const invoice = {
    firstName: 'Node',
    lastName: 'Developer',
    createdAt: '2022-10-31T22:50:59.305Z',
    amount: 150,
    currency: 'USD',
};

// 1. Log firstName and lastName in dot notation and bracket notation

console.log(`First name: ${invoice.firstName}`);
console.log(`Last name: ${invoice.lastName}`);

// 2. Log Object Keys

const keys = Object.keys(invoice);

console.log({ keys });

// 3. Log Object values

const values = Object.values(invoice);

console.log({ values });

// 4. Log Object entries

const entries = Object.entries(invoice);

console.log({ entries });

// 5. Create second variable invoice from original
// Please, use more than one solution

const copiedInvoice = { ...invoice };
// const copiedInvoice2 = Object.assign({}, invoice);
const copiedInvoice3 = JSON.parse(JSON.stringify(invoice));
const copiedInvoice4 = Object.create(invoice);
// const copiedInvoice5 = new Object(invoice);
const copiedInvoice6 = Object.create(
    Object.getPrototypeOf(invoice),
    Object.getOwnPropertyDescriptors(invoice),
);
const copiedInvoice7 = Object.create(
    invoice,
    Object.getOwnPropertyDescriptors(invoice),
);

console.log({
    copiedInvoice,
    // copiedInvoice2,
    copiedInvoice3,
    copiedInvoice4,
    // copiedInvoice5,
    copiedInvoice6,
    copiedInvoice7,
});

// 6. Modify copiedInvoice amount value
// Important: original invoice amount shouldn't be modified

// const copiedInvoice = { ...invoice };
copiedInvoice.amount = 200;

console.log({ invoice, copiedInvoice });

// 7. Loop through object and log key-values

Object.entries(invoice).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
