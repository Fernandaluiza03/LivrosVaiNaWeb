import s from './início.module.scss'
import imagem1 from '../../assets/imagem1doacao.png'
import imagem2 from '../../assets/imagem2doacao.png'
import imagem3 from '../../assets/imagem3doacao.png'
import imagem4 from '../../assets/imagem4doacao.png'

export default function Início(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
               <div className={s.containerCards}>
               <section>
                    <img src={imagem1} alt="Imagem ilustrativa de um círculo social de 4 pessosas  " />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </section>
                <section>
                    <img src={imagem2} alt="Imagem ilustrativa de uma pessoa com um livro aberto "/>
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </section>
                <section>
                    <img src={imagem3} alt="Imagem ilustrativa de 6 pssoas e uma mão fechada representando a tranformação de vidas atraves do conhecimento. "/>
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </section>
                <section>
                    <img src={imagem4} alt="Imagem ilustrativa de uma balança" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </section>
               </div>
            </section>
        </main>
    )    
}