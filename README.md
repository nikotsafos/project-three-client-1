# Ginkgo Budgeting

Ginkgo is a simple budgeting tool that allows you to set financial goals, track your spending and income, and compare your spending with your goals on a month-by-month basis.

[Set up your Ginkgo account here](https://my-ginkgo.herokuapp.com/)

### User stories

As a Gingko user:
 * I want to set a budget for different categories of expenses, like housing, transportation, and entertainment.
 * I want to record expenditures and income, and see lists of my previous expenditures and income.
 * I want to compare my spending-to-date with the budget I set.

### Third-party APIs

Gingko uses the following APIs:
* React-vis: a data visualization library that makes Gingko's beautiful and informative charts
* MomentJS: helps parse and display dates so Gingko can easily keep track of spending by month

### Data Models

Ginkgo’s data models include a user and spending schema.

User: Object
* firstName: String (e.g., ‘John’)
* lastName: String (e.g., ’Smith’)
* email: String (e.g., 'john@smith.com')
* password: String
* spendingCategory: spendingCategorySchema

spendingCategory is an embedded schema within the user schema
spendingCategory: Object
    * housingBudget: String,
    * foodBudget: String,
    * transportationBudget: String,
    * entertainmentBudget: String,
    * shoppingBudget: String,
    * savingsBudget: String

====================================

Spending: Object
*   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
*   date: Date,
*   month: String,
*   category: String,
*   amount: Number,
*   description: String


### Auth Routes

| Method | Path | Location | Purpose |
| ------ | ----------------- | ----------------------------- | ------------------------------------------ |
| POST | /auth/login | controllers/auth.js | Login form page |
| POST | /auth/signup | controllers/auth.js | Signup |
| POST | /auth/me/from/token | controllers/auth.js | This is what is returned when client queries for new user data |

### Budget Routes

| Method | Path | Location | Purpose |
| ------ | ----------------- | ----------------------------- | ------------------------------------------ |
| POST | /budget | controllers/budget.js | Finds the users budget goals |
| POST | /budget/update | controllers/budget.js | Updates users budget goals |

### Money Routes

| Method | Path | Location | Purpose |
| ------ | ----------------- | ----------------------------- | ------------------------------------------ |
| POST | /money/all | controllers/money.js | Displays the users income records |
| POST | /money/all/post | controllers/money.js | User adds income information |
| POST | /money/delete | controllers/money.js | Delete an income entry |

### Spending Routes

| Method | Path | Location | Purpose |
| ------ | ----------------- | ----------------------------- | ------------------------------------------ |
| POST | /spending/post | controllers/spending.js | Displays the users spending records |
| POST | /spending/ | controllers/spending.js | User adds spending information |
| POST | /spending/delete | controllers/spending.js | Delete a spending entry |
