import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbCarouselConfig, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { NavigationComponent as AppNavigationComponent } from './_layout/navigation/navigation.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { BlockTemplateComponent } from './_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { BreadcrumbModule } from './_layout/breadcrumb/breadcrumb.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangelogComponent } from './content/changelog/changelog.component';
import { CustomizerComponent } from './_layout/customizer/customizer.component';
import { DataApiService } from './_services/data.api';
import { DeviceDetectorService } from './_services/device-detector.service';
import { FooterComponent } from './_layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { FullLayoutNavbarComponent } from './_layout/header/full-layout-navbar/full-layout-navbar.component';
import { HeaderComponent } from './_layout/header/header.component';
import { HorizontalComponent as HeaderHorizontalComponent } from './_layout/header/horizontal/horizontal.component';
import { VerticalComponent as HeaderVerticalComponent } from './_layout/header/vertical/vertical.component';
import { HomeComponent } from './content/home/dashboard/home.component';
import { HorizontalCustomizerComponent } from './_layout/customizer/horizontal-customizer/horizontal-customizer.component';
import { IonicModule } from '@ionic/angular';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoginComponent } from './login';
import { MenuSettingsConfig } from './_layout/settings/menu-settings.config';
import { ModuleComponent } from './content/home/module/module.component';
import { NavbarService } from './_services/navbar.service';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SettingsModule } from './_layout/settings/settings.module';
import { ThemeSettingsConfig } from './_layout/settings/theme-settings.config';
import { ToastrModule } from 'ngx-toastr';
import { VerticalnavComponent } from './_layout/navigation/verticalnav/verticalnav.component';
import { ViewLayoutComponent } from './_layout/view-layout/view-layout.component';
import { environment } from '../environments/environment';
import { routing } from './app.routing';
import { SportsComponent } from './content/home/sports/sports.component';

// Routing
// Components
// perfect scroll bar
// spinner
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule, // required animations module
        IonicModule.forRoot(),
        ToastrModule.forRoot(), // ToastrModule added
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        NgbModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
         routing,
        // Settings modules
        SettingsModule.forRoot(ThemeSettingsConfig, MenuSettingsConfig),
        PerfectScrollbarModule,
        NgxSpinnerModule,
        LoadingBarRouterModule,
        BlockUIModule.forRoot({
          template: BlockTemplateComponent
        })
    ],
    declarations: [
        AppComponent,
        PublicLayoutComponent,
        PrivateLayoutComponent,
        HeaderComponent,
        FullLayoutNavbarComponent,
        HeaderHorizontalComponent,
        HeaderVerticalComponent,
        FooterComponent,
        AppNavigationComponent,
        AlertComponent,
        LoginComponent,
        ChangelogComponent,
        VerticalnavComponent ,
        CustomizerComponent,
        HorizontalCustomizerComponent,
        BlockTemplateComponent,
        FullLayoutComponent,
        HomeComponent,
        ModuleComponent,
        ViewLayoutComponent,
        SportsComponent,
      ],
    providers: [
        AuthGuard,
        AlertService,
        NavbarService,
        DeviceDetectorService,
        DataApiService,
        AuthService,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerGestureConfig
        },
        NgbCarouselConfig,
        NgbModalConfig,
    ],
    entryComponents: [
      BlockTemplateComponent
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})

export class AppModule {

}
