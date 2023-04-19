import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf({
    duration: 2000,
    position: {
        x: 'center',
        y: 'top',
    },
    types: [
        {
            type: 'warn',
            background: 'orange',
            duration : 3000, 
            dismissible: false
        },
        {
            type: 'error',
            background: 'indianred',
            duration: 3000,
            dismissible: false
        },
        {
            type: 'info',
            background: '#90EE90',
            duration : 3000,
            dismissible: true
        },
        {
            type: 'flight',
            background: '#FF7F50',
            duration : 4000,
            dismissible: true
        }
    ]
});

// notyf.error('Please fill out the form');


export default notyf ;