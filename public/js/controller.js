app.controller("myctrl",($scope,myfactory)=>{
    $scope.item={};
    function add(){
        $scope.submitForm=(isValid)=>{
            if(isValid){

            }
            else{
                alert="Please fill all the data"
            }
        }
    }
})