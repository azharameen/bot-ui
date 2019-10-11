import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatRadioModule,
  MatBadgeModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
  MatExpansionModule,
  MatDividerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatDialogModule,
  MatBottomSheetModule
} from '@angular/material';
import {
  RecommendationsComponent,
  DialogDataExampleDialogComponent,
  BottomSheetOverviewExampleSheetComponent
} from './recommendations/recommendations.component';
import { ChatSectionComponent } from './chat-section/chat-section.component';
import { UpdateJobseekerProfileComponent } from './update-jobseeker-profile/update-jobseeker-profile.component';
import { JobseekerProfileViewComponent } from './jobseeker-profile-view/jobseeker-profile-view.component';
import { EmployerProfileViewComponent } from './employer-profile-view/employer-profile-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


const firebaseConfig = {
  apiKey: 'AIzaSyC0UDVmbiWO9hvP1rer4UOVDTs_mw8PDX0',
  authDomain: 'amn-wldkwt.firebaseapp.com',
  databaseURL: 'https://amn-wldkwt.firebaseio.com',
  projectId: 'amn-wldkwt',
  storageBucket: 'amn-wldkwt.appspot.com',
  messagingSenderId: '857726510105',
  appId: '1:857726510105:web:f9ccdc69e64f1819'
};


@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    ChatSectionComponent,
    UpdateJobseekerProfileComponent,
    JobseekerProfileViewComponent,
    EmployerProfileViewComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    DialogDataExampleDialogComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatRadioModule,
    MatBadgeModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatExpansionModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatBottomSheetModule,
    DragDropModule,

    FlexLayoutModule
  ],
  providers: [MatDatepickerModule],
  entryComponents: [DialogDataExampleDialogComponent, BottomSheetOverviewExampleSheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
