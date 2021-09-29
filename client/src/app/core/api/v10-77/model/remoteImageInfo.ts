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
import { RatingType } from './ratingType';
import { ImageType } from './imageType';


/**
 * Class RemoteImageInfo.
 */
export interface RemoteImageInfo { 
    /**
     * Gets or sets the name of the provider.
     */
    ProviderName?: string | null;
    /**
     * Gets or sets the URL.
     */
    Url?: string | null;
    /**
     * Gets a url used for previewing a smaller version.
     */
    ThumbnailUrl?: string | null;
    /**
     * Gets or sets the height.
     */
    Height?: number | null;
    /**
     * Gets or sets the width.
     */
    Width?: number | null;
    /**
     * Gets or sets the community rating.
     */
    CommunityRating?: number | null;
    /**
     * Gets or sets the vote count.
     */
    VoteCount?: number | null;
    /**
     * Gets or sets the language.
     */
    Language?: string | null;
    /**
     * Gets or sets the type.
     */
    Type?: ImageType;
    /**
     * Gets or sets the type of the rating.
     */
    RatingType?: RatingType;
}
