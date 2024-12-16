const snowflakeCount = 30; 
const body = document.body;

        for (let i = 0; i < snowflakeCount; i++) {
            let snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerText = '❄️';  

            let left = Math.random() * 100;  
            let animationDuration = Math.random() * 5 + 5;  

            snowflake.style.left = left + '%';
            snowflake.style.animationDuration = animationDuration + 's';

            body.appendChild(snowflake);

            let driftDirection = Math.random() < 0.5 ? 'left' : 'right';
            snowflake.style.animation = `fall ${animationDuration}s linear infinite, drift 15s ease-in-out infinite`;

            let keyframes = `
                @keyframes drift {
                    0% { left: ${left}%; }
                    50% { left: ${left + (driftDirection === 'left' ? -1 : 1)}%; }
                    100% { left: ${left}%; }
                }
            `;
            let styleSheet = document.styleSheets[0];
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        }
