import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";
import Rodape from "../../componentes/Rodape";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal} >
                <Menu />
                <div className={styles.principal__imagem}>
                    <h1>Galeria mais completa do espaço</h1>
                    <img src={banner} alt="Imagem da terra vista do espaço"/>
                </div>
            </section>
        </main>
        <div>
            <Galeria />
        </div>
        <Rodape/> 
        </>
    )
}