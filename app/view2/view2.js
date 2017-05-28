'use strict';


app.controller('View2Ctrl', [function() {
	  $scope.data3 = [300, 500, 100];
  $scope.graph.labels = ['hoi', 'doei', 'hallo', 'hee', 'hoi', 'doei', 'hallo', 'hee'];
  $scope.graph.options = {
    animation: false
  };
    $scope.graph.visible = true;
  $scope.graph.series = ['Series']
  // $scope.graph.colours;
  $scope.graph.legend = true;
$scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
}]);