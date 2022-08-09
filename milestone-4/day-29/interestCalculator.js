// Simple Interest Rate Calculation Logic ( a=p(1+rt). Here a = final amount, p = initial principal balance, r = annual interest rate, t	= time (in years) )

function simpleInterest ( p, r, t ) {
    const principalBalance = p;
    const annualInterestRate = r;
    const time = t;

    const finalAmount = principalBalance * ( 1 + ( annualInterestRate / 100 ) * time );

    return finalAmount;
}

const finalAmount = simpleInterest( 100, 10, 2 );
console.log( finalAmount );





// Compound / Complex Interest Calculator. Using the formula A = P(1 + r/n)nt   ( Principal (P), Annual Rate (R): %, Compound (n): Annually, Time (t in years) )

function compoundInterest( principalBalance, annualRate, compound, time) {

    const p  = principalBalance;
    const r  = annualRate / 100;
    const n  = compound;
    const nt = time;

    const finalAmount = p * Math.pow( ( 1 + r / n ), nt );


    return finalAmount;
}

const compoundInterestFinalAmount = compoundInterest( 1000, 10, 1, 2 );
console.log( compoundInterestFinalAmount );

const compoundInterestFinalAmount2 = compoundInterest( 150, 20, 1, 5 );
console.log( compoundInterestFinalAmount2 );