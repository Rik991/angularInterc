import { Component } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { iPhoto } from '../../i-photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private photoSvc: PhotoService) {}
  photoArray: iPhoto[] = [];
  likedArr: iPhoto[] = [];

  ngOnInit() {
    this.photoSvc.getAllPhotos().subscribe((p) => {
      this.photoArray = p;
    });
  }

  cancella(id: number) {
    this.photoSvc.deletePhoto(id).subscribe(() => {
      this.photoArray = this.photoArray.filter((p) => p.id !== id);
    });
  }

  liked(p: iPhoto) {
    this.photoSvc.likePhoto(p);
    this.likedArr.push(p);
    console.log(this.likedArr);
  }
}
