import GenerativeAi from './image/generative-ai.png';
import Gpt4 from './image/gpt-4.png';
import DallE from './image/dall-e.png';
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
                    <img src={GenerativeAi} alt='image_generative_ai' />
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
            <h4>GPT Models</h4>

            <p>
                I modelli GPT &#40;Generative Pre-trained Transformer&#41; sono una serie di modelli di intelligenza artificiale sviluppati da <a href='#'>OpenAI</a>. Il funzionamento di GPT si basa sull'architettura del trasformatore, un tipo di rete neurale che sfrutta l'attenzione per catturare le relazioni tra le parole in un testo.
            </p>
        </section>
    );
}

// paragrafo su chatGPT
function ParChatGpt() {
    return (
        <section>
            <h4>ChatGPT</h4>

            <p>
                ChatGPT è un modello di intelligenza artificiale basato sull'architettura GPT-3.5 e viene utilizzato per la generazione di testo conversazionale. Si è dimostrato particolarmente efficace nel trattare il linguaggio naturale.
            </p>

            <img className='parChatGptImage' src={Gpt4} alt='par_chat_Gpt_image' />

            <p>
                L'obiettivo di ChatGPT è di rispondere in modo coerente e rilevante alle domande degli utenti. Tuttavia, è importante notare che non ha la capacità di comprendere il mondo o di avere esperienze reali. <strong>Le sue risposte sono basate sulle informazioni presenti nel suo addestramento e possono quindi essere limitate o obsolete.</strong>
            </p>
        </section>
    );
}

// paragrafo DALL-E
function ParDallE() {
    return (
        <section>
            <div className='parDallE'>
                <div className='slotImg'>
                    <img src={DallE} alt='image_dall_e' />
                </div>

                <div className='slotText'>
                    <h4>DALL-E</h4>
                    <p>
                        Generative AI per le immagini. Consente di generare o modificare immagini da descrizioni testuali. Modelli famosi sono <strong>DALL-E e Stable Diffusion</strong>.
                    </p>

                    <p>
                        Questo prompt ha generato l'immagine a fianco: <i>an astronaut lounging in a tropical resort in space in a vaporwave style.</i>
                    </p>
                </div>
            </div>
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
                <ParGptModels />
                <ParChatGpt />
                <ParDallE />
            </div>
        </main>
    );
};

export default Main;