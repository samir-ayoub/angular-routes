import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
  			private route: ActivatedRoute,
  			private router: Router) { }

  ngOnInit() {
  	// esse '+' abaixo converte o id passado para o tipo number
  	const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
    	.subscribe(
			(params: Params) => {
				this.server = this.serversService.getServer(+params['id']);
			}
		);
  }

  onEdit() {
  	// maneira de navegar para a rota edit
  	this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
