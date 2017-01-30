import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { ErrorNotifierService } from './error-notifier.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomHttp extends Http {
  constructor(backend: ConnectionBackend,
            defaultOptions: RequestOptions,
            private errorService: ErrorNotifierService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    console.log('request get start');
    return super.request(url, options)
        .catch((err: any): any => {
          this.errorService.notifyError(err);
          return Observable.empty();
        })
        .finally(() => {
          console.log('After the request...');
        });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return super.get(url, options)
        .catch((err: any): any => {
          this.errorService.notifyError(err);
          return Observable.empty();
        });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return super.post(url, body, options)
        .catch((err: any): any => {
          this.errorService.notifyError(err);
          return Observable.empty();
        });
  }
}
