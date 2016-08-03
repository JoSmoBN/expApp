angular.module('XPNS')
    .controller('mainCtrl', function ($scope) {

        $scope.addFormModal = false;

        $scope.editFields = false;

        $scope.reimburseFields = false;

        $scope.removeFields = false;


        $scope.newExpenses = [];

        $scope.reimbursedExpenses = [];


        // FUNCTIONS FOR OPENING AND HIDING FORMS

        $scope.showAddForm = function () {
            $scope.addFormModal = true;
            $scope.editFields = false;
            $scope.reimburseFields = false;
            $scope.removeFields = false;
        };

        $scope.showEditForm = function () {
            $scope.addFormModal = false;
            $scope.editFields = true;
            $scope.reimburseFields = false;
            $scope.removeFields = false;
        }

        $scope.showReimburseForm = function () {
            $scope.addFormModal = false;
            $scope.editFields = false;
            $scope.reimburseFields = true;
            $scope.removeFields = false;
        }

        $scope.showDeleteForm = function () {
            $scope.addFormModal = false;
            $scope.editFields = false;
            $scope.reimburseFields = false;
            $scope.removeFields = true;
        }


        // ADDING NEW EXPENSES FUNCTION

        $scope.saveExpense = function () {
            $scope.newExpense.id = $scope.newExpenses.length;
            $scope.newExpenses.push($scope.newExpense);
            console.log($scope.newExpenses);

            $scope.newExpense = {};
            $scope.addFormModal = false;
        };

        // clearing the fields when cancelled
        $scope.cancelExpense = function () {
            $scope.newExpense = {};
            $scope.addFormModal = false;
        };

        // FUNCTIONS FOR EDITS

        $scope.saveEdit = function () {
            $scope.selected = {};
            $scope.editFields = false;
        };

        // to clear the fields when cancelled
        $scope.cancelEdit = function () {
            $scope.selected = {};
            $scope.editFields = false;
        };

        // FUNCTIONS FOR REIMBURSING EXPENSES AND MOVE THEM TO THE APPROPRIATE SECTION

        $scope.reimburseExpense = function (index) {
            for (var i = 0; i < $scope.newExpenses.length; i++) {
                if ($scope.newExpenses[i].id == index) {
                    $scope.reimbursedExpenses.push($scope.newExpenses[i]);
                    $scope.newExpenses.splice(i, 1);
                }
            }
            $scope.reimburseFields = false;
        };

        $scope.cancelReimburse = function () {
            $scope.selected = {};
            $scope.reimburseFields = false;
        };


        // FUNCTION FOR DELETING NEW EXPENSES

        $scope.deleteExpense = function (index) {
            for (var i = 0; i < $scope.newExpenses.length; i++) {
                if ($scope.newExpenses[i].id == index) {
                    $scope.newExpenses.splice(i, 1);
                }
            }
            $scope.selected = {};
            $scope.removeFields = false;
        };

        $scope.cancelDelete = function () {
            $scope.selected = {};
            $scope.removeFields = false;
        };


    });
