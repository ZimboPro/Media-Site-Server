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
 * The startup configuration DTO.
 */
export interface StartupConfigurationDto { 
    /**
     * Gets or sets UI language culture.
     */
    UICulture?: string | null;
    /**
     * Gets or sets the metadata country code.
     */
    MetadataCountryCode?: string | null;
    /**
     * Gets or sets the preferred language for the metadata.
     */
    PreferredMetadataLanguage?: string | null;
}
