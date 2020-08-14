import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://images3.alphacoders.com/109/thumb-350-1092590.jpg',
    'https://images2.alphacoders.com/109/thumb-350-1090609.jpg',
    'https://images3.alphacoders.com/109/thumb-350-1094136.jpg',
    'https://images8.alphacoders.com/109/thumb-350-1094691.jpg'
  ];

  itemWidth: number;
  config = 4;

  constructor(@Inject(GalleryConfig) @Optional() config: number) {
    if (config) {
      this.config =config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
