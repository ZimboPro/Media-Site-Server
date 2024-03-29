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
 * Provides the MAC address and port for wake-on-LAN functionality.
 */
export interface WakeOnLanInfo { 
    /**
     * Gets the MAC address of the device.
     */
    MacAddress?: string | null;
    /**
     * Gets or sets the wake-on-LAN port.
     */
    Port?: number;
}

