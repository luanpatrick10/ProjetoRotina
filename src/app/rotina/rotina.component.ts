import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { Rotina, RotinaDTO } from '../Interfaces/Rotina';
import { RotinaService } from './rotina.service';
import { MatTableModule } from '@angular/material/table';
import { ControladorDeSessoes } from '../utils/controlador-de-sessoes';



@Component({
    selector: 'app-rotina',
    standalone: true,
    templateUrl: './rotina.component.html',
    styleUrl: './rotina.component.css',
    imports: [CommonModule, HomeComponent, MatFormFieldModule, MatInputModule, FormsModule, MatTabsModule, MatButtonModule,
        MatListModule, MatSelectModule, MatTableModule]
})
export class RotinaComponent {
    constructor(private rotinaService: RotinaService) {
        this.rotinaService.obterTodos().subscribe((resposta) => this.rotinaDeItens = resposta)
    }
    rotina: Rotina = {
        diasDaRotina: [],
        nomeDaRotina: ''
    }
    rotinaDeItens: Array<RotinaDTO> = new Array<RotinaDTO>();
    displayedColumns: string[] = ['Nome da rotina', 'acoes'];

    public criar() {
        this.rotina.diasDaRotina = this.rotina.diasDaRotina.toString()
        this.rotinaService.criarRotina(this.rotina).subscribe(
            sucesso => {
                this.limparRotina()                
                this.rotinaService.obterTodos().subscribe((resposta) => this.rotinaDeItens = resposta)
            },
            error => {
                console.log("Erro ao criar rotina")
            }
        )
    }

    public obterRotinaDoDia(): void {
        let id: number = ControladorDeSessoes.obterUsuario().idUsuario
        this.rotinaService.obterRotinaDoUsuario(id).subscribe((valor) =>
            this.rotinaDeItens = valor
        );
    }

    public excluirRotina(id: number): void {
        this.rotinaService.removerRotina(id).subscribe((valor) => {
            this.limparRotina()
            this.rotinaService.obterTodos().subscribe((resposta) => this.rotinaDeItens = resposta)
        })
    }
    public concluirRotina(id: number): void {
        console.log("Item concluido com id: " + id)
    }

    private limparRotina() {
        this.rotina = {
            diasDaRotina: [],
            nomeDaRotina: ''
        }
    }
}
