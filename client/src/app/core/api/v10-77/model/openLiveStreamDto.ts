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
import { MediaProtocol } from './mediaProtocol';


/**
 * Open live stream dto.
 */
export interface OpenLiveStreamDto { 
    /**
     * Gets or sets the open token.
     */
    OpenToken?: string | null;
    /**
     * Gets or sets the user id.
     */
    UserId?: string | null;
    /**
     * Gets or sets the play session id.
     */
    PlaySessionId?: string | null;
    /**
     * Gets or sets the max streaming bitrate.
     */
    MaxStreamingBitrate?: number | null;
    /**
     * Gets or sets the start time in ticks.
     */
    StartTimeTicks?: number | null;
    /**
     * Gets or sets the audio stream index.
     */
    AudioStreamIndex?: number | null;
    /**
     * Gets or sets the subtitle stream index.
     */
    SubtitleStreamIndex?: number | null;
    /**
     * Gets or sets the max audio channels.
     */
    MaxAudioChannels?: number | null;
    /**
     * Gets or sets the item id.
     */
    ItemId?: string | null;
    /**
     * Gets or sets a value indicating whether to enable direct play.
     */
    EnableDirectPlay?: boolean | null;
    /**
     * Gets or sets a value indicating whether to enale direct stream.
     */
    EnableDirectStream?: boolean | null;
    /**
     * Gets or sets the device profile.
     */
    DeviceProfile?: DeviceProfile | null;
    /**
     * Gets or sets the device play protocols.
     */
    DirectPlayProtocols?: Array<MediaProtocol> | null;
}

