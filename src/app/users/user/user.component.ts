import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.user = {
  		id: this.route.snapshot.params['id'],
  		name:this.route.snapshot.params['name']
  	};
    // funcao assincrona que so roda quando o id/name muda
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  // nao é obrigatorio, mas garante que Angular nao mantenha armazenadas rotas destruidas
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }



}
