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
import { ProfileCondition } from './profileCondition';
import { CodecType } from './codecType';


export interface CodecProfile { 
    Type?: CodecType;
    Conditions?: Array<ProfileCondition> | null;
    ApplyConditions?: Array<ProfileCondition> | null;
    Codec?: string | null;
    Container?: string | null;
}
