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
import { BaseItemDto } from './baseItemDto';
import { RepeatMode } from './repeatMode';
import { PlayMethod } from './playMethod';
import { QueueItem } from './queueItem';


/**
 * Class PlaybackStartInfo.
 */
export interface PlaybackStartInfo { 
    /**
     * Gets or sets a value indicating whether this instance can seek.
     */
    CanSeek?: boolean;
    /**
     * Gets or sets the item.
     */
    Item?: BaseItemDto | null;
    /**
     * Gets or sets the item identifier.
     */
    ItemId?: string;
    /**
     * Gets or sets the session id.
     */
    SessionId?: string | null;
    /**
     * Gets or sets the media version identifier.
     */
    MediaSourceId?: string | null;
    /**
     * Gets or sets the index of the audio stream.
     */
    AudioStreamIndex?: number | null;
    /**
     * Gets or sets the index of the subtitle stream.
     */
    SubtitleStreamIndex?: number | null;
    /**
     * Gets or sets a value indicating whether this instance is paused.
     */
    IsPaused?: boolean;
    /**
     * Gets or sets a value indicating whether this instance is muted.
     */
    IsMuted?: boolean;
    /**
     * Gets or sets the position ticks.
     */
    PositionTicks?: number | null;
    PlaybackStartTimeTicks?: number | null;
    /**
     * Gets or sets the volume level.
     */
    VolumeLevel?: number | null;
    Brightness?: number | null;
    AspectRatio?: string | null;
    /**
     * Gets or sets the play method.
     */
    PlayMethod?: PlayMethod;
    /**
     * Gets or sets the live stream identifier.
     */
    LiveStreamId?: string | null;
    /**
     * Gets or sets the play session identifier.
     */
    PlaySessionId?: string | null;
    /**
     * Gets or sets the repeat mode.
     */
    RepeatMode?: RepeatMode;
    NowPlayingQueue?: Array<QueueItem> | null;
    PlaylistItemId?: string | null;
}

