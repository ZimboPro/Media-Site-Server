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

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class HlsSegmentService {

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
     * Gets the specified audio segment for an audio item.
     * @param itemId The item id.
     * @param segmentId The segment id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<Blob>;
    public getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<HttpResponse<Blob>>;
    public getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<HttpEvent<Blob>>;
    public getHlsAudioSegmentLegacyAac(itemId: string, segmentId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<any> {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getHlsAudioSegmentLegacyAac.');
        }
        if (segmentId === null || segmentId === undefined) {
            throw new Error('Required parameter segmentId was null or undefined when calling getHlsAudioSegmentLegacyAac.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'audio/_*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/Audio/${encodeURIComponent(String(itemId))}/hls/${encodeURIComponent(String(segmentId))}/stream.aac`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets the specified audio segment for an audio item.
     * @param itemId The item id.
     * @param segmentId The segment id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<Blob>;
    public getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<HttpResponse<Blob>>;
    public getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<HttpEvent<Blob>>;
    public getHlsAudioSegmentLegacyMp3(itemId: string, segmentId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'audio/_*'}): Observable<any> {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getHlsAudioSegmentLegacyMp3.');
        }
        if (segmentId === null || segmentId === undefined) {
            throw new Error('Required parameter segmentId was null or undefined when calling getHlsAudioSegmentLegacyMp3.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'audio/_*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/Audio/${encodeURIComponent(String(itemId))}/hls/${encodeURIComponent(String(segmentId))}/stream.mp3`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a hls video playlist.
     * @param itemId The video id.
     * @param playlistId The playlist id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHlsPlaylistLegacy(itemId: string, playlistId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/x-mpegURL'}): Observable<Blob>;
    public getHlsPlaylistLegacy(itemId: string, playlistId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/x-mpegURL'}): Observable<HttpResponse<Blob>>;
    public getHlsPlaylistLegacy(itemId: string, playlistId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/x-mpegURL'}): Observable<HttpEvent<Blob>>;
    public getHlsPlaylistLegacy(itemId: string, playlistId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/x-mpegURL'}): Observable<any> {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getHlsPlaylistLegacy.');
        }
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling getHlsPlaylistLegacy.');
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
                'application/x-mpegURL'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/Videos/${encodeURIComponent(String(itemId))}/hls/${encodeURIComponent(String(playlistId))}/stream.m3u8`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a hls video segment.
     * @param itemId The item id.
     * @param playlistId The playlist id.
     * @param segmentId The segment id.
     * @param segmentContainer The segment container.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'video/_*' | 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<Blob>;
    public getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'video/_*' | 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpResponse<Blob>>;
    public getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'video/_*' | 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<HttpEvent<Blob>>;
    public getHlsVideoSegmentLegacy(itemId: string, playlistId: string, segmentId: string, segmentContainer: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'video/_*' | 'application/json' | 'application/json; profile&#x3D;CamelCase' | 'application/json; profile&#x3D;PascalCase'}): Observable<any> {
        if (itemId === null || itemId === undefined) {
            throw new Error('Required parameter itemId was null or undefined when calling getHlsVideoSegmentLegacy.');
        }
        if (playlistId === null || playlistId === undefined) {
            throw new Error('Required parameter playlistId was null or undefined when calling getHlsVideoSegmentLegacy.');
        }
        if (segmentId === null || segmentId === undefined) {
            throw new Error('Required parameter segmentId was null or undefined when calling getHlsVideoSegmentLegacy.');
        }
        if (segmentContainer === null || segmentContainer === undefined) {
            throw new Error('Required parameter segmentContainer was null or undefined when calling getHlsVideoSegmentLegacy.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'video/_*',
                'application/json',
                'application/json; profile=CamelCase',
                'application/json; profile=PascalCase'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/Videos/${encodeURIComponent(String(itemId))}/hls/${encodeURIComponent(String(playlistId))}/${encodeURIComponent(String(segmentId))}.${encodeURIComponent(String(segmentContainer))}`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                localVarHeaders: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Stops an active encoding.
     * @param deviceId The device id of the client requesting. Used to stop encoding processes when needed.
     * @param playSessionId The play session id.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public stopEncodingProcess(deviceId: string, playSessionId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public stopEncodingProcess(deviceId: string, playSessionId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public stopEncodingProcess(deviceId: string, playSessionId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public stopEncodingProcess(deviceId: string, playSessionId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling stopEncodingProcess.');
        }
        if (playSessionId === null || playSessionId === undefined) {
            throw new Error('Required parameter playSessionId was null or undefined when calling stopEncodingProcess.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (deviceId !== undefined && deviceId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>deviceId, 'deviceId');
        }
        if (playSessionId !== undefined && playSessionId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>playSessionId, 'playSessionId');
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

        return this.httpClient.delete<any>(`${this.configuration.basePath}/Videos/ActiveEncodings`,
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
