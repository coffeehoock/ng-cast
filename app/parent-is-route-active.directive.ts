import {ContentChildren , Directive , QueryList , TemplateRef} from '@angular/core';

@Directive({
  selector: '[appParentIsRouteActive]'
})
export class ParentIsRouteActiveDirective {

    constructor( public template: TemplateRef<any>) {
        console.log(template)
    }
    // @ContentChildren(this.template)
    // links: QueryList<this.template>;
}

// сначало сделать задежку роутера а потом про тестировать видео перехода
