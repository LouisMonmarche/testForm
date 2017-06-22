/**
 * Created by lmonm on 22/06/2017.
 */
angular.module('TestForm', []);

/**
 * - Au sein d'une page simple, écrire le code HTML d'un formulaire contenant :
 * un champ de saisie d'email, champ obligatoire
 * un champ de saisie d'objet (100 caractères max), champ obligatoire
 * un champ de saisie d'une longue description (1000 caractères max)
 * un bouton de soumission
 - Ecrire la CSS du formulaire de manière :
 * à aligner verticalement les libellés des champs et les champs eux-même
 * à centrer le formulaire dans la page
 * à afficher les labels et la bordure des champs obligatoires en rouge
 - Ecrire un composant JS permettant
 * de valider l'adresse email lors de la soumission
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

        }]
    );