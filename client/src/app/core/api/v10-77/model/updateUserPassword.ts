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
 * The update user password request body.
 */
export interface UpdateUserPassword { 
    /**
     * Gets or sets the current sha1-hashed password.
     */
    CurrentPassword?: string | null;
    /**
     * Gets or sets the current plain text password.
     */
    CurrentPw?: string | null;
    /**
     * Gets or sets the new plain text password.
     */
    NewPw?: string | null;
    /**
     * Gets or sets a value indicating whether to reset the password.
     */
    ResetPassword?: boolean;
}

