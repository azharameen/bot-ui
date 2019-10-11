import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog, MatBottomSheetRef, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private bottomsheet: MatBottomSheet) {
    this.snackBar.open('Hello ameen', 'ok', {
      duration: 2000
    });


  }

  ngOnInit() { }

  openDialog() {
    this.dialog.open(DialogDataExampleDialogComponent, {
      width: '250px'
    });
  }


  openBottomSheet() {
    this.bottomsheet.open(BottomSheetOverviewExampleSheetComponent, {
      data: [{
        url: 'https://keep.google.com/',
        title: 'Google Keep',
        subtitle: 'Add to a note'
      },
      {
        url: 'https://docs.google.com/',
        title: 'Google Docs',
        subtitle: 'Embed in a document'
      },
      {
        url: 'https://plus.google.com/',
        title: 'Google Plus',
        subtitle: 'Share with your friends'
      },
      {
        url: 'https://hangouts.google.com/',
        title: 'Google Hangouts',
        subtitle: 'Show to your coworkers'
      }]
    });
  }

}



@Component({
  selector: 'app-dialog-data-example-dialog',
  template: '<h1 mat-dialog-title>Favorite Animal</h1>',
})
export class DialogDataExampleDialogComponent { }



@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  template: `
  <mat-nav-list>
    <a *ngFor="let opt of data" [href]="opt.url" mat-list-item (click)="openLink($event)">
      <span mat-line>{{ opt.title }}</span>
      <span mat-line>{{ opt.subtitle }}</span>
    </a>
  </mat-nav-list>`,
})
export class BottomSheetOverviewExampleSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}