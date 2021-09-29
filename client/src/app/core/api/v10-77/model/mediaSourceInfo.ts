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
import { VideoType } from './videoType';
import { MediaStream } from './mediaStream';
import { Video3DFormat } from './video3DFormat';
import { IsoType } from './isoType';
import { TransportStreamTimestamp } from './transportStreamTimestamp';
import { MediaProtocol } from './mediaProtocol';
import { MediaAttachment } from './mediaAttachment';
import { MediaSourceType } from './mediaSourceType';


export interface MediaSourceInfo { 
    Protocol?: MediaProtocol;
    Id?: string | null;
    Path?: string | null;
    EncoderPath?: string | null;
    EncoderProtocol?: MediaProtocol | null;
    Type?: MediaSourceType;
    Container?: string | null;
    Size?: number | null;
    Name?: string | null;
    /**
     * Differentiate internet url vs local network.
     */
    IsRemote?: boolean;
    ETag?: string | null;
    RunTimeTicks?: number | null;
    ReadAtNativeFramerate?: boolean;
    IgnoreDts?: boolean;
    IgnoreIndex?: boolean;
    GenPtsInput?: boolean;
    SupportsTranscoding?: boolean;
    SupportsDirectStream?: boolean;
    SupportsDirectPlay?: boolean;
    IsInfiniteStream?: boolean;
    RequiresOpening?: boolean;
    OpenToken?: string | null;
    RequiresClosing?: boolean;
    LiveStreamId?: string | null;
    BufferMs?: number | null;
    RequiresLooping?: boolean;
    SupportsProbing?: boolean;
    VideoType?: VideoType | null;
    IsoType?: IsoType | null;
    Video3DFormat?: Video3DFormat | null;
    MediaStreams?: Array<MediaStream> | null;
    MediaAttachments?: Array<MediaAttachment> | null;
    Formats?: Array<string> | null;
    Bitrate?: number | null;
    Timestamp?: TransportStreamTimestamp | null;
    RequiredHttpHeaders?: { [key: string]: string; } | null;
    TranscodingUrl?: string | null;
    TranscodingSubProtocol?: string | null;
    TranscodingContainer?: string | null;
    AnalyzeDurationMs?: number | null;
    DefaultAudioStreamIndex?: number | null;
    DefaultSubtitleStreamIndex?: number | null;
}

