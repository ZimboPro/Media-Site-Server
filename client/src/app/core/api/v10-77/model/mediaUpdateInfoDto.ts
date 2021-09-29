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
import { MediaUpdateInfoPathDto } from './mediaUpdateInfoPathDto';


/**
 * Media Update Info Dto.
 */
export interface MediaUpdateInfoDto { 
    /**
     * Gets or sets the list of updates.
     */
    Updates?: Array<MediaUpdateInfoPathDto> | null;
}
