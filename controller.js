var controllers={};

controllers.StudentController = function($scope) {
    $scope.students=[
        {ikl: 100, rrNr: 80091613215, familieNaam: 'Peeters', voorNaam: 'Peter', adres: 'Woonstraat te Woonachtig', email: 'mail@stuur.mij', telNr: '0487885648', foto: ''},
        {ikl: 101, rrNr: 64551325285, familieNaam: 'Franssen', voorNaam: 'Frans', adres: 'Huisstraat te Woonachtig', email: 'brief@stuur.mij', telNr: '0495887654', foto: ''},
        {ikl: 102, rrNr: 90052315484, familieNaam: 'Willems', voorNaam: 'Willem', adres: 'Beekstraat te Woonachtig', email: 'postduif@stuur.mij', telNr: '0876548435', foto: ''},
        {ikl: 103, rrNr: 85090655432, familieNaam: 'Martens', voorNaam: 'Marty', adres: 'Dorpsstraat te Woonachtig', email: 'postbode@stuur.mij', telNr: '0983646464', foto: ''}

    ]
}

controllers.OplController = function($scope) {
    $scope.opleidingen=[
        {oplCode: '01', oplNaam: 'Dromen', beschrijving: 'dromen over alles', maxDuur: 1},
        {oplCode: '02', oplNaam: 'Wolken kijken', beschrijving: 'figuurtjes zien in de wolken', maxDuur: 1},
        {oplCode: '03', oplNaam: 'lachen', beschrijving: 'lachen met de simpele dingen', maxDuur: 1},
        {oplCode: '04', oplNaam: 'Zingen onder de douche', beschrijving: 'leer de akoestiek correct te gebruiken', maxDuur: 1},
    ]
}

oplApp.controller(controllers);