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
import { ImageType } from './imageType';


/**
 * Class ImageProviderInfo.
 */
export interface ImageProviderInfo { 
    /**
     * Gets the name.
     */
    readonly Name?: string | null;
    /**
     * Gets the supported image types.
     */
    readonly SupportedImages?: Array<ImageType> | null;
}

