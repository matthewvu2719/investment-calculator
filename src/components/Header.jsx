import imgSrc from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <header id='header'>
            <img src={imgSrc} alt='Gucci Bank'/>
            <h1>Investment Calculator</h1>
        </header>
    );
}