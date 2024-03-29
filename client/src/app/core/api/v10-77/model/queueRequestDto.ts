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
import { GroupQueueMode } from './groupQueueMode';


/**
 * Class QueueRequestDto.
 */
export interface QueueRequestDto { 
    /**
     * Gets or sets the items to enqueue.
     */
    ItemIds?: Array<string> | null;
    /**
     * Gets or sets the mode in which to add the new items.
     */
    Mode?: GroupQueueMode;
}

