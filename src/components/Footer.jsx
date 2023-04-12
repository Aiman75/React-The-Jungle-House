// import { useState } from 'react'
import '../styles/Footer.css'
import EmailForm from './EmailForm';

function Footer() {
	// const [inputValue, setInputValue] = useState('Inscrivez votre email ici')

    // const isInputError = (value) => {
    //     if (!value.includes("@")) {
    //         setInputValue(value);
    //       } 
    //   };

    // function checkValue(value) {
    //     if (!value.includes("@")) {
    //         setInputValue(value);
    //         alert("L'adresse e-mail doit inclure le caractère @");
    //       } 
    // }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <EmailForm />
            {/* <textarea
            value={inputValue}
            onChange={(e) => checkValue(e.target.value)}
        />
        <button onClick={() => alert(inputValue)}>Envoyer</button>
        {isInputError && <div>L'adresse e-mail doit inclure le caractère @</div>} */}
		</footer>
	)
}

export default Footer