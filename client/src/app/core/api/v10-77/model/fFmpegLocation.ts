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
 * Enum describing the location of the FFmpeg tool.
 */
export type FFmpegLocation = 'NotFound' | 'SetByArgument' | 'Custom' | 'System';

export const FFmpegLocation = {
    NotFound: 'NotFound' as FFmpegLocation,
    SetByArgument: 'SetByArgument' as FFmpegLocation,
    Custom: 'Custom' as FFmpegLocation,
    System: 'System' as FFmpegLocation
};
