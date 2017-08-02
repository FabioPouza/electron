angular.module('PackageGenerator').factory('uploadPi', ['$http', function ($http) {

    return {
        upload: function (json, name) {

            var req = {
                method: 'POST',
                url: 'http://localhost:3010/lista',
                headers: {
                    'content-Type': 'application/octet-stream',
                    'CC': name
                },
                data: json
            }

            return $http(req);
            //return $http.post('http://localhost:3010/lista', json)
        }
    };
}]);