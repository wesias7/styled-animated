import { keyframes }  from 'styled-components'


export function flip(){
	const flip = keyframes`
	   from {
            transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
            animation-timing-function: ease-out;
        }

        40% {
            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
            animation-timing-function: ease-out;
        }

        50% {
            transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
            animation-timing-function: ease-in;
        }

        80% {
            transform: perspective(400px) scale3d(.95, .95, .95);
            animation-timing-function: ease-in;
        }

        to {
            transform: perspective(400px);
            animation-timing-function: ease-in;
        }
	`;
	
	return flip;
}