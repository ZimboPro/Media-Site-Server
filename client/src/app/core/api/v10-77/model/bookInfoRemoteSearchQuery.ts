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
import { BookInfo } from './bookInfo';


export interface BookInfoRemoteSearchQuery { 
    SearchInfo?: BookInfo | null;
    ItemId?: string;
    /**
     * Will only search within the given provider when set.
     */
    SearchProviderName?: string | null;
    /**
     * Gets or sets a value indicating whether disabled providers should be included.
     */
    IncludeDisabledProviders?: boolean;
}

