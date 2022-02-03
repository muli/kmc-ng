import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {KalturaLogger, KalturaLoggerName} from '@kaltura-ng/kaltura-logger';
import {PreviewAndEmbedModule} from '../applications/preview-and-embed/preview-and-embed.module';
import {EntriesModule} from 'app-shared/content-shared/entries/entries.module';
import {CategoriesModule} from 'app-shared/content-shared/categories/categories.module';
import {CategoriesStatusModule} from 'app-shared/content-shared/categories-status/categories-status.module';
import { KMCPermissionsModule } from 'app-shared/kmc-shared/kmc-permissions';
import { LocalizationModule } from '@kaltura-ng/mc-shared';
import { KalturaLoggerInjectionToken } from '@kaltura-ng/kaltura-common';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './i18n/', '.json');
}

import {
    AppBootstrap,
    AuthModule,
    BrowserService,
    KMCShellModule,
    NewEntryUploadModule
} from 'app-shared/kmc-shell';
import {
  AppStorage,
    KalturaCommonModule,
  OperationTagModule,
  UploadManagement
} from '@kaltura-ng/kaltura-common';
import {AreaBlockerModule, StickyModule, TooltipModule} from '@kaltura-ng/kaltura-ui';
import {KalturaClientModule, KalturaClientOptions} from 'kaltura-ngx-client';
import {PopupWidgetModule} from '@kaltura-ng/kaltura-ui';
import {
  AccessControlProfileStore,
  AppEventsModule,
  FlavoursStore,
  KalturaServerModule,
  MetadataProfileModule, PartnerProfileStore,
} from 'app-shared/kmc-shared';

import {AppComponent} from './app.component';
import {routing} from './app.routes';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppMenuComponent} from './components/app-menu/app-menu.component';
import {MultiAccountComponent} from './components/multiAccount/multi-account.component';
import {ErrorComponent} from './components/error/error.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import { UploadManagementModule } from '@kaltura-ng/kaltura-common';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordFormComponent } from './components/login/forgot-password-form/forgot-password-form.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SsoFormComponent } from './components/login/sso-form/sso-form.component';
import { AuthenticationFormComponent } from './components/login/authentication-form/authentication-form.component';
import { PasswordExpiredFormComponent } from './components/login/password-expired-form/password-expired-form.component';
import { InvalidLoginHashFormComponent } from './components/login/invalid-login-hash-form/invalid-login-hash-form.component';
import { AppMenuContentComponent } from './components/app-menu/app-menu-content.component';
import { KmcUploadAppModule } from '../applications/kmc-upload-app/kmc-upload-app.module';
import { TranscodingProfileManagementModule } from 'app-shared/kmc-shared/transcoding-profile-management';
import { ChangeAccountComponent } from './components/changeAccount/change-account.component';
import { OpenEmailComponent } from './components/open-email/open-email.component';
import { BulkUploadModule } from 'app-shared/kmc-shell/bulk-upload';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { ChangelogContentComponent } from './components/changelog/changelog-content/changelog-content.component';
import { PlaylistCreationModule } from 'app-shared/kmc-shared/events/playlist-creation';
import { KMCServerPollsModule } from 'app-shared/kmc-shared/server-polls';
import { ViewCategoryEntriesModule } from 'app-shared/kmc-shared/events/view-category-entries/view-category-entries.module';
import { AccessControlProfileModule } from 'app-shared/kmc-shared/access-control/access-control-profile.module';
import {PlayersStore} from "app-shared/kmc-shared/players";
import { globalConfig } from 'config/global';
import { getKalturaServerUri } from 'config/server';
import { StorageProfilesStore } from 'app-shared/kmc-shared/storage-profiles';
import { TranscodingProfileCreationModule } from 'app-shared/kmc-shared/events/transcoding-profile-creation/transcoding-profile-creation.module';
import { APP_STORAGE_TOKEN } from '@kaltura-ng/kaltura-common';
import { KmcLogsModule } from 'app-shared/kmc-shell/kmc-logs/kmc-logs.module';
import { KalturaLoggerModule } from '@kaltura-ng/kaltura-logger';
import { KmcViewsModule } from 'app-shared/kmc-shared/kmc-views/kmc-views.module';
import { AppDefaultViewComponent } from './components/app-default-view/app-default-view.component';
import { LoginByKSComponent } from './components/app-actions/login-by-ks.component';
import { AuthenticatorComponent } from './components/app-actions/authenticator.component';
import { NewReplaceVideoUploadModule } from 'app-shared/kmc-shell/new-replace-video-upload/new-replace-video-upload.module';
import { RestorePasswordComponent } from './components/app-actions/restore-password.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RestorePasswordFormComponent } from './components/login/restore-password-form/restore-password-form.component';
import { InvalidRestorePasswordHashFormComponent } from './components/login/invalid-restore-password-hash-form/invalid-restore-password-hash-form.component';

