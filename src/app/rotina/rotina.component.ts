import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';



@Component({
    selector: 'app-rotina',
    standalone: true,
    templateUrl: './rotina.component.html',
    styleUrl: './rotina.component.css',
    imports: [CommonModule, HomeComponent,MatFormFieldModule,MatInputModule,FormsModule,MatTabsModule,MatButtonModule,MatListModule,MatSelectModule]
})
export class RotinaComponent {

}
