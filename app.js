/**
 * Created by lmonm on 22/06/2017.
 */
angular.module('TestForm', []);

var TRADUCTIONS = {
    LIMIT_STRING: {
        FR: "KEEPED caractères restants sur MAX",
        EN: "KEEPED letters available : MAX left"
    }
};

var TONGUES = ['FR', 'EN'];

/**

 - Ecrire un composant JS permettant
 * d'afficher pendant la saisie le nombre de caractères restants sous le champ "objet" et "description" avec une phrase du type "x caractères restants sur n"
 * de pouvoir traduire la phrase en anglais "n letters available : x left" (et pouvoir facilement traduire dans d'autres langues par la suite)


 Le livrable sera une archive (zip ou tar) contenant le code ET si possible l'historique git (dossier .git à la racine du projet).
 */

angular.module('TestForm')
    .controller('TestFormController', ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.tongueIndex = 0;
            $scope.message = {
                email: null,
                subject: null,
                body: null
            };

            $scope.subjectUpdating = null;
            $scope.updateSubject = function () {
                if ($scope.subjectUpdating !== null) {
                    $timeout.cancel($scope.subjectUpdating);
                }
                $scope.subjectUpdating = $timeout(function () {
                    $scope.subjectUpdating = null
                }, 500);
            };
            $scope.bodyUpdating = null;
            $scope.updateBody = function () {
                if ($scope.bodyUpdating !== null) {
                    $timeout.cancel($scope.bodyUpdating);
                }
                $scope.bodyUpdating = $timeout(function () {
                    $scope.bodyUpdating = null
                }, 500);
            };

            $scope.submit = function () {
                console.log($scope.message);
            };

            $scope.getLimitTrad = function (max, string) {
                var keeped = string === null ? max : max - string.length;
                var string = TRADUCTIONS.LIMIT_STRING[TONGUES[$scope.tongueIndex]];
                string = string.replace('KEEPED', keeped);
                string = string.replace('MAX', max);
                return string;
            };

            $scope.changeToungue = function () {
                $scope.tongueIndex = ($scope.tongueIndex + 1) % TONGUES.length
            };


        }]
    );