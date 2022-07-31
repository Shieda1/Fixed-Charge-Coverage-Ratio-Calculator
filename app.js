// https://calculator.swiftutors.com/fixed-charge-coverage-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fixedChargeCoverageRadio = document.getElementById('fixedChargeCoverageRadio');
const EBITRadio = document.getElementById('EBITRadio');
const leasePaymentsRadio = document.getElementById('leasePaymentsRadio');
const interestPaymentsRadio = document.getElementById('interestPaymentsRadio');

let fixedChargeCoverage;
let EBIT = v1;
let leasePayments = v2;
let interestPayments = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

fixedChargeCoverageRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Lease Payments';
  variable3.textContent = 'Interest Payments';
  EBIT = v1;
  leasePayments = v2;
  interestPayments = v3;
  result.textContent = '';
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Charge Coverage';
  variable2.textContent = 'Lease Payments';
  variable3.textContent = 'Interest Payments';
  fixedChargeCoverage = v1;
  leasePayments = v2;
  interestPayments = v3;
  result.textContent = '';
});

leasePaymentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Charge Coverage';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Interest Payments';
  fixedChargeCoverage = v1;
  EBIT = v2;
  interestPayments = v3;
  result.textContent = '';
});

interestPaymentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Charge Coverage';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Lease Payments';
  fixedChargeCoverage = v1;
  EBIT = v2;
  leasePayments = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fixedChargeCoverageRadio.checked)
    result.textContent = `Fixed Charge Coverage = ${computeFixedChargeCoverage().toFixed(2)}`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEBIT().toFixed(2)}`;

  else if(leasePaymentsRadio.checked)
    result.textContent = `Lease Payments = ${computeLeasePayments().toFixed(2)}`;

  else if(interestPaymentsRadio.checked)
    result.textContent = `Interest Payments = ${computeInterestPayments().toFixed(2)}`;
})

// calculation

function computeFixedChargeCoverage() {
  return (Number(EBIT.value) + Number(leasePayments.value)) / (Number(interestPayments.value) + Number(leasePayments.value));
}

function computeEBIT() {
  return (Number(fixedChargeCoverage.value) * (Number(interestPayments.value) + Number(leasePayments.value))) - Number(leasePayments.value);
}

function computeLeasePayments() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeInterestPayments() {
  return ((Number(EBIT.value) + Number(leasePayments.value)) / Number(fixedChargeCoverage.value)) - Number(leasePayments.value);
}