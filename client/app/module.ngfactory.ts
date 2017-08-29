/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './module';
import * as i2 from './layouts/master1/master1.ngfactory';
import * as i3 from './pages/index/index.ngfactory';
import * as i4 from './pages/page1/page1.ngfactory';
import * as i5 from './layouts/master2/master2.ngfactory';
import * as i6 from './pages/page2/page2.ngfactory';
import * as i7 from './controls/control3/control3.ngfactory';
import * as i8 from './controls/control4/control4.ngfactory';
import * as i9 from '@angular/common';
import * as i10 from '@angular/common/http';
import * as i11 from '@angular/platform-browser';
import * as i12 from '@angular/forms';
import * as i13 from '@angular/router';
import * as i14 from './services/communicate';
import * as i15 from './providers/data';
import * as i16 from './layouts/master1/master1';
import * as i17 from './pages/index/index';
import * as i18 from './pages/page1/page1';
import * as i19 from './layouts/master2/master2';
import * as i20 from './pages/page2/page2';
import * as i21 from './controls/control3/control3';
import * as i22 from './controls/control4/control4';
import * as i23 from './controls/module';
import * as i24 from './pages/module';
import * as i25 from './routes';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i2.Master1LayoutNgFactory,i3.IndexPageNgFactory,i4.Page1PageNgFactory,
              i5.Master2LayoutNgFactory,i6.Page2PageNgFactory,i7.Control3ControlNgFactory,
              i8.Control4ControlNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i9.NgLocalization,
              i9.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i10.HttpXsrfTokenExtractor,
              i10.ɵg,[i9.DOCUMENT,i0.PLATFORM_ID,i10.ɵe]),i0.ɵmpd(4608,i10.ɵh,i10.ɵh,
              [i10.HttpXsrfTokenExtractor,i10.ɵf]),i0.ɵmpd(5120,i10.HTTP_INTERCEPTORS,
              (p0_0:any) => {
                return [p0_0];
              },[i10.ɵh]),i0.ɵmpd(4608,i10.ɵd,i10.ɵd,([] as any[])),i0.ɵmpd(6144,i10.XhrFactory,
              (null as any),[i10.ɵd]),i0.ɵmpd(4608,i10.HttpXhrBackend,i10.HttpXhrBackend,
              [i10.XhrFactory]),i0.ɵmpd(6144,i10.HttpBackend,(null as any),[i10.HttpXhrBackend]),
          i0.ɵmpd(5120,i10.HttpHandler,i10.ɵinterceptingHandler,[i10.HttpBackend,[2,
              i10.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i10.HttpClient,i10.HttpClient,
              [i10.HttpHandler]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,
              i0.IterableDiffers,i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,
              i0.ɵl,([] as any[])),i0.ɵmpd(4608,i11.DomSanitizer,i11.ɵe,[i9.DOCUMENT]),
          i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i11.DomSanitizer]),i0.ɵmpd(4608,
              i11.HAMMER_GESTURE_CONFIG,i11.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,
              i11.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i11.ɵDomEventsPlugin(p0_0),new i11.ɵKeyEventsPlugin(p1_0),
                    new i11.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i9.DOCUMENT,i9.DOCUMENT,i9.DOCUMENT,i11.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i11.EventManager,i11.EventManager,[i11.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i11.ɵDomSharedStylesHost,i11.ɵDomSharedStylesHost,[i9.DOCUMENT]),
          i0.ɵmpd(4608,i11.ɵDomRendererFactory2,i11.ɵDomRendererFactory2,[i11.EventManager,
              i11.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,(null as any),
              [i11.ɵDomRendererFactory2]),i0.ɵmpd(6144,i11.ɵSharedStylesHost,(null as any),
              [i11.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,i0.Testability,
              [i0.NgZone]),i0.ɵmpd(4608,i11.Meta,i11.Meta,[i9.DOCUMENT]),i0.ɵmpd(4608,
              i11.Title,i11.Title,[i9.DOCUMENT]),i0.ɵmpd(4608,i12.ɵi,i12.ɵi,([] as any[])),
          i0.ɵmpd(5120,i13.ActivatedRoute,i13.ɵf,[i13.Router]),i0.ɵmpd(4608,i13.NoPreloading,
              i13.NoPreloading,([] as any[])),i0.ɵmpd(6144,i13.PreloadingStrategy,
              (null as any),[i13.NoPreloading]),i0.ɵmpd(135680,i13.RouterPreloader,
              i13.RouterPreloader,[i13.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i13.PreloadingStrategy]),i0.ɵmpd(4608,i13.PreloadAllModules,
              i13.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i13.ROUTER_INITIALIZER,
              i13.ɵi,[i13.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i13.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i14.CommunicateService,i14.CommunicateService,
              ([] as any[])),i0.ɵmpd(4608,i15.DataProvider,i15.DataProvider,[i10.HttpClient]),
          i0.ɵmpd(512,i9.CommonModule,i9.CommonModule,([] as any[])),i0.ɵmpd(512,i10.HttpClientXsrfModule,
              i10.HttpClientXsrfModule,([] as any[])),i0.ɵmpd(512,i10.HttpClientModule,
              i10.HttpClientModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i11.ɵa,
              ([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i13.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i13.ɵg,i13.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any,p1_0:any) => {
                return [i11.ɵc(p0_0,p0_1),i13.ɵh(p1_0)];
              },[[2,i11.NgProbeToken],[2,i0.NgProbeToken],i13.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i11.BrowserModule,i11.BrowserModule,[[3,i11.BrowserModule]]),
          i0.ɵmpd(512,i12.ɵba,i12.ɵba,([] as any[])),i0.ɵmpd(512,i12.FormsModule,i12.FormsModule,
              ([] as any[])),i0.ɵmpd(1024,i13.ɵa,i13.ɵd,[[3,i13.Router]]),i0.ɵmpd(512,
              i13.UrlSerializer,i13.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i13.ChildrenOutletContexts,i13.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i13.ROUTER_CONFIGURATION,{},([] as any[])),i0.ɵmpd(1024,i9.LocationStrategy,
              i13.ɵc,[i9.PlatformLocation,[2,i9.APP_BASE_HREF],i13.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i9.Location,i9.Location,[i9.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,
              i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i13.ROUTES,
              () => {
                return [[{path:'',component:i16.Master1Layout,children:[{path:'',component:i17.IndexPage},
                    {path:'page1',component:i18.Page1Page}]},{path:'page2',component:i19.Master2Layout,
                    children:[{path:'',component:i20.Page2Page,children:[{path:'subpage3',
                        component:i21.Control3Control},{path:'subpage4',component:i22.Control4Control}]}]}]];
              },([] as any[])),i0.ɵmpd(1024,i13.Router,i13.ɵe,[i0.ApplicationRef,i13.UrlSerializer,
              i13.ChildrenOutletContexts,i9.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i13.ROUTES,i13.ROUTER_CONFIGURATION,[2,i13.UrlHandlingStrategy],
              [2,i13.RouteReuseStrategy]]),i0.ɵmpd(512,i13.RouterModule,i13.RouterModule,
              [[2,i13.ɵa],[2,i13.Router]]),i0.ɵmpd(512,i23.ControlsModule,i23.ControlsModule,
              ([] as any[])),i0.ɵmpd(512,i24.PagesModule,i24.PagesModule,([] as any[])),
          i0.ɵmpd(512,i25.RoutingModule,i25.RoutingModule,([] as any[])),i0.ɵmpd(512,
              i1.AppModule,i1.AppModule,([] as any[])),i0.ɵmpd(256,i10.ɵe,'XSRF-TOKEN',
              ([] as any[])),i0.ɵmpd(256,i10.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovU2FtcGxlcy9hbmd1bGFyLWJvaWxlcnBsYXRlL2NsaWVudC9hcHAvbW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1NhbXBsZXMvYW5ndWxhci1ib2lsZXJwbGF0ZS9jbGllbnQvYXBwL21vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
