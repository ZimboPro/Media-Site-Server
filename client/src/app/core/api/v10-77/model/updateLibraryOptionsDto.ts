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
import { LibraryOptions } from './libraryOptions';


/**
 * Update library options dto.
 */
export interface UpdateLibraryOptionsDto { 
    /**
     * Gets or sets the library item id.
     */
    Id?: string;
    /**
     * Gets or sets library options.
     */
    LibraryOptions?: LibraryOptions | null;
}

