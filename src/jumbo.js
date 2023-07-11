import ImgJumbo from './image/cover-bg.png';
import './App.css';

function Jumbo() {
    return (
        <div className='jumbotron'>
            <img src={ImgJumbo} />
            <div className='titleJumbo'>
                <h2>Generative AI</h2>
                <span>Cos'è la Generative AI: GPT ChatGPT e DALL-E</span>
            </div>
        </div>
    );
}

export default Jumbo;
