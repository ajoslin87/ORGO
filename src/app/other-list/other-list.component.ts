 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent {

    onOtherItemDelete(otherItem) {}


    otherItems=[
      {
      id: 1,
      name: "firebug",
      medium: "series",
      category: "Science Fiction",
      year: 2010,
      watchedOn :1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "the OA",
      medium: "series",
      category: "science Fiction",
      year: 2016,
      watchedOn: "1/12/2016",
      isFavorite: false
    }

  ];

}
