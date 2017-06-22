/**
 * Created by lmonm on 22/06/2017.
 */
angular.module('TestForm', []);

/**

 - Ecrire un composant JS permettant
 * d'afficher pendant la saisie le nombre de caractères restants sous le champ "objet" et "description" avec une phrase du type "x caractères restants sur n"
 * de pouvoir traduire la phrase en anglais "n letters available : x left" (et pouvoir facilement traduire dans d'autres langues par la suite)


 Le livrable sera une archive (zip ou tar) contenant le code ET si possible l'historique git (dossier .git à la racine du projet).
 */

angular.module('TestForm')
    .controller('TestFormController', ['$scope', function ($scope) {

            $scope.message = {
                email: null,
                subject: null,
                body: null
            };

            $scope.submit = function () {
                console.log($scope.message);
            };

            $scope.getLimitTrad =function(){}

        }]
    );