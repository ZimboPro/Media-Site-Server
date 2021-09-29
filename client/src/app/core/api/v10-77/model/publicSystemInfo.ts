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


export interface PublicSystemInfo { 
    /**
     * Gets or sets the local address.
     */
    LocalAddress?: string | null;
    /**
     * Gets or sets the name of the server.
     */
    ServerName?: string | null;
    /**
     * Gets or sets the server version.
     */
    Version?: string | null;
    /**
     * Gets or sets the product name. This is the AssemblyProduct name.
     */
    ProductName?: string | null;
    /**
     * Gets or sets the operating system.
     */
    OperatingSystem?: string | null;
    /**
     * Gets or sets the id.
     */
    Id?: string | null;
    /**
     * Gets or sets a value indicating whether the startup wizard is completed.
     */
    StartupWizardCompleted?: boolean | null;
}
