<template>
<div class="budget-calculator">
    <NavBar />
    <div class="wrapper">
        <div class='content'>
            <div class='forms'>
                <div class='goal-container'>
                    <h1>Monthly Savings Goal</h1>    
                    <div class='input-box'>
                        <form>
                            $<input placeholder="0.00" v-model='goal.amount'/>
                        </form>
                    </div>
                </div>
                
                <div class='income-container'>
                    <h1>Monthly Income [total]</h1>    
                    <div class='input-box'>
                        <form v-on:submit.prevent='addIncome'>
                            <input placeholder="label" v-model='income.label'/>
                            $<input placeholder="0.00"v-model='income.amount'/>
                            <button>+ add income</button>
                        </form>
                    </div>
                    <div class='income-sources'>
                        <div v-for="income in incomeSources" class='income-source'>
                            <div>
                                {{ income.label }}
                            </div>
                            <div>
                                {{ income.amount }}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class='expenses-container'>
                    <h1>Monthly Expenses [total]</h1>
                    <div class='input-box'>
                        <form v-on:submit.prevent="addExpense">
                            <input placeholder="label" v-model='expense.label'/>
                            $<input placeholder="0.00" v-model='expense.amount'/>
                            <button>+ add expense</button>
                        </form>
                    </div>
                    <div class='expense-sources'>
                        <div v-for="expense in expenses" class='expense'>
                            <div>
                                {{ expense.label }}
                            </div>
                            <div>
                                {{ expense.amount }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class='budget-goals'>
                <h1>$36,000</h1>
                <h2>60%</h2>
                <div class='pie-chart'></div>
            </div>

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
            budgetGoal: '',
            expenses: [],
            incomeSources: [],
            goal: {
                amount: ''
            },
            income: {
                label: '',
                amount: ''
            },
            expense: {
                label: '',
                amount: ''
            }
        }
    },
    methods: {
        addIncome() {
            this.incomeSources.push({
                label: this.income.label,
                amount: this.income.amount
            })
            this.income = {};
        },
        addExpense() {
            this.expenses.push({
                label: this.expense.label,
                amount: this.expense.amount
            })
            this.expense = {};
        },
        calculateBudget() {
            
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
        text-align: left;
        display: flex;
    }
    .image {
        width: 100%;
    }
    
    .forms {
        width: 50%;
    }
    
    .input-box {
        background: lightgrey;
        padding: 10px;
    }
    .income-source {
        padding: 10px;
        background: green;
        color: white;
    }
    .expense {
        padding: 10px;
        background: red;
        color: white;
    }
    input {
        font-size: 1em;
    }
    
    .budget-goals {
        text-align: center;
        width: 50%;
    }
    
    .pie-chart {
        height: 200px;
        width: 200px;
        background: darkgrey;
        border-radius: 50%;
        margin: auto;
    }
    
    .change-state-enter-active, .change-state-leave-active {
        transition: opacity .5s
    }
    .change-state-enter, .change-state-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style>
