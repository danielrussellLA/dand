<template>
<div class="budget-calculator">
    <NavBar />
    <div class="wrapper">
        <div class='content'>
            <transition name="change-state" v-on:after-enter="autofocus">
                <div v-if="state == 'salary'">
                    <div>
                        $ Yearly Salary 
                    </div>
                    <form v-on:submit.prevent="changeState('expenses')">
                        <input type='text' v-model="salary" placeholder="salary" autofocus/>
                    </form>
                </div>
            </transition>
            
            <transition name="change-state" v-on:after-enter="autofocus">
                <div v-if="state == 'expenses'">
                    <div>
                        $ Monthly Expenses 
                    </div>
                    <form v-on:submit.prevent="changeState('goal')">
                        <input type='text' v-model="expenses" placeholder="expenses" autofocus/>
                    </form>
                </div>
            </transition>
            
            <transition name="change-state" v-on:after-enter="autofocus">
                <div v-if="state == 'goal'">
                    <div>
                        $ Monthly Savings Goal
                    </div>
                    <form v-on:submit.prevent="changeState('result')">
                        <input type='text' v-model="goal" placeholder="goal" autofocus/>
                    </form>
                </div>
            </transition>
            
            <transition name="change-state">
                <div v-if="state == 'result'">
                    <h1>{{ calculatePercentToGoal() }}% to goal</h1>
                    <p>
                        ${{ calculateDollarToGoal() }} to goal
                    </p>
                </div>
            </transition>
            <!-- <button class="calculate">calculate</button> -->
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../shared/NavBar';
import moment from 'moment';

// TODO: port this data in from vuex store
import data from '../../../schema/BudgetCalculator.json'

export default {
    name: 'BudgetCalcuator',
    components: {
        NavBar
    },
    data() {
        return {
            salary: '',
            expenses: '',
            goal: '',
            state: 'salary'
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
        },
        changeState(param) {
            this.state = param;
        },
        autofocus() {
            document.querySelector('input').focus()
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
    
    .change-state-enter-active, .change-state-leave-active {
        transition: opacity .5s
    }
    .change-state-enter, .change-state-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style>
