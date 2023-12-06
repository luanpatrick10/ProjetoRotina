export class ControladorDeSessoes {

    public static obterUsuario(): any {        
        let objeto = localStorage.getItem('projetoRotinaUsuario')
        if(typeof objeto === 'string')
            return JSON.parse(objeto);
    }
    public static salvarDadosLocaisUsuario(loginDTO: any) {        
        this.salvarUsuario(loginDTO);
    }
    public static limparDadosLocaisUsuario() {
        localStorage.removeItem('projetoRotinaUsuario');        
    }    
    public static salvarUsuario(loginDTO: any) {
        localStorage.setItem('projetoRotinaUsuario', JSON.stringify(loginDTO));
    }
}