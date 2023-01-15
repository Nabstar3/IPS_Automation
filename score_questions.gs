const vacationQuestion = e.values[8]

let vacationScore = createVacationScore(vacationQuestion)

function createVacationScore(vacationQuestion){
    answer = vacationQuestion

    if (answer === 'Take a much more modest vacation'){
        return 2
    }

    elif (answer === 'Go as scheduled, reasoning that you need the time to prepare for a job search'){
        return 1
    }
}


const investQuestion = e.values[9]

let investScore = createInvestScore(investQuestion)

function createInvestScore(investQuestion){
    answer = investQuestion

    if (answer === 'Invest in stocks or stock mutual funds'){
        return 2
    }

    elif (answer === 'Deposit it in a bank account, money market, or CD/GIC'){
        return 1
    }
}


const riskQuestion = e.values[10]

let investScore = createInvestScore(investQuestion)

function createInvestScore(investQuestion){
    answer = investQuestion

    if (answer === 'Invest in stocks or stock mutual funds'){
        return 2
    }

    elif (answer === 'Deposit it in a bank account, money market, or CD/GIC'){
        return 1
    }
}
