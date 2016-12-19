System.register(['moment'], function (_export) {
   'use strict';

   var moment, DateFormatValueConverter;

   var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

   function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

   return {
      setters: [function (_moment) {
         moment = _moment['default'];
      }],
      execute: function () {
         DateFormatValueConverter = (function () {
            function DateFormatValueConverter() {
               _classCallCheck(this, DateFormatValueConverter);
            }

            _createClass(DateFormatValueConverter, [{
               key: 'toView',
               value: function toView(value) {
                  return moment(value).format('M/D/YYYY h:mm:ss a');
               }
            }]);

            return DateFormatValueConverter;
         })();

         _export('DateFormatValueConverter', DateFormatValueConverter);
      }
   };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBRWEsd0JBQXdCOzs7Ozs7Ozs7OztBQUF4QixpQ0FBd0I7cUJBQXhCLHdCQUF3QjtxQ0FBeEIsd0JBQXdCOzs7eUJBQXhCLHdCQUF3Qjs7c0JBQzVCLGdCQUFDLEtBQUssRUFBRTtBQUNYLHlCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDcEQ7OzttQkFIUyx3QkFBd0IiLCJmaWxlIjoiY29udmVydGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gICB0b1ZpZXcodmFsdWUpIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUpLmZvcm1hdCgnTS9EL1lZWVkgaDptbTpzcyBhJyk7XG4gICB9XG59XG4iXX0=
