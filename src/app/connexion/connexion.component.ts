import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private router: Router) { }

  goToOtherComponent() {
    // Navigate to the desired component
    this.router.navigate(['/inscription']);
  }
}
