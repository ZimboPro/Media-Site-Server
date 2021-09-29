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


/**
 * Upload subtitles dto.
 */
export interface UploadSubtitleDto { 
    /**
     * Gets or sets the subtitle language.
     */
    Language: string;
    /**
     * Gets or sets the subtitle format.
     */
    Format: string;
    /**
     * Gets or sets a value indicating whether the subtitle is forced.
     */
    IsForced: boolean;
    /**
     * Gets or sets the subtitle data.
     */
    Data: string;
}
