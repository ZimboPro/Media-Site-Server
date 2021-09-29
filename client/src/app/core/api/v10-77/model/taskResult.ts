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
import { TaskCompletionStatus } from './taskCompletionStatus';


/**
 * Class TaskExecutionInfo.
 */
export interface TaskResult { 
    /**
     * Gets or sets the start time UTC.
     */
    StartTimeUtc?: string;
    /**
     * Gets or sets the end time UTC.
     */
    EndTimeUtc?: string;
    /**
     * Gets or sets the status.
     */
    Status?: TaskCompletionStatus;
    /**
     * Gets or sets the name.
     */
    Name?: string | null;
    /**
     * Gets or sets the key.
     */
    Key?: string | null;
    /**
     * Gets or sets the id.
     */
    Id?: string | null;
    /**
     * Gets or sets the error message.
     */
    ErrorMessage?: string | null;
    /**
     * Gets or sets the long error message.
     */
    LongErrorMessage?: string | null;
}

