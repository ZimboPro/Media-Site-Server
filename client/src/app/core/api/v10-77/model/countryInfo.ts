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
 * Class CountryInfo.
 */
export interface CountryInfo { 
    /**
     * Gets or sets the name.
     */
    Name?: string | null;
    /**
     * Gets or sets the display name.
     */
    DisplayName?: string | null;
    /**
     * Gets or sets the name of the two letter ISO region.
     */
    TwoLetterISORegionName?: string | null;
    /**
     * Gets or sets the name of the three letter ISO region.
     */
    ThreeLetterISORegionName?: string | null;
}
