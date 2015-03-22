/**
 * HABmin - Home Automation User and Administration Interface
 * Designed for openHAB (www.openhab.com)
 *
 * This software is copyright of Chris Jackson under the GPL license.
 * Note that this licence may be changed at a later date.
 *
 * (c) 2014 Chris Jackson (chris@cd-jackson.com)
 */
angular.module('dashboardChartWidget', [
    'habminChart'
])
    .directive('dashboardChart', function () {
        return {
            restrict: 'E',
            template:
            '<habmin-chart style="display:inline-block;height:100%;width:100%" ' +
            'chart="chartId" service="serviceId"></habmin-chart>',
            scope: {
                options: "="
            },
            link: function ($scope, element, attrs, controller) {
                $scope.chartId = $scope.options.chartId;
                $scope.serviceId = $scope.options.serviceId;
            }
        };
    })
;