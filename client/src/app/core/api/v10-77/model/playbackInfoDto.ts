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


/**
 * Plabyback info dto.
 */
export interface PlaybackInfoDto { 
    /**
     * Gets or sets the playback userId.
     */
    UserId?: string | null;
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
     * Gets or sets the media source id.
     */
    MediaSourceId?: string | null;
    /**
     * Gets or sets the live stream id.
     */
    LiveStreamId?: string | null;
    /**
     * Gets or sets the device profile.
     */
    DeviceProfile?: DeviceProfile | null;
    /**
     * Gets or sets a value indicating whether to enable direct play.
     */
    EnableDirectPlay?: boolean | null;
    /**
     * Gets or sets a value indicating whether to enable direct stream.
     */
    EnableDirectStream?: boolean | null;
    /**
     * Gets or sets a value indicating whether to enable transcoding.
     */
    EnableTranscoding?: boolean | null;
    /**
     * Gets or sets a value indicating whether to enable video stream copy.
     */
    AllowVideoStreamCopy?: boolean | null;
    /**
     * Gets or sets a value indicating whether to allow audio stream copy.
     */
    AllowAudioStreamCopy?: boolean | null;
    /**
     * Gets or sets a value indicating whether to auto open the live stream.
     */
    AutoOpenLiveStream?: boolean | null;
}

