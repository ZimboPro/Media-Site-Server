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
import { CollectionTypeOptions } from './collectionTypeOptions';
import { LibraryOptions } from './libraryOptions';


/**
 * Used to hold information about a user\'s list of configured virtual folders.
 */
export interface VirtualFolderInfo { 
    /**
     * Gets or sets the name.
     */
    Name?: string | null;
    /**
     * Gets or sets the locations.
     */
    Locations?: Array<string> | null;
    /**
     * Gets or sets the type of the collection.
     */
    CollectionType?: CollectionTypeOptions | null;
    LibraryOptions?: LibraryOptions | null;
    /**
     * Gets or sets the item identifier.
     */
    ItemId?: string | null;
    /**
     * Gets or sets the primary image item identifier.
     */
    PrimaryImageItemId?: string | null;
    RefreshProgress?: number | null;
    RefreshStatus?: string | null;
}
