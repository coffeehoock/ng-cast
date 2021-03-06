import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';


@Injectable()
export class DelayResolver implements Resolve<null> {
    private delay = 200;

    public resolve( ): Observable<null> {
        return of(null).pipe( delay( this.delay ) );
    }
}
