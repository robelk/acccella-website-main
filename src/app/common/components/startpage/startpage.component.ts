import { Component } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  buttonLabels: string[] = ['E-handel', 'Finans', 'Bokning', 'Statistik och analys', 'Mobilapplikation', 'Intern Kommunikation', 'Webbapplikation'];

  services = [
    { text: 'Webb.', imageUrl: '../../../../assets/images/webb.png' },
    { text: 'Internt.', imageUrl: '../../../../assets/images/internt.png' },
    { text: 'Mobilt.', imageUrl: '../../../../assets/images/mobile.png' },
  ];

  images = [
    '../../../../assets/images/mobileslide.png',
    '../../../../assets/images/finance.png',
    '../../../../assets/images/booking.png',
    '../../../../assets/images/statistics.png',
    '../../../../assets/images/mobileslide2.jpg',
    '../../../../assets/images/cgat.png',
    '../../../../assets/images/webb.png',
  ];

  currentImage: string = this.images[0]; 
  isFading: boolean = false;

  constructor() {}

  changeImage(index: number) {
    this.isFading = true;
    setTimeout(() => {
      this.currentImage = this.images[index];
      this.isFading = false;
    }, 500); 
  }
}