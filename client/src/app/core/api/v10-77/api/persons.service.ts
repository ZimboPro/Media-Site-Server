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

import { BaseItemDto } from '../model/models';
import { BaseItemDtoQueryResult } from '../model/models';
import { ImageType } from '../model/models';
import { ItemFields } from '../model/models';
import { ItemFilter } from '../model/models';
import { ProblemDetails } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class PersonsService {

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
     * Get person by name.
     * @param name Person name.
     * @param userId Optional. Filter by user id, and attach user data.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerson(name: string, userId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<BaseItemDto>;
    public getPerson(name: string, userId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<BaseItemDto>>;
    public getPerson(name: string, userId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<BaseItemDto>>;
    public getPerson(name: string, userId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getPerson.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (userId !== undefined && userId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>userId, 'userId');
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

        return this.httpClient.get<BaseItemDto>(`${this.configuration.basePath}/Persons/${encodeURIComponent(String(name))}`,
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

    /**
     * Gets all persons.
     * @param limit Optional. The maximum number of records to return.
     * @param searchTerm The search term.
     * @param fields Optional. Specify additional fields of information to return in the output.
     * @param filters Optional. Specify additional filters to apply.
     * @param isFavorite Optional filter by items that are marked as favorite, or not. userId is required.
     * @param enableUserData Optional, include user data.
     * @param imageTypeLimit Optional, the max number of images to return, per image type.
     * @param enableImageTypes Optional. The image types to include in the output.
     * @param excludePersonTypes Optional. If specified results will be filtered to exclude those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param personTypes Optional. If specified results will be filtered to include only those containing the specified PersonType. Allows multiple, comma-delimited.
     * @param appearsInItemId Optional. If specified, person results will be filtered on items related to said persons.
     * @param userId User id.
     * @param enableImages Optional, include image information in output.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<BaseItemDtoQueryResult>;
    public getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<BaseItemDtoQueryResult>>;
    public getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<BaseItemDtoQueryResult>>;
    public getPersons(limit?: number, searchTerm?: string, fields?: Array<ItemFields>, filters?: Array<ItemFilter>, isFavorite?: boolean, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, excludePersonTypes?: Array<string>, personTypes?: Array<string>, appearsInItemId?: string, userId?: string, enableImages?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (limit !== undefined && limit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>limit, 'limit');
        }
        if (searchTerm !== undefined && searchTerm !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>searchTerm, 'searchTerm');
        }
        if (fields) {
            fields.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'fields');
            })
        }
        if (filters) {
            filters.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'filters');
            })
        }
        if (isFavorite !== undefined && isFavorite !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>isFavorite, 'isFavorite');
        }
        if (enableUserData !== undefined && enableUserData !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>enableUserData, 'enableUserData');
        }
        if (imageTypeLimit !== undefined && imageTypeLimit !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>imageTypeLimit, 'imageTypeLimit');
        }
        if (enableImageTypes) {
            enableImageTypes.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'enableImageTypes');
            })
        }
        if (excludePersonTypes) {
            excludePersonTypes.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'excludePersonTypes');
            })
        }
        if (personTypes) {
            personTypes.forEach((element) => {
                localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
                  <any>element, 'personTypes');
            })
        }
        if (appearsInItemId !== undefined && appearsInItemId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>appearsInItemId, 'appearsInItemId');
        }
        if (userId !== undefined && userId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>userId, 'userId');
        }
        if (enableImages !== undefined && enableImages !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>enableImages, 'enableImages');
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

        return this.httpClient.get<BaseItemDtoQueryResult>(`${this.configuration.basePath}/Persons`,
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