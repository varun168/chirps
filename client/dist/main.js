System.register(['AuthService'], function (_export) {
  'use strict';

  var AuthService;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.start().then(function () {
      var auth = aurelia.container.get(AuthService);
      var root = auth.isAuthenticated() ? 'app' : 'login';
      aurelia.setRoot(root);
    });
  }

  return {
    setters: [function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNsQyxXQUFPLENBQUMsR0FBRyxDQUNQLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQUM7O0FBS3hCLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUN6QixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QyxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUNwRCxhQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztHQUNMIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcblx0YXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG5cbiAgLy8gQWZ0ZXIgc3RhcnRpbmcgdGhlIGF1cmVsaWEsIHdlIGNhbiByZXF1ZXN0IHRoZSBBdXRoU2VydmljZSBkaXJlY3RseVxuICAvLyBmcm9tIHRoZSBESSBjb250YWluZXIgb24gdGhlIGF1cmVsaWEgb2JqZWN0LiBXZSBjYW4gdGhlbiBzZXQgdGhlIFxuICAvLyBjb3JyZWN0IHJvb3QgYnkgcXVlcnlpbmcgdGhlIEF1dGhTZXJ2aWNlJ3MgaXNBdXRoZW50aWNhdGVkIG1ldGhvZC5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4ge1xuXHQgIFx0dmFyIGF1dGggPSBhdXJlbGlhLmNvbnRhaW5lci5nZXQoQXV0aFNlcnZpY2UpO1xuXHQgICAgbGV0IHJvb3QgPSBhdXRoLmlzQXV0aGVudGljYXRlZCgpID8gJ2FwcCcgOiAnbG9naW4nO1xuXHQgICAgYXVyZWxpYS5zZXRSb290KHJvb3QpO1xuICBcdH0pO1xufVxuIl19