import { CopyToClipboardModule } from '@kaltura-ng/mc-shared';
import { ContextualHelpModule } from 'app-shared/kmc-shared/contextual-help/contextual-help.module';
import { PersistLoginByKsComponent } from './components/app-actions/persist-login-by-ks.component';
import { ColumnsResizeManagerModule } from 'app-shared/kmc-shared/columns-resize-manager';
import { CaptionRequestAppModule } from '../applications/caption-request-app/caption-request-app.module';
import { NewEntryCreateFromUrlModule } from 'app-shared/kmc-shell/new-entry-create-from-url/new-entry-create-from-url.module';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuModule } from 'primeng/menu';
import { KalturaRequestOptionsArgs } from "kaltura-ngx-client/lib/api/kaltura-request-options";
import {PlayerV7Module} from "app-shared/kmc-shared/player-v7/player-v7.module";

const partnerProviders: any[] = [AccessControlProfileStore, FlavoursStore, PlayersStore, StorageProfilesStore];

export function kalturaClientOptionsFactory(): KalturaClientOptions {

    return  {
        endpointUrl: getKalturaServerUri(),
        clientTag: 'kmcng',
        chunkFileSize: 5 * 1024 * 1024
    };
}
export function kalturaClientDefaultOptionsFactory(): KalturaRequestOptionsArgs {
    return  {};
}

@NgModule({
  imports: [
    AuthModule.forRoot(),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    MetadataProfileModule.forRoot(),
    NgxPageScrollModule,
    PlayerV7Module.forRoot(),
    AppEventsModule.forRoot(),
    KMCShellModule.forRoot(),
    KalturaCommonModule.forRoot(),
  TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
      EntriesModule.forRoot(),
      CategoriesModule.forRoot(),
      NgxWebstorageModule.forRoot(),
    PopupWidgetModule,
    routing,
    PreviewAndEmbedModule,
    TieredMenuModule,
    UploadManagementModule,
    KalturaServerModule,
    AreaBlockerModule,
    CheckboxModule,
    ReactiveFormsModule,
    TooltipModule,
    ToastModule,
    CopyToClipboardModule,
    KmcUploadAppModule.forRoot(),
    NewEntryUploadModule.forRoot(),
      NewReplaceVideoUploadModule.forRoot(),
    BulkUploadModule.forRoot(),
    TranscodingProfileManagementModule.forRoot(),
    RadioButtonModule,
    StickyModule.forRoot(),
    OperationTagModule.forRoot(),
    PlaylistCreationModule.forRoot(),
    KMCServerPollsModule.forRoot(),
    CategoriesStatusModule.forRoot(),
    ViewCategoryEntriesModule.forRoot(),
    AccessControlProfileModule.forRoot(),
    KMCPermissionsModule.forRoot(),
    TranscodingProfileCreationModule.forRoot(),
    KalturaClientModule.forRoot(kalturaClientOptionsFactory, kalturaClientDefaultOptionsFactory),
      KmcLogsModule.forRoot(),
      KalturaLoggerModule.forRoot('kmc'),
      ContextualHelpModule.forRoot(),
      KmcViewsModule.forRoot(),
      LocalizationModule.forRoot(),
      NewEntryCreateFromUrlModule.forRoot(),
      CaptionRequestAppModule,
      ColumnsResizeManagerModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppDefaultViewComponent,
    DashboardComponent,
    AppMenuComponent,
    MultiAccountComponent,
    AppMenuContentComponent,
    LoginComponent,
    AuthenticationFormComponent,
    ErrorComponent,
    UserSettingsComponent,
    LoginFormComponent,
    SsoFormComponent,
    PasswordExpiredFormComponent,
    ForgotPasswordFormComponent,
    InvalidLoginHashFormComponent,
    ChangeAccountComponent,
    OpenEmailComponent,
    ChangelogComponent,
    ChangelogContentComponent,
    LoginByKSComponent,
      AuthenticatorComponent,
      RestorePasswordComponent,
      NotFoundPageComponent,
      RestorePasswordFormComponent,
      InvalidRestorePasswordHashFormComponent,
      ProgressBarComponent,
      PersistLoginByKsComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [],
  providers: [
      ...partnerProviders,
      ConfirmationService,
      { provide: APP_STORAGE_TOKEN, useExisting: BrowserService },
      { provide: KalturaLoggerInjectionToken, useClass: KalturaLogger }
  ]
})
export class AppModule {
    constructor(kalturaLogger: KalturaLogger,
                uploadManagement: UploadManagement) {
        if (globalConfig.client.production) {
            kalturaLogger.setOptions({level: 'Error'});
        } else {
            kalturaLogger.setOptions({level: 'All'});
        }

        // TODO [kmcng] move to a relevant location
        uploadManagement.setMaxUploadRequests(globalConfig.kalturaServer.maxConcurrentUploads);
    }
}
