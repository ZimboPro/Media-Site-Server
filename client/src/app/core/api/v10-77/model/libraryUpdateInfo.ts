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
 * Class LibraryUpdateInfo.
 */
export interface LibraryUpdateInfo { 
    /**
     * Gets or sets the folders added to.
     */
    FoldersAddedTo?: Array<string> | null;
    /**
     * Gets or sets the folders removed from.
     */
    FoldersRemovedFrom?: Array<string> | null;
    /**
     * Gets or sets the items added.
     */
    ItemsAdded?: Array<string> | null;
    /**
     * Gets or sets the items removed.
     */
    ItemsRemoved?: Array<string> | null;
    /**
     * Gets or sets the items updated.
     */
    ItemsUpdated?: Array<string> | null;
    CollectionFolders?: Array<string> | null;
    readonly IsEmpty?: boolean;
}

