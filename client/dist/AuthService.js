System.register(['aurelia-framework', 'aurelia-http-client', 'config'], function (_export) {
	'use strict';

	var Aurelia, inject, HttpClient, config, AuthService;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			Aurelia = _aureliaFramework.Aurelia;
			inject = _aureliaFramework.inject;
		}, function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}, function (_config) {
			config = _config['default'];
		}],
		execute: function () {
			AuthService = (function () {
				function AuthService(Aurelia, HttpClient) {
					_classCallCheck(this, _AuthService);

					this.session = null;

					HttpClient.configure(function (http) {
						http.withBaseUrl(config.baseUrl);
					});

					this.http = HttpClient;
					this.app = Aurelia;

					this.session = JSON.parse(localStorage[config.tokenName] || null);
				}

				_createClass(AuthService, [{
					key: 'login',
					value: function login(username, password) {
						var _this = this;

						this.http.post(config.loginUrl, { username: username, password: password }).then(function (response) {
							return response.content;
						}).then(function (session) {
							localStorage[config.tokenName] = JSON.stringify(session);

							_this.session = session;

							_this.app.setRoot('app');
						});
					}
				}, {
					key: 'logout',
					value: function logout() {
						localStorage[config.tokenName] = null;

						this.session = null;

						this.app.setRoot('login');
					}
				}, {
					key: 'isAuthenticated',
					value: function isAuthenticated() {
						return this.session !== null;
					}
				}, {
					key: 'can',
					value: function can(permission) {
						return true;
					}
				}]);

				var _AuthService = AuthService;
				AuthService = inject(Aurelia, HttpClient)(AuthService) || AuthService;
				return AuthService;
			})();

			_export('default', AuthService);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQ0FLcUIsV0FBVzs7Ozs7Ozs7K0JBTHZCLE9BQU87OEJBQUUsTUFBTTs7bUNBQ2YsVUFBVTs7Ozs7QUFJRSxjQUFXO0FBT3BCLGFBUFMsV0FBVyxDQU9uQixPQUFPLEVBQUUsVUFBVSxFQUFFOzs7VUFMakMsT0FBTyxHQUFHLElBQUk7O0FBTWIsZUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN2QixVQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7O0FBRU4sU0FBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7QUFDdkIsU0FBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7O0FBRW5CLFNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2xFOztpQkFoQm1CLFdBQVc7O1lBa0IxQixlQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7OztBQUNuQixVQUFJLENBQUMsSUFBSSxDQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLENBQUMsQ0FDN0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtjQUFLLFFBQVEsQ0FBQyxPQUFPO09BQUEsQ0FBQyxDQUNwQyxJQUFJLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFHckIsbUJBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFHekQsYUFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUd2QixhQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDeEIsQ0FBQyxDQUFDO01BQ1A7OztZQUVLLGtCQUFHO0FBR1Isa0JBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUd0QyxVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFHcEIsVUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7TUFDekI7OztZQUVjLDJCQUFHO0FBQ2pCLGFBQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7TUFDN0I7OztZQUVFLGFBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxJQUFJLENBQUM7TUFDWjs7O3VCQXJEbUIsV0FBVztBQUFYLGVBQVcsR0FEL0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FDUCxXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVc7OztzQkFBWCxXQUFXIiwiZmlsZSI6IkF1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdjb25maWcnO1xuXG5AaW5qZWN0KEF1cmVsaWEsIEh0dHBDbGllbnQpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblx0c2Vzc2lvbiA9IG51bGxcblxuXHQvLyBBcyBzb29uIGFzIHRoZSBBdXRoU2VydmljZSBpcyBjcmVhdGVkLCB3ZSBxdWVyeSBsb2NhbCBzdG9yYWdlIHRvXG5cdC8vIHNlZSBpZiB0aGUgbG9naW4gaW5mb3JtYXRpb24gaGFzIGJlZW4gc3RvcmVkLiBJZiBzbywgd2UgaW1tZWRpYXRlbHlcblx0Ly8gbG9hZCBpdCBpbnRvIHRoZSBzZXNzaW9uIG9iamVjdCBvbiB0aGUgQXV0aFNlcnZpY2UuXG5cdGNvbnN0cnVjdG9yKEF1cmVsaWEsIEh0dHBDbGllbnQpIHtcblx0XHRIdHRwQ2xpZW50LmNvbmZpZ3VyZShodHRwID0+IHtcblx0ICAgICAgXHRodHRwLndpdGhCYXNlVXJsKGNvbmZpZy5iYXNlVXJsKTtcbiAgICBcdH0pO1xuXG5cdFx0dGhpcy5odHRwID0gSHR0cENsaWVudDtcblx0XHR0aGlzLmFwcCA9IEF1cmVsaWE7XG5cblx0XHR0aGlzLnNlc3Npb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtjb25maWcudG9rZW5OYW1lXSB8fCBudWxsKTtcblx0fVxuXG5cdGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgXHQucG9zdChjb25maWcubG9naW5VcmwsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgIFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5jb250ZW50KVxuICAgICAgICBcdC50aGVuKChzZXNzaW9uKSA9PiB7XG5cblx0ICAgIFx0XHQvLyBTYXZlIHRvIGxvY2FsU3RvcmFnZVxuXHQgICAgXHRcdGxvY2FsU3RvcmFnZVtjb25maWcudG9rZW5OYW1lXSA9IEpTT04uc3RyaW5naWZ5KHNlc3Npb24pO1xuXG5cdCAgICBcdFx0Ly8gLi4gYW5kIHRvIHRoZSBzZXNzaW9uIG9iamVjdFxuXHQgICAgXHRcdHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG5cblx0ICAgIFx0XHQvLyAuLiBhbmQgc2V0IHJvb3QgdG8gYXBwLlxuXHQgICAgXHRcdHRoaXMuYXBwLnNldFJvb3QoJ2FwcCcpO1xuXHQgICAgXHR9KTtcblx0fVxuXG5cdGxvZ291dCgpIHtcblxuXHRcdC8vIENsZWFyIGZyb20gbG9jYWxTdG9yYWdlXG5cdFx0bG9jYWxTdG9yYWdlW2NvbmZpZy50b2tlbk5hbWVdID0gbnVsbDtcblxuXHRcdC8vIC4uIGFuZCBmcm9tIHRoZSBzZXNzaW9uIG9iamVjdFxuXHRcdHRoaXMuc2Vzc2lvbiA9IG51bGw7XG5cblx0XHQvLyAuLiBhbmQgc2V0IHJvb3QgdG8gbG9naW4uXG5cdFx0dGhpcy5hcHAuc2V0Um9vdCgnbG9naW4nKVxuXHR9XG5cdFxuXHRpc0F1dGhlbnRpY2F0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2Vzc2lvbiAhPT0gbnVsbDtcblx0fVxuXG5cdGNhbihwZXJtaXNzaW9uKSB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHdoeSBub3Q/XG5cdH1cbn0iXX0=
