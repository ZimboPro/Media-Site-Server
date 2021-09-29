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
 * Plugin load status.
 */
export type PluginStatus = 'Active' | 'Restart' | 'Deleted' | 'Superceded' | 'Malfunctioned' | 'NotSupported' | 'Disabled';

export const PluginStatus = {
    Active: 'Active' as PluginStatus,
    Restart: 'Restart' as PluginStatus,
    Deleted: 'Deleted' as PluginStatus,
    Superceded: 'Superceded' as PluginStatus,
    Malfunctioned: 'Malfunctioned' as PluginStatus,
    NotSupported: 'NotSupported' as PluginStatus,
    Disabled: 'Disabled' as PluginStatus
};

