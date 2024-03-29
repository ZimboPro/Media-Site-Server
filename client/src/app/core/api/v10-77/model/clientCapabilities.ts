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
import { DeviceProfile } from './deviceProfile';
import { GeneralCommandType } from './generalCommandType';


export interface ClientCapabilities { 
    PlayableMediaTypes?: Array<string> | null;
    SupportedCommands?: Array<GeneralCommandType> | null;
    SupportsMediaControl?: boolean;
    SupportsContentUploading?: boolean;
    MessageCallbackUrl?: string | null;
    SupportsPersistentIdentifier?: boolean;
    SupportsSync?: boolean;
    /**
     * Defines the MediaBrowser.Model.Dlna.DeviceProfile.
     */
    DeviceProfile?: DeviceProfile | null;
    AppStoreUrl?: string | null;
    IconUrl?: string | null;
}

