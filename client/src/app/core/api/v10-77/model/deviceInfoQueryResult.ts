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
import { DeviceInfo } from './deviceInfo';


export interface DeviceInfoQueryResult { 
    /**
     * Gets or sets the items.
     */
    Items?: Array<DeviceInfo> | null;
    /**
     * The total number of records available.
     */
    TotalRecordCount?: number;
    /**
     * The index of the first record in Items.
     */
    StartIndex?: number;
}

