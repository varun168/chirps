System.register(['bootstrap', 'aurelia-framework', 'AuthService', './chirp'], function (_export) {
  'use strict';

  var inject, AuthService, Chirp, App, ToJSONValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }, function (_chirp) {
      Chirp = _chirp.Chirp;
    }],
    execute: function () {
      App = (function () {
        function App(AuthService) {
          _classCallCheck(this, _App);

          this.auth = AuthService;
          this.heading = "Chirps App";
          this.chirps = [];
          this.chirpDescription = '';
          this.chirpComment = '';
          this.currentDate = new Date();
        }

        _createClass(App, [{
          key: 'addChirp',
          value: function addChirp() {
            if (this.chirpDescription) {
              this.chirps.push(new Chirp(this.chirpDescription));
              this.chirpDescription = '';
            }
          }
        }, {
          key: 'postChirp',
          value: function postChirp() {

            alert("Hello");
          }
        }]);

        var _App = App;
        App = inject(AuthService)(App) || App;
        return App;
      })();

      _export('App', App);

      ToJSONValueConverter = (function () {
        function ToJSONValueConverter() {
          _classCallCheck(this, ToJSONValueConverter);
        }

        _createClass(ToJSONValueConverter, [{
          key: 'toView',
          value: function toView(obj) {
            if (obj) {
              return JSON.stringify(obj, null, 2);
            }
          }
        }]);

        return ToJSONValueConverter;
      })();

      _export('ToJSONValueConverter', ToJSONValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0NBTWEsR0FBRyxFQWdDSCxvQkFBb0I7Ozs7Ozs7O2lDQXJDeEIsTUFBTTs7OztxQkFFUCxLQUFLOzs7QUFHQSxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLFdBQVcsRUFBRTs7O0FBQ3hCLGNBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0FBQzVCLGNBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDM0IsY0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDdkIsY0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBSy9COztxQkFiVSxHQUFHOztpQkFlSixvQkFBRztBQUNYLGdCQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN6QixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUNuRCxrQkFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzthQUM1QjtXQUlGOzs7aUJBRVUscUJBQUU7O0FBRVAsaUJBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUVsQjs7O21CQTdCUSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7Ozs7O0FBZ0NILDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFDekIsZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsZ0JBQUksR0FBRyxFQUFFO0FBQ1AscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3BDO1dBQ0Y7OztlQUxVLG9CQUFvQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xuaW1wb3J0IHtDaGlycH0gZnJvbSAnLi9jaGlycCc7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBjb25zdHJ1Y3RvcihBdXRoU2VydmljZSkge1xuICBcdHRoaXMuYXV0aCA9IEF1dGhTZXJ2aWNlO1xuICAgIHRoaXMuaGVhZGluZyA9IFwiQ2hpcnBzIEFwcFwiO1xuICAgIHRoaXMuY2hpcnBzID0gW107XG4gICAgdGhpcy5jaGlycERlc2NyaXB0aW9uID0gJyc7ICBcbiAgICB0aGlzLmNoaXJwQ29tbWVudCA9ICcnO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIFxuICAgICAgXG5cbiAgICBcbiAgfVxuICAgIFxuICAgIGFkZENoaXJwKCkge1xuICAgIGlmICh0aGlzLmNoaXJwRGVzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY2hpcnBzLnB1c2gobmV3IENoaXJwKHRoaXMuY2hpcnBEZXNjcmlwdGlvbikpO1xuICAgICAgdGhpcy5jaGlycERlc2NyaXB0aW9uID0gJyc7XG4gICAgfVxuICAgICAgICBcbiAgICBcbiAgICBcbiAgfVxuICAgIFxuICAgIHBvc3RDaGlycCgpe1xuXG4gICAgICAgIGFsZXJ0KFwiSGVsbG9cIik7XG4gICAgXG4gICAgfSAgXG59XG5cbmV4cG9ydCBjbGFzcyBUb0pTT05WYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyhvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKVxuICAgIH1cbiAgfVxufSJdfQ==
