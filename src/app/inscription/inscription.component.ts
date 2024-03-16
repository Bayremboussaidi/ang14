import { Component } from '@angular/core';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor() { }

  isLoggedIn: boolean = false;

  onClick() {
    alert('you are welcome :)');
    
    // Mettre à jour l'état de connexion une fois la connexion réussie
    this.isLoggedIn = true;
    
  }



}
