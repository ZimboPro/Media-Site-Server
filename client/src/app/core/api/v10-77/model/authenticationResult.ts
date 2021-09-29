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
import { UserDto } from './userDto';
import { SessionInfo } from './sessionInfo';


export interface AuthenticationResult { 
    /**
     * Class UserDto.
     */
    User?: UserDto | null;
    /**
     * Class SessionInfo.
     */
    SessionInfo?: SessionInfo | null;
    AccessToken?: string | null;
    ServerId?: string | null;
}

