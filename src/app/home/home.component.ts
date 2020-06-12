import { Component, OnInit } from '@angular/core';
import { Tile } from '../pets';
import { MatDialog } from '@angular/material/dialog';
import { PetDetailsComponent } from '../pet-detail/pet-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles = Tile;
  tile2 = [];

  constructor(public dialog: MatDialog) { }
  openDialog(jivotno) {
    let dialogRef = this.dialog.open(PetDetailsComponent, { data: jivotno });
  };

  ngOnInit() {
    this.get3randon();

  }
  get3randon() {
    for (let i = 0; i < 3; i++) {
      this.tile2.push(this.tiles[Math.floor(Math.random() * this.tiles.length)]);
      console.log(this.tile2);
    }
  }

}
