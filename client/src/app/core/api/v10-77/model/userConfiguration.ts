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
import { SubtitlePlaybackMode } from './subtitlePlaybackMode';


/**
 * Class UserConfiguration.
 */
export interface UserConfiguration { 
    /**
     * Gets or sets the audio language preference.
     */
    AudioLanguagePreference?: string | null;
    /**
     * Gets or sets a value indicating whether [play default audio track].
     */
    PlayDefaultAudioTrack?: boolean;
    /**
     * Gets or sets the subtitle language preference.
     */
    SubtitleLanguagePreference?: string | null;
    DisplayMissingEpisodes?: boolean;
    GroupedFolders?: Array<string> | null;
    /**
     * An enum representing a subtitle playback mode.
     */
    SubtitleMode?: SubtitlePlaybackMode;
    DisplayCollectionsView?: boolean;
    EnableLocalPassword?: boolean;
    OrderedViews?: Array<string> | null;
    LatestItemsExcludes?: Array<string> | null;
    MyMediaExcludes?: Array<string> | null;
    HidePlayedInLatest?: boolean;
    RememberAudioSelections?: boolean;
    RememberSubtitleSelections?: boolean;
    EnableNextEpisodeAutoPlay?: boolean;
}

