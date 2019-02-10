import {Directive, HostBinding, HostListener, Inject} from '@angular/core';
import { NavigationCancel,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router } from '@angular/router';

@Directive({
  selector: '[appBindRoteEvrnt]'
})
export class BindRoteEvrntDirective {
    p: any;
  constructor( @Inject( Router ) private _router ) {


  }

    @HostBinding( 'style.color' ) color: string;
    // console.log( _router.events )
    //
    // @HostListener( 'click:*' ) onStyle() {
    //     this.color = '#ffffff';
    //     console.log( this._router.firstChild )
    // }

}
