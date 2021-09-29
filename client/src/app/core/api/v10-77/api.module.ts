import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { ActivityLogService } from './api/activityLog.service';
import { ApiKeyService } from './api/apiKey.service';
import { ArtistsService } from './api/artists.service';
import { AudioService } from './api/audio.service';
import { BrandingService } from './api/branding.service';
import { ChannelsService } from './api/channels.service';
import { CollectionService } from './api/collection.service';
import { ConfigurationService } from './api/configuration.service';
import { DashboardService } from './api/dashboard.service';
import { DevicesService } from './api/devices.service';
import { DisplayPreferencesService } from './api/displayPreferences.service';
import { DlnaService } from './api/dlna.service';
import { DlnaServerService } from './api/dlnaServer.service';
import { DynamicHlsService } from './api/dynamicHls.service';
import { EnvironmentService } from './api/environment.service';
import { FilterService } from './api/filter.service';
import { GenresService } from './api/genres.service';
import { HlsSegmentService } from './api/hlsSegment.service';
import { ImageService } from './api/image.service';
import { ImageByNameService } from './api/imageByName.service';
import { InstantMixService } from './api/instantMix.service';
import { ItemLookupService } from './api/itemLookup.service';
import { ItemRefreshService } from './api/itemRefresh.service';
import { ItemUpdateService } from './api/itemUpdate.service';
import { ItemsService } from './api/items.service';
import { LibraryService } from './api/library.service';
import { LibraryStructureService } from './api/libraryStructure.service';
import { LiveTvService } from './api/liveTv.service';
import { LocalizationService } from './api/localization.service';
import { MediaInfoService } from './api/mediaInfo.service';
import { MoviesService } from './api/movies.service';
import { MusicGenresService } from './api/musicGenres.service';
import { NotificationsService } from './api/notifications.service';
import { PackageService } from './api/package.service';
import { PersonsService } from './api/persons.service';
import { PlaylistsService } from './api/playlists.service';
import { PlaystateService } from './api/playstate.service';
import { PluginsService } from './api/plugins.service';
import { QuickConnectService } from './api/quickConnect.service';
import { RemoteImageService } from './api/remoteImage.service';
import { ScheduledTasksService } from './api/scheduledTasks.service';
import { SearchService } from './api/search.service';
import { SessionService } from './api/session.service';
import { StartupService } from './api/startup.service';
import { StudiosService } from './api/studios.service';
import { SubtitleService } from './api/subtitle.service';
import { SuggestionsService } from './api/suggestions.service';
import { SyncPlayService } from './api/syncPlay.service';
import { SystemService } from './api/system.service';
import { TimeSyncService } from './api/timeSync.service';
import { TrailersService } from './api/trailers.service';
import { TvShowsService } from './api/tvShows.service';
import { UniversalAudioService } from './api/universalAudio.service';
import { UserService } from './api/user.service';
import { UserLibraryService } from './api/userLibrary.service';
import { UserViewsService } from './api/userViews.service';
import { VideoAttachmentsService } from './api/videoAttachments.service';
import { VideoHlsService } from './api/videoHls.service';
import { VideosService } from './api/videos.service';
import { YearsService } from './api/years.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
