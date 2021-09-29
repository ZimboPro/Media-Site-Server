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

import { DeviceProfile } from '../model/models';
import { DeviceProfileInfo } from '../model/models';
import { ProblemDetails } from '../model/models';
import { UNKNOWN_BASE_TYPE } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class DlnaService {

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
     * Creates a profile.
     * @param uNKNOWNBASETYPE Device profile.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProfile(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public createProfile(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public createProfile(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public createProfile(uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {

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
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/Dlna/Profiles`,
            uNKNOWNBASETYPE,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a profile.
     * @param profileId Profile id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProfile(profileId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any>;
    public deleteProfile(profileId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<any>>;
    public deleteProfile(profileId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<any>>;
    public deleteProfile(profileId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling deleteProfile.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/Dlna/Profiles/${encodeURIComponent(String(profileId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the default profile.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDefaultProfile(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<DeviceProfile>;
    public getDefaultProfile(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<DeviceProfile>>;
    public getDefaultProfile(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<DeviceProfile>>;
    public getDefaultProfile(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {

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

        return this.httpClient.get<DeviceProfile>(`${this.configuration.basePath}/Dlna/Profiles/Default`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a single profile.
     * @param profileId Profile Id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfile(profileId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<DeviceProfile>;
    public getProfile(profileId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<DeviceProfile>>;
    public getProfile(profileId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<DeviceProfile>>;
    public getProfile(profileId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getProfile.');
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

        return this.httpClient.get<DeviceProfile>(`${this.configuration.basePath}/Dlna/Profiles/${encodeURIComponent(String(profileId))}`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get profile infos.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfileInfos(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<Array<DeviceProfileInfo>>;
    public getProfileInfos(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<Array<DeviceProfileInfo>>>;
    public getProfileInfos(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<Array<DeviceProfileInfo>>>;
    public getProfileInfos(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {

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

        return this.httpClient.get<Array<DeviceProfileInfo>>(`${this.configuration.basePath}/Dlna/ProfileInfos`,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a profile.
     * @param profileId Profile id.
     * @param uNKNOWNBASETYPE Device profile.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProfile(profileId: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any>;
    public updateProfile(profileId: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<any>>;
    public updateProfile(profileId: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<any>>;
    public updateProfile(profileId: string, uNKNOWNBASETYPE?: UNKNOWN_BASE_TYPE, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling updateProfile.');
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


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' = 'json';
        if(localVarHttpHeaderAcceptSelected && localVarHttpHeaderAcceptSelected.startsWith('text')) {
            responseType_ = 'text';
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/Dlna/Profiles/${encodeURIComponent(String(profileId))}`,
            uNKNOWNBASETYPE,
            {
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}