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


export interface AuthenticationInfo { 
    /**
     * Gets or sets the identifier.
     */
    Id?: number;
    /**
     * Gets or sets the access token.
     */
    AccessToken?: string | null;
    /**
     * Gets or sets the device identifier.
     */
    DeviceId?: string | null;
    /**
     * Gets or sets the name of the application.
     */
    AppName?: string | null;
    /**
     * Gets or sets the application version.
     */
    AppVersion?: string | null;
    /**
     * Gets or sets the name of the device.
     */
    DeviceName?: string | null;
    /**
     * Gets or sets the user identifier.
     */
    UserId?: string;
    /**
     * Gets or sets a value indicating whether this instance is active.
     */
    IsActive?: boolean;
    /**
     * Gets or sets the date created.
     */
    DateCreated?: string;
    /**
     * Gets or sets the date revoked.
     */
    DateRevoked?: string | null;
    DateLastActivity?: string;
    UserName?: string | null;
}

