import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-image: linear-gradient(100deg, #000, #c0c5c3);
	background-size: cover;  


  height: 100vh;
	font-family: 'Poppins', sans-serif;

	h1{
		font-weight: 600;
	}

	.btn{
		transition: all 0.3s ease; 
		&:hover{
			background: #35343c;
			transition: 0.3s;

		}
	}
	
	
}

`;

export default GlobalStyle;
