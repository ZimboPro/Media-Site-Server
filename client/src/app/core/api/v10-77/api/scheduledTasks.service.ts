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

import { ProblemDetails } from '../model/models';
import { TaskInfo } from '../model/models';
import { TaskTriggerInfo } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ScheduledTasksService {

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
     * Get task by id.
     * @param taskId Task Id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTask(taskId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<TaskInfo>;
    public getTask(taskId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<TaskInfo>>;
    public getTask(taskId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<TaskInfo>>;
    public getTask(taskId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getTask.');
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

        return this.httpClient.get<TaskInfo>(`${this.configuration.basePath}/ScheduledTasks/${encodeURIComponent(String(taskId))}`,
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
     * Get tasks.
     * @param isHidden Optional filter tasks that are hidden, or not.
     * @param isEnabled Optional filter tasks that are enabled, or not.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTasks(isHidden?: boolean, isEnabled?: boolean, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<Array<TaskInfo>>;
    public getTasks(isHidden?: boolean, isEnabled?: boolean, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<Array<TaskInfo>>>;
    public getTasks(isHidden?: boolean, isEnabled?: boolean, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<Array<TaskInfo>>>;
    public getTasks(isHidden?: boolean, isEnabled?: boolean, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (isHidden !== undefined && isHidden !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>isHidden, 'isHidden');
        }
        if (isEnabled !== undefined && isEnabled !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>isEnabled, 'isEnabled');
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

        return this.httpClient.get<Array<TaskInfo>>(`${this.configuration.basePath}/ScheduledTasks`,
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
     * Start specified task.
     * @param taskId Task Id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public startTask(taskId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any>;
    public startTask(taskId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<any>>;
    public startTask(taskId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<any>>;
    public startTask(taskId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling startTask.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/ScheduledTasks/Running/${encodeURIComponent(String(taskId))}`,
            null,
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
     * Stop specified task.
     * @param taskId Task Id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public stopTask(taskId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any>;
    public stopTask(taskId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<any>>;
    public stopTask(taskId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<any>>;
    public stopTask(taskId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling stopTask.');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/ScheduledTasks/Running/${encodeURIComponent(String(taskId))}`,
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
     * Update specified task triggers.
     * @param taskId Task Id.
     * @param taskTriggerInfo Triggers.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any>;
    public updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<any>>;
    public updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<any>>;
    public updateTask(taskId: string, taskTriggerInfo: Array<TaskTriggerInfo>, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling updateTask.');
        }
        if (taskTriggerInfo === null || taskTriggerInfo === undefined) {
            throw new Error('Required parameter taskTriggerInfo was null or undefined when calling updateTask.');
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

        return this.httpClient.post<any>(`${this.configuration.basePath}/ScheduledTasks/${encodeURIComponent(String(taskId))}/Triggers`,
            taskTriggerInfo,
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