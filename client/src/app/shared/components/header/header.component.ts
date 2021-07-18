import { Component, OnInit , Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { MaterialModule } from 'src/app/material.model';
import { UtilsService } from '../../services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = false;
  isLogged = false;
  rol = "Empleado";
  isChecked = false;
  private subscription: Subscription = new Subscription();
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private authSvc:AuthService , private ustilsSvs:UtilsService) { }
  ngOnInit(): void {
    this.subscription.add(
    this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    );
    if (this.isChecked) {
      localStorage.setItem('point', '1');
      localStorage.setItem('Rol', 'Empleado');
    } 
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggleSidenav(): void{
    this.toggleSidenav.emit();
  }
  onLogout(){
    this.authSvc.logout();
    this.ustilsSvs.openSidebar(false);
  }
}
