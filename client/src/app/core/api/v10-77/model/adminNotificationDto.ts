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
import { NotificationLevel } from './notificationLevel';


/**
 * The admin notification dto.
 */
export interface AdminNotificationDto { 
    /**
     * Gets or sets the notification name.
     */
    Name?: string | null;
    /**
     * Gets or sets the notification description.
     */
    Description?: string | null;
    /**
     * Gets or sets the notification level.
     */
    NotificationLevel?: NotificationLevel | null;
    /**
     * Gets or sets the notification url.
     */
    Url?: string | null;
}

