import {Component, Directive, ElementRef, HostBinding, Inject, OnInit} from '@angular/core';
// import {animate, query, style, transition, trigger} from '@angular/animations';
import {
    NavigationCancel,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router, ActivatedRoute
} from '@angular/router';

import {
    trigger,
    animate,
    transition,
    style,
    query, state
} from '@angular/animations';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],

  animations: [
      trigger('fadeAnimation', [
          state( 'NavigationEnd', style({
              // transform: 'scale(1)',
              opacity: 1
          })),
          state( 'NavigationStart', style({
              // transform: 'scale(1.2)',
              opacity: 0
          })),
          transition('* <=> *', animate('.6s cubic-bezier(0.39, 0.100, 0, 1.64)'))
      ])
  ]
})

// @Directive({
//     selector: '[appLoding]'
// })
//
// export class LodingDirective {
//     constructor(el: ElementRef) {
//         el.nativeElement.style.backgroundColor = 'yellow';
//     }
//     @HostBinding( 'style.background' ) background = 'red';
// }


export class AppComponent implements OnInit {
    state: string = 'small';

    constructor( @Inject( Router ) private _router, @Inject( ActivatedRoute  ) private activatedRoute ) {




    }

        ngOnInit() {
            // this._router.events.subscribe((event: Event) => {
            //     // this.navigationInterceptor(event);
            //     // console.log( event )
            //
            //     if ( event instanceof NavigationStart ) {
            //         console.log('NavigationStart');
            //         this.state = 'large'
            //         console.log(this.state);
            //     }
            //     if ( event instanceof NavigationEnd ) {
            //         this.state = 'small'
            //         // setTimeout( (  ) =>{
            //         console.log('NavigationEnd');
            //         // }, 1000 )
            //     }
            //     if ( event instanceof NavigationCancel ) {
            //         console.log('NavigationCancel');
            //     }
            //     if ( event instanceof NavigationError ) {
            //         console.log('NavigationError');
            //     }
            // });

            this._router.events.pipe(
                filter(event => event instanceof NavigationStart)
            ).subscribe(() => {
                this.state = 'NavigationStart';
            });

            this._router.events.pipe(
                filter(event => event instanceof NavigationEnd)
            ).subscribe(() => {
                this.state = 'NavigationEnd';
            });

        }
}
