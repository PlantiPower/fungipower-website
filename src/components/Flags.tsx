import React from 'react';

export const FlagEN: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 512 512" className={`${className} rounded-full object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
        <path d="M512 256c0-4.6-.1-9.2-.4-13.8L350.5 256H512zM0 256c0 4.6.1 9.2.4 13.8L161.5 256H0zM256 0c-4.6 0-9.2.1-13.8.4V161.5H256V0zM256 512c4.6 0 9.2-.1 13.8-.4V350.5H256V512zM122.9 122.9L0 44.5v19.4L103.5 125.1l19.4-2.2zM389.1 389.1L512 467.5V448L408.5 386.9l-19.4 2.2zM389.1 122.9L512 44.5v19.4L408.5 125.1l-19.4-2.2zM122.9 389.1L0 467.5V448l103.5-61.1 19.4 2.2z" fill="#d80027" />
        <path d="M512 256c0-11.4-1.2-22.5-3.5-33.1L350.5 256H512zM3.5 289.1C1.2 278.5 0 267.4 0 256h161.5L3.5 289.1zM256 0c11.4 0 22.5 1.2 33.1 3.5V161.5H256V0zM222.9 508.5c10.6 2.3 21.7 3.5 33.1 3.5V350.5H222.9v158zM122.9 122.9L0 44.5v33.1l122.9 88.3V122.9zM389.1 389.1L512 467.5v-33.1l-122.9-88.3v43zM389.1 122.9L512 44.5v33.1l-122.9 88.3V122.9zM122.9 389.1L0 467.5v-33.1l122.9-88.3v43.2z" fill="#0052b4" />
        <path d="M0 222.9h222.9V0h66.2v222.9H512v66.2H289.1V512h-66.2V289.1H0v-66.2z" fill="#d80027" />
    </svg>
);

export const FlagNL: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 512 512" className={`${className} rounded-full object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 401.7l23.5 14.5c64 39.7 141.5 59.5 232.5 59.5s168.5-19.8 232.5-59.5l23.5-14.5V330.4H0v71.3z" fill="#0052b4" />
        <path d="M0 110.3v71.3h512v-71.3l-23.5-14.5C424.5 56.1 347 36.3 256 36.3s-168.5 19.8-232.5 59.5L0 110.3z" fill="#d80027" />
        <path d="M0 181.6h512v148.8H0V181.6z" fill="#f0f0f0" />
    </svg>
);

export const FlagDE: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 512 512" className={`${className} rounded-full object-cover shadow-sm`} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 110.3l23.5-14.5C87.5 56.1 165 36.3 256 36.3s168.5 19.8 232.5 59.5l23.5 14.5V181.6H0v-71.3z" fill="#000" />
        <path d="M0 181.6h512v148.8H0V181.6z" fill="#d80027" />
        <path d="M0 330.4h512v71.3l-23.5 14.5c-64 39.7-141.5 59.5-232.5 59.5s-168.5-19.8-232.5-59.5L0 401.7v-71.3z" fill="#ffda44" />
    </svg>
);
