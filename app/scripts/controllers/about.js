'use strict';

/**
 * @ngdoc function
 * @name angularjsDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsDemoApp
 */
angular.module('angularjsDemoApp')
    .controller('AboutCtrl', function (esriLoader, $scope) {
        var self = this;

        esriLoader.require([
            'esri/Map',
            'esri/views/MapView',
            'esri/layers/FeatureLayer',
            'esri/widgets/Search',
            'esri/widgets/ScaleBar',
            'esri/widgets/LayerList'
        ], function (Map, MapView, FeatureLayer, Search, ScaleBar, LayerList) {
            self.map = new Map({
                basemap: 'streets'
            });

            var statesRenderer = {
                type: "simple", // autocasts as new SimpleRenderer()
                symbol: {
                    type: "simple-fill", // autocasts as new SimpleFillSymbol()
                    // style: "none",
                    outline: {
                        width: 2,
                        color: "white"
                    }
                },
                label: "State boundaries"
            };

            var countryLayer = new FeatureLayer({
                title: 'US State',
                url: 'http://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_States_Generalized/FeatureServer',
                popupTemplate: {
                    title: "State: {STATE_NAME}",
                    content: [{
                        type: 'fields',
                        fieldInfos: [{
                            fieldName: 'POPULATION',
                            label: 'Population',
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: 'MALES',
                            label: 'Males',
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }, {
                            fieldName: 'FEMALES',
                            label: 'Females',
                            format: {
                                digitSeparator: true,
                                places: 0
                            }
                        }]
                    }]
                },
                definitionExpression: 'POPULATION > 0',
                renderer: statesRenderer,
                opacity: 0.8,
            });

            var stateLayer = new FeatureLayer({
                title: 'US MSA',
                url: 'http://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/usa_cbsa/FeatureServer/0',
                visible: false,
                popupTemplate: {
                    title: 'MSA/ Metro: {NAME}',
                    content: [{
                        type: 'fields',
                        fieldInfos: [{
                            fieldName: 'POP2012',
                            label: 'Population - 2012',
                            format: {
                                digitSeparator: false,
                                places: 0
                            }
                        }, {
                            fieldName: 'MALES',
                            label: 'Males',
                            format: {
                                digitSeparator: false,
                                places: 0
                            }
                        }, {
                            fieldName: 'FEMALES',
                            label: 'Females',
                            format: {
                                digitSeparator: false,
                                places: 0
                            }
                        }]
                    }]
                }
            });

            self.onViewCreated = function (view) {
                var searchWidget = new Search({
                    view: view
                });

                var scaleBar = new ScaleBar({
                    view: view
                });

                var layerList = new LayerList({
                    view: view
                });

                view.ui.add(searchWidget, {
                    position: 'top-left',
                    index: 0
                });

                view.ui.add(scaleBar, {
                    position: 'bottom-left'
                });

                view.ui.add(layerList, {
                    position: 'top-right'
                });

                $scope.$on('$destroy', function () {
                    searchWidget.destroy();
                    scaleBar.destroy();
                    layerList.destroy();
                });
            };
            self.map.add(countryLayer);
            self.map.add(stateLayer);
        });
    });
