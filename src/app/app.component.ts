import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurtomerManageComponent } from './pages/curtomer-manage/curtomer-manage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurtomerManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system';
}
