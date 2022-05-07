//Create HTML for Groups

const groupHtml = (minlabel, minvalue, majlabel, majvalue, comparisonlabel, comparisonvalue, budgetvalue) =>
` 
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="gender" role="tabpanel" aria-labelledby="gender-tab">
    <div class="row row-cols-3 g-4 mt-2">
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Pay Equity Gap</h3>
                    <p class="card-text">${minlabel} earn <b>${minvalue} </b> for every <b>${majvalue}</b> earned by comparable ${majlabel}</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Employees in Comparison</h3>
                    <p class="card-text">${comparisonlabel} make up <b>${comparisonvalue}</b> of employees</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="card-title">Budget</h3>
                    <p class="card-text"><b>${budgetvalue}</b> minimum recommended budget to reduce pay equity gap</p>
                </div>
            </div>
        </div>
    </div>
</div>
`
//Use Functions for Different Groups
const select = document.querySelector('select');
select.addEventListener('change', setGroups);

function setGroups() {
    const choice = select.value;

    if (choice === 'function') {
        groupByFunctionGender();
        groupByFunctionRace();
    } else if (choice === 'role') {
        groupByRoleGender();
        groupByRoleRace();
    }
}

//Gender
async function groupByFunctionGender () {

        await fetch ('https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8')

        .then(res => res.json()) //Parse response as JSON data
        .then(data => { //use JSON data
            console.log(data)
            const genderFunction = new GroupByFunctionGender(data)
            genderFunction.showGenderInfo(data);
        })
        .catch(error => console.log(error))
}

async function groupByRoleGender () {

    await fetch ('https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a')

    .then(res => res.json()) //Parse response as JSON data
    .then(data => { //use JSON data
        console.log(data)
        const genderRole = new GroupByRoleGender(data);
        genderRole.showGenderInfo(data);
    })
    .catch(error => console.log(error))
}

class GroupByFunctionGender {
    constructor(data) { //Pass in gender data
        this.minlabel = data.data.gender.payEquityGap.data.minority.label
        this.minvalue = data.data.gender.payEquityGap.data.minority.value
        this.majlabel = data.data.gender.payEquityGap.data.majority.label
        this.majvalue = data.data.gender.payEquityGap.data.majority.value
        this.comparisonlabel = data.data.gender.employeeComparison.data.label
        this.comparisonvalue = data.data.gender.employeeComparison.data.value
        this.budgetvalue = data.data.gender.budget.data.value
    }

    showGenderInfo() {
        const genderFunctionHtml = groupHtml(this.minlabel, this.minvalue, this.majlabel, this.majvalue, this.comparisonlabel, this.comparisonvalue, this.budgetvalue);
        let genderFunctionGroup = genderFunctionHtml;
        document.getElementById('gender').innerHTML = genderFunctionGroup;
    }
}

class GroupByRoleGender {
    constructor(data) { //Pass in gender data
        this.minlabel = data.data.gender.payEquityGap.data.minority.label
        this.minvalue = data.data.gender.payEquityGap.data.minority.value
        this.majlabel = data.data.gender.payEquityGap.data.majority.label
        this.majvalue = data.data.gender.payEquityGap.data.majority.value
        this.comparisonlabel = data.data.gender.employeeComparison.data.label
        this.comparisonvalue = data.data.gender.employeeComparison.data.value
        this.budgetvalue = data.data.gender.budget.data.value
    }

    showGenderInfo() {
        const genderRoleHtml= groupHtml(this.minlabel, this.minvalue, this.majlabel, this.majvalue, this.comparisonlabel, this.comparisonvalue, this.budgetvalue);
        let genderRoleGroup = genderRoleHtml;
        document.getElementById('gender').innerHTML = genderRoleGroup;
    }
}

//Race
async function groupByFunctionRace () {

        await fetch ('https://run.mocky.io/v3/a9f6a4b7-d03c-4a45-b64b-791e054f36b8')

        .then(res => res.json()) //Parse response as JSON data
        .then(data => { //use JSON data
            console.log(data)
            const raceFunction = new GroupByFunctionRace(data)
            raceFunction.showRaceInfo(data);
        })
        .catch(error => console.log(error))
}

async function groupByRoleRace () {

        await fetch ('https://run.mocky.io/v3/f1b01b57-3147-476a-a632-0c10ad2a3c1a')

        .then(res => res.json()) //Parse response as JSON data
        .then(data => { //use JSON data
            console.log(data)
            const raceRole = new GroupByRoleRace(data)
            raceRole.showRaceInfo(data);
        })
        .catch(error => console.log(error))
}

class GroupByRoleRace {
    constructor(data) { //Pass in race data
        this.minlabel = data.data.race.payEquityGap.data.minority.label
        this.minvalue = data.data.race.payEquityGap.data.minority.value
        this.majlabel = data.data.race.payEquityGap.data.majority.label
        this.majvalue = data.data.race.payEquityGap.data.majority.value
        this.comparisonlabel = data.data.race.employeeComparison.data.label
        this.comparisonvalue = data.data.race.employeeComparison.data.value
        this.budgetvalue = data.data.race.budget.data.value
    }

    showRaceInfo() {
        const raceRole = groupHtml(this.minlabel, this.minvalue, this.majlabel, this.majvalue, this.comparisonlabel, this.comparisonvalue, this.budgetvalue);
        let raceRoleGroup = raceRole;
        document.getElementById('race').innerHTML = raceRoleGroup;
    }
}

class GroupByFunctionRace {
    constructor(data) { //Pass in race data
        this.minlabel = data.data.race.payEquityGap.data.minority.label
        this.minvalue = data.data.race.payEquityGap.data.minority.value
        this.majlabel = data.data.race.payEquityGap.data.majority.label
        this.majvalue = data.data.race.payEquityGap.data.majority.value
        this.comparisonlabel = data.data.race.employeeComparison.data.label
        this.comparisonvalue = data.data.race.employeeComparison.data.value
        this.budgetvalue = data.data.race.budget.data.value
    }

    showRaceInfo() {
        const raceFunctionHtml = groupHtml(this.minlabel, this.minvalue, this.majlabel, this.majvalue, this.comparisonlabel, this.comparisonvalue, this.budgetvalue);
        let raceFunctionGroup = raceFunctionHtml;
        document.getElementById('race').innerHTML = raceFunctionGroup;
    }
}

  
  