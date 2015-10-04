/**
 * Gulp-Patterns - Gulp Patterns
 * @authors John Papa
 * @version v0.2.0
 * @link https://github.com/johnpapa/gulp-patterns
 * @license MIT
 */
!function(){"use strict";angular.module("app",["app.core","app.layout"])}(),function(){"use strict";angular.module("blocks.diagnostics",[])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.diagnostics","blocks.exception","blocks.logger","blocks.router","ui.router"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";function e(e){e.decorator("$interpolate",o)}function o(e,o,t){function a(){function t(e,t){function a(){var a=e.apply(this,arguments),i=a.trim(),r=i?o.info:o.warn,n="Binding: "+t+" = "+i;return r.call(o,n),a}return a}var a=e.apply(this,arguments),i=arguments[0];return angular.isFunction(a)&&i?t(a,i.trim()):a}return t.enable?(angular.extend(a,e),a):e}var t={enable:!0};angular.module("blocks.diagnostics").constant("diagnostics",t).config(e),e.$inject=["$provide"],o.$inject=["$delegate","$log","diagnostics"]}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function o(e){e.decorator("$exceptionHandler",t)}function t(e,o,t){return function(a,i){var r=o.config.appErrorPrefix||"",n={exception:a,cause:i};a.message=r+a.message,e(a,i),t.error(a.message,n)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(o),o.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e,o){function t(t){return function(a){var i,r;return a.data&&a.data.description&&(i="\n"+a.data.description,r=t+i),a.data.description=r,o.error(r),e.reject(a)}}var a={catcher:t};return a}angular.module("blocks.exception").factory("exception",e),e.$inject=["$q","logger"]}(),function(){"use strict";function e(e,o){function t(t,a,i){o.error(t,i),e.error("Error: "+t,a)}function a(t,a,i){o.info(t,i),e.info("Info: "+t,a)}function i(t,a,i){o.success(t,i),e.info("Success: "+t,a)}function r(t,a,i){o.warning(t,i),e.warn("Warning: "+t,a)}var n={showToasts:!0,error:t,info:a,success:i,warning:r,log:e.log};return n}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,o,t){function a(e,a,r,n){function s(e,a){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},i.resolveAlways),o.state(e.state,e.config)}),a&&!g&&(g=!0,t.otherwise(a))}function c(){a.$on("$stateChangeError",function(o,t,a,i,r,n){if(!p){f.errors++,p=!0;var s=t&&(t.title||t.name||t.loadedTemplateUrl)||"unknown target";"Error routing to "+s+". "+(n.data||"")+". <br/>"+(n.statusText||"")+": "+(n.status||"");console.log(n),e.path("/")}})}function l(){c(),d()}function u(){return r.get()}function d(){a.$on("$stateChangeSuccess",function(e,o,t,a,i){})}var p=!1,g=!1,f={errors:0,changes:0},m={configureStates:s,getStates:u,stateCounts:f};return l(),m}var i={docTitle:void 0,resolveAlways:{}};e.html5Mode(!0),this.configure=function(e){angular.extend(i,e)},this.$get=a,a.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function o(e,o,t,i,r){function n(){var e={ready:["dataservice",function(e){return e.ready()}]};r.configure({docTitle:"Gulp: ",resolveAlways:e})}t.enable=!1,e.debugInfoEnabled(!1),o.debugEnabled&&o.debugEnabled(!0),i.configure(a.appErrorPrefix),n()}var t=angular.module("app.core");t.config(e),e.$inject=["toastr"];var a={appErrorPrefix:"[GulpPatterns Error] ",appTitle:"Gulp Patterns Demo",imageBasePath:"/images/photos/",unknownPersonImageSource:"unknown_person.jpg"};t.value("config",a),t.config(o),o.$inject=["$compileProvider","$logProvider","diagnostics","exceptionHandlerProvider","routerHelperProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var t="/404";e.configureStates(o(),t)}function o(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}angular.module("app.core").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(){function e(){}e()}angular.module("app.layout").controller("Shell",e)}(),function(){"use strict";function e(e){e.configureStates(o())}function o(){return[{state:"shell",config:{url:"/",templateUrl:"app/layout/shell.html",controller:"Shell",controllerAs:"vm",title:"shell"}}]}angular.module("app.layout").run(e),e.$inject=["routerHelper"]}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/layout/shell.html",'<header class="row page-header" style="background-image: url(\'images/me_before.jpg\');"><section class="col s10 offset-s2"><div class=header-text><h4>Witaj, jestem Kuba Kruk</h4><p>Jak już tutaj jesteś, zapraszam Cię, poznaj moją historię...</p><div style="margin: auto; display: block; width: 300px; text-align: center;"><a class="btn-floating btn-large waves-effect waves-light" style="background-color: rgba(0, 0, 0, 0.34)!important;"><i class=material-icons>expand_more</i></a></div></div><div class=me-before1></div></section></header><div class=container><div class=row><div class="col s3"><div class=aside-image></div></div><div class="main col s9"><div class=divider></div><section id=my-story class=my-story><h3>Moja historia</h3><p>Cześć, nazywam się Kuba Kruk, mam 10 lat.</p><p>Moja smutna historia zaczęła się ok. 4 lata temu, kiedy nowotwór zabrał mi moją mamę. Zostaliśmy ja i moja młodsza siostra, sami z tatą.</p><p>Koszmar powrócił w lutym tego roku. Podczas zajęć w-f przewróciłem się i doznałem urazu prawej rękę. Po 3 miesiącach od tego zdarzenia okazało się, że tym razem <strong>RAK</strong> (<a href="http://www.sarcoma.pl/miesaki/" target=_blank>osteosarcoma - nowotór złośliwy kości, tzw. \'mięsak\'</a>) dopadł mnie.</p><p>Podczas operacji usunięcia nowotworu (17 września 2015), aby ratować moje życie lekarze musieli amputować prawą rękę (wraz z częścią obojczyka i łopatki).</p><p>Jednak to nie koniec mojej choroby. Czeka mnie jeszcze <strong>ok. roku leczenia onkologicznego</strong>, w tym operacja na płuca gdzie zdiagnozowano przerzuty z chorej ręki.</p><p>Chciałbym jak inni chłopcy w moim wieku, chodzić do szkoły, grać w piłkę, jeździć na rowerze i być zdrowym.</p><p>Jedyną szansą na „normalne” funkcjonowanie jest dla mnie zakup protezy mechanicznej. Proteza ta choć częściowo zastąpi mi prawdziwą rękę oraz usprawni codzienne życie.</p><p style=color:#01579b>Wykonanie takiej protezy jest dość kosztowne (<strong>ok. 60.000 PLN</strong>), dlatego zwracam się z prośbą do ludzi dobrych i życzliwych o pomoc w zbiórce pieniędzy.</p></section><div class=divider></div><section><h3>Jeśli chcesz mi pomóc</h3><p>Wszelkie wsparcie finansowe proszę kierować na konto Fundacji Spełnionych Marzeń.</p><address>Fundacja Spełnionych Marzeń<br>ul. Oleandrów 6<br>00-629 Warszawa<br>ING Bank Śląski o/Warszawa<br>29 1050 1025 1000 0022 7611 6304 z dopiskiem „Jakub Kruk”<br>KRS: 0000128832<br></address></section></div></div></div><footer class=page-footer><div class=container><div class=row><div class="col l6 s12"><ul><li><a class="grey-text text-lighten-3" href="http://www.spelnionemarzenia.org.pl/" target=_blank>Fundacja Spełnione Marzenia</a></li><li><a class="grey-text text-lighten-3" href=https://www.facebook.com/pomocdla.kuby.5 target=_blank>Mój facebook</a></li><li><a class="grey-text text-lighten-3" href=#!>Kontakt ze mną</a></li></ul></div></div></div><div class=footer-copyright><div class=container>2015 Kuba Kruk</div></div></footer>')}]);