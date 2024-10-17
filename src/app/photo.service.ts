import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPhoto } from './i-photo';
import { catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  photoArr: iPhoto[] = [];
  likedArr: iPhoto[] = [];
  constructor(private hppt: HttpClient) {}

  getAllPhotos() {
    return this.hppt.get<iPhoto[]>(this.apiUrl).pipe(
      catchError((error) => {
        return throwError(() => {
          let message = '';
          if (error.status === 404) {
            message = ' pagina non trovata ';
          } else if (error.status === 500) {
            message = ' errore cinquecento ';
          }
          return message;
        });
      })
    );
  }

  deletePhoto(id: number) {
    return this.hppt.delete(`${this.apiUrl}/${id}`);
  }

  likePhoto(p: iPhoto) {
    this.likedArr.push(p);
    return of(p);
  }
}
