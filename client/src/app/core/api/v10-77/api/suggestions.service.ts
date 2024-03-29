/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { BaseItemDtoQueryResult } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Gets suggestions.
     * @param userId The user id.
     * @param mediaType The media types.
     * @param type The type.
     * @param startIndex Optional. The start index.
     * @param limit Optional. The limit.
     * @param enableTotalRecordCount Whether to enable the total record count.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<BaseItemDtoQueryResult>;
    public getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<BaseItemDtoQueryResult>>;
    public getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<BaseItemDtoQueryResult>>;
    public getSuggestions(userId: string, mediaType?: Array<string>, type?: Array<string>, startIndex?: number, limit?: number, enableTotalRecordCount?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getSuggestions.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (mediaType) {
            mediaType.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'mediaType');
            })
        }
        if (type) {
            type.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'type');
            })
        }
        if (startIndex !== undefined && startIndex !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>startIndex, 'startIndex');
        }
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (enableTotalRecordCount !== undefined && enableTotalRecordCount !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>enableTotalRecordCount, 'enableTotalRecordCount');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (CustomAuthentication) required
        localVarCredential = this.configuration.lookupCredential('CustomAuthentication');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('X-Emby-Authorization', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/json; profile=CamelCase',
                'application/json; profile=PascalCase'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.get<BaseItemDtoQueryResult>(`${this.configuration.basePath}/Users/${encodeURIComponent(String(userId))}/Suggestions`,
            {
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
