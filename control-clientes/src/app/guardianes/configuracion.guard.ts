import { ConfiguracionService } from './../servicios/configuracion.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionGuard implements CanActivate {

  constructor(
    private router: Router,
    private configuracionService: ConfiguracionService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.configuracionService.getConfiguracion().pipe(
      map(configuracion => {
        if (configuracion.permitirRegistro) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }

}
