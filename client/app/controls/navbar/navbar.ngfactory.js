import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from './navbar';
var styles_NavbarComponent = [];
export var RenderType_NavbarComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_NavbarComponent, data: {} });
function View_NavbarComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 9, 'li', [['routerLinkActive',
                'active']], null, null, null, null, null)),
        i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef,
            i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActiveOptions: [0, 'routerLinkActiveOptions'],
            routerLinkActive: [1, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i0.ɵpod({ exact: 0 }),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'a', [], [[1, 'target', 0], [8, 'href', 4]], [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 7).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[2, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i0.ɵted(null, ['', ''])), (_l()(), i0.ɵted(null, ['\n        ']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, (_v.context.$implicit.path == '/'));
        var currVal_1 = 'active';
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_4 = i0.ɵinlineInterpolate(1, '', _v.context.$implicit.path, '');
        _ck(_v, 7, 0, currVal_4);
    }, function (_ck, _v) {
        var currVal_2 = i0.ɵnov(_v, 7).target;
        var currVal_3 = i0.ɵnov(_v, 7).href;
        _ck(_v, 6, 0, currVal_2, currVal_3);
        var currVal_5 = _v.context.$implicit.name;
        _ck(_v, 8, 0, currVal_5);
    });
}
export function View_NavbarComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 7, 'div', [['class',
                'navbar']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 4, 'ul', [['class', 'list-unstyled']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NavbarComponent_1)),
        i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef,
            i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.navs;
        _ck(_v, 5, 0, currVal_0);
    }, null);
}
export function View_NavbarComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'navbar', [], null, null, null, View_NavbarComponent_0, RenderType_NavbarComponent)),
        i0.ɵdid(49152, null, 0, i3.NavbarComponent, [], null, null)], null, null);
}
export var NavbarComponentNgFactory = i0.ɵccf('navbar', i3.NavbarComponent, View_NavbarComponent_Host_0, { navs: 'navs' }, {}, []);