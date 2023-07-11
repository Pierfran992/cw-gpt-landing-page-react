import GenerativeAi from './image/generative-ai.png';
import './App.css';

// paragrafo introduttivo della pagina
function IntroductivPar() {
    return (
        <section>
            <p>
                La generative AI, o intelligenza artificiale generativa, si riferisce a un campo dell'intelligenza artificiale che si concentra sulla creazione di contenuti originali, come immagini, musica, testo o anche video, da parte di un sistema autonomo. <strong>In parole semplici, la generative AI è come insegnare a un computer a essere creativo.</strong>
            </p>
        </section>
    );
}

// paragrafo Generative AI
function ParGenAi() {
    return (
        <section>
            <div className='parGenAi' >
                <div className='slotImg'>
                    <img src={GenerativeAi} />
                </div>

                <div className='slotText'>
                    <h4>Generative AI</h4>
                    <p>
                        La generative AI funziona analizzando un grande insieme di dati di input, come immagini o testi esistenti, per imparare i modelli e le caratteristiche presenti in quei dati. Una volta che il modello di generative AI ha imparato da questi dati, può utilizzare tale conoscenza per generare nuovi contenuti in base ai modelli e alle regole appresi.
                    </p>
                </div>
            </div>
        </section>
    );

}

// paragrafo dei modelli del GPT
function ParGptModels() {
    return (
        <section>

        </section>
    );
}


// main
function Main() {
    return (
        <main>
            {/* container principale del main */}
            <div className='containerMain'>
                <IntroductivPar />
                <ParGenAi />
            </div>
        </main>
    );
};

export default Main;