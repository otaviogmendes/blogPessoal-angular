import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem []

// injeção de dependencias
  constructor(private postagemService: PostagemService) { }
//Tudo que eu quiser que seja carregado eu coloco aqui
  ngOnInit() {
    this.findallPostagens()
  }

  findallPostagens()
  {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=> {this.listaPostagens = resp})
  }
}
