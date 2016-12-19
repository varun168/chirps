System.register(['aurelia-framework', 'AuthService'], function (_export) {
  'use strict';

  var inject, AuthService, Login;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {
      Login = (function () {
        function Login(AuthService) {
          var _this = this;

          _classCallCheck(this, _Login);

          this.login = function () {
            if (_this.username && _this.password) {
              AuthService.login(_this.username, _this.password);
            } else {
              _this.error = 'Please enter a username and password.';
            }
          };

          this.register = function () {
            if (_this.usernameRegister && _this.passwordRegister) {
              alert("Register Successfully");
              location.reload();
            } else {
              _this.errorSignu = 'Please enter required fields for Signup';
            }
          };
        }

        _createClass(Login, [{
          key: 'activate',
          value: function activate() {
            this.username = '';
            this.password = '';
            this.error = '';
          }
        }]);

        var _Login = Login;
        Login = inject(AuthService)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFJYSxLQUFLOzs7Ozs7OztpQ0FKVCxNQUFNOzs7OztBQUlGLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosV0FBVyxFQUFFOzs7OztBQUl2QixjQUFJLENBQUMsS0FBSyxHQUFHLFlBQU07QUFDakIsZ0JBQUksTUFBSyxRQUFRLElBQUksTUFBSyxRQUFRLEVBQUU7QUFDbEMseUJBQVcsQ0FBQyxLQUFLLENBQUMsTUFBSyxRQUFRLEVBQUUsTUFBSyxRQUFRLENBQUMsQ0FBQTthQUNoRCxNQUFNO0FBQ0wsb0JBQUssS0FBSyxHQUFHLHVDQUF1QyxDQUFDO2FBQ3REO1dBQ0YsQ0FBQTs7QUFFRCxjQUFJLENBQUMsUUFBUSxHQUFHLFlBQU07QUFDcEIsZ0JBQUksTUFBSyxnQkFBZ0IsSUFBSSxNQUFLLGdCQUFnQixFQUFFO0FBQ2xELG1CQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3QixzQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JCLE1BQU07QUFDTCxvQkFBSyxVQUFVLEdBQUcseUNBQXlDLENBQUM7YUFDN0Q7V0FDRixDQUFBO1NBRUY7O3FCQXZCVSxLQUFLOztpQkF5QlIsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztXQUNqQjs7O3FCQTdCVSxLQUFLO0FBQUwsYUFBSyxHQURqQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJ0F1dGhTZXJ2aWNlJztcblxuQGluamVjdChBdXRoU2VydmljZSlcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG5cbiAgY29uc3RydWN0b3IoQXV0aFNlcnZpY2UpIHtcblxuICAgIC8vIE9yLCBpZiB3ZSB3YW50IHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIHRvIHRoZSBmdW5jdGlvbiwgXG4gICAgLy8gd2UgY2FuIGNhbGwgaXQgd2l0aGluIGFub3RoZXIgbWV0aG9kIG9uIG91ciB2aWV3IG1vZGVsLlxuICAgIHRoaXMubG9naW4gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkKSB7XG4gICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4nO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnJlZ2lzdGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudXNlcm5hbWVSZWdpc3RlciAmJiB0aGlzLnBhc3N3b3JkUmVnaXN0ZXIpIHtcbiAgICAgICAgYWxlcnQoXCJSZWdpc3RlciBTdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yU2lnbnUgPSAnUGxlYXNlIGVudGVyIHJlcXVpcmVkIGZpZWxkcyBmb3IgU2lnbnVwJztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgICBcbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy51c2VybmFtZSA9ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLmVycm9yID0gJyc7XG4gIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cbiJdfQ==
