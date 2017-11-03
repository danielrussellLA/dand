<template>
<div class="budget-calculator">
    <NavBar />
    <div class="wrapper">
        <div class='content'>
            <h1>{{ calculatePercentToGoal() }}% to goal</h1>
            <p>
                ${{calculateDollarToGoal()}}
            </p>
            $ Yearly Salary <input type='text' v-model="salary" placeholder="salary"/><br />
            $ Monthly Expenses <input type='text' v-model="expenses" placeholder="expenses"/><br />
            $ Monthly Savings Goal <input type='text' v-model="goal" placeholder="goal"/><br />
            
            <button class="calculate">calculate</button>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../shared/NavBar';
import moment from 'moment';

// TODO: port this data in from vuex store
import data from '../../../schema/BudgetCalculator.json'

// step 1: ask them how much their yealry salary is
// step 2: calculate tax rate
// step 3: ask to enter their monthly expenses
// step 4: show % to goal and dollar to goal

export default {
    name: 'BudgetCalcuator',
    components: {
        NavBar
    },
    data() {
        return {
            salary: 0,
            expenses: 0,
            goal: 0
        }
    },
    methods: {
        calculatePercentToGoal() {
            let result = Math.round((((this.salary / 12 - (this.salary / 12 * (33/100))) - this.expenses) / this.goal) * 100)
            return parseInt(result) || 0
        },
        calculateDollarToGoal() {
            let result = Math.round(this.goal - ((this.salary / 12 - (this.salary / 12 * (33/100))) - this.expenses))
            return result > 0 ? result : 0
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .budget-calculator {
        height: 100%;
    }
    .wrapper {
        margin: 10px 10px 100px 10px;
    }
    .content {
        max-width: 800px;
        margin: auto;
        text-align: center;
    }
    .image {
        width: 100%;
    }
</style>
