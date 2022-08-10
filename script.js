let rc = 0;
            let ps = 0;
            let cs = 0;
            let playerSelection = '';
            let computerSelection = '';
            
            
            function getComputerChoice()
            {
                let elemnts = ['Rock','Paper','Scissor'];
                let rnum = Math.floor(Math.random()*elemnts.length);
                let compChoice = elemnts[rnum];
                return compChoice;
            }
           
            function winner(playerSelection , computerSelection) {
                let winnermsg;

                if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock')
                {   
                    ++cs,++ps;
                    return "The game is a Rock tie";
                    
                }
                else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper')
                {   
                    ++cs,++ps;
                    return "The game is a paper tie";
                    
                }
                else if(playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'scissor')
                {   
                    ++cs,++ps;
                    return "The game is a scissor tie";
                    
                }
                else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper')
                {   
                    ++cs;
                    return "Computer Wins the game cos it is Paper";
                }
                else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissor')
                {
                    ++ps;
                    return "You win cos Rock beats Scissor!";
                }
                else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')
                {
                    ++ps;
                    return "You Win Cos paper beats Rock!";
                }
                else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissor')
                {
                    ++cs;
                    return "Computer Wins cos scissor beats paper";
                }
                else if(playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'rock')
                {
                    ++cs;
                    return "Computer wins cos rock beats scissor";
                }
                else if(playerSelection.toLowerCase() === 'scissor' && computerSelection.toLowerCase() === 'paper')
                {
                    ++ps;
                    return "You win cos scissor beats paper!";
                }
                else
                return 'Pls input a valid choice of 3 options!'
                
            }   

            function scoreboard(btn) {
                if(cs===5 || ps===5)
                {
                if(cs>ps)
                {
                    let compWins = document.querySelector('.finalResult');
                    compWins.textContent = `Computer Wins!\n Computer - ${cs} | Player - ${ps}`;
                    btn.preventDefault();
                }
                else if(ps>cs)
                {
                    let playerWins = document.querySelector('.finalResult');
                    playerWins.textContent = `Player Wins!\n Computer - ${cs} | Player - ${ps}`;
                }
                }
                else if(cs===5 && ps===5)
                {
                    let tieGame = document.querySelector('.finalResult');
                    tieGame.textContent = `Tie Game!\n Computer - ${cs} | Player - ${ps}`;
                }
            }

            function game(){
                //for(let i=0; (cs < 5 && ps < 5);i++){

                    //computerSelection = getComputerChoice();
                    //console.log(`Choice of computer - ${computerSelection}`);

                    const buttons = document.querySelectorAll('.playerButtons button');
                    buttons.forEach(btn =>{
                     btn.addEventListener('click',()=>{
                        playerSelection = btn.id;
                        let playerText = document.querySelector('.playerChoice');
                        playerText.textContent = ` Player Weapon - ${playerSelection}`;
                        
                        computerSelection = getComputerChoice();
                        let computerText = document.querySelector('.computerChoice');
                        computerText.textContent =` Computer Weapon - ${computerSelection}`;

                    //console.log(`The player Selection is - ${playerSelection}`);
            

                    let gameResult = winner(playerSelection,computerSelection);
                    //console.log(`Result - ${gameResult}`);
                    //console.log(`CS = ${cs} | PS = ${ps}`);
                    let resultText = document.querySelector('.resultGame');
                    resultText.textContent = ` Game Result - ${gameResult}`;

                    const rcount = document.querySelector('.roundCount');
                    const pscore = document.querySelector('.playerScore');
                    const cscore = document.querySelector('.computerScore');

                    const roundCounter = document.createElement('h4');
                    roundCounter.textContent = ++rc;
                    rcount.appendChild(roundCounter);

                    const pScoreCounter = document.createElement('h4');
                    pScoreCounter.textContent = ps;
                    pscore.appendChild(pScoreCounter);

                    const cScoreCounter = document.createElement('h4');
                    cScoreCounter.textContent = cs;
                    cscore.appendChild(cScoreCounter);

                    if(cs===5 || ps===5)
                    {
                        if(cs>ps)
                        {
                            let compWins = document.querySelector('.finalResult');
                            compWins.textContent = `Computer Wins!\n Computer - ${cs} | Player - ${ps}`;
                            
                            document.getElementById('Rock').disabled = true;
                            document.getElementById('Paper').disabled = true;
                            document.getElementById('Scissor').disabled = true;
                            
                            let startNewPos = document.querySelector('.buttonRestart');
                            let startNew = document.createElement('button');
                            startNew.textContent = "Restart";
                            startNew.setAttribute('id','restartBtn');
                            startNewPos.appendChild(startNew);
                            startNew.addEventListener('click',restartGame);
                           
                            
                        }
                        else if(ps>cs)
                        {
                            let playerWins = document.querySelector('.finalResult');
                            playerWins.textContent = `Player Wins!\n Computer - ${cs} | Player - ${ps}`;
                            
                            document.getElementById('Rock').disabled = true;
                            document.getElementById('Paper').disabled = true;
                            document.getElementById('Scissor').disabled = true;
                           
                            let startNewPos = document.querySelector('.buttonRestart');
                            let startNew = document.createElement('button');
                            startNew.textContent = "Restart";
                            startNew.setAttribute('id','restartBtn');
                            startNewPos.appendChild(startNew);
                            startNew.addEventListener('click',restartGame);
                           
                            
                        }
                    }
                    if(cs===5 && ps===5)
                    {
                        let tieGame = document.querySelector('.finalResult');
                        tieGame.textContent = `Tie Game!\n Computer - ${cs} | Player - ${ps}`;

                        document.getElementById('Rock').disabled = true;
                        document.getElementById('Paper').disabled = true;
                        document.getElementById('Scissor').disabled = true;
                        
                        let startNewPos = document.querySelector('.buttonRestart');
                        let startNew = document.createElement('button');
                        startNew.textContent = "Restart";
                        startNew.setAttribute('id','restartBtn');
                        startNewPos.appendChild(startNew);
                        startNew.addEventListener('click',restartGame);
                        
                    }
                    
                //}
            })}     
                );
        }

        function restartGame(btnid){
            ps = 0;
            cs = 0;
            rc = 0;

            document.getElementById('Rock').disabled = false;
            document.getElementById('Paper').disabled = false;
            document.getElementById('Scissor').disabled = false;

            let resetResult = document.querySelector('.finalResult');
            resetResult.textContent = ``;

            let playerText = document.querySelector('.playerChoice');
            playerText.textContent = ` Player Weapon - `;

            let computerText = document.querySelector('.computerChoice');
            computerText.textContent =` Computer Weapon - `;

            let resultText = document.querySelector('.resultGame');
            resultText.textContent = ` Game Result - `;

            const rcount = document.querySelector('.roundCount');
            rcount.textContent = "";
                const roundCounter = document.createElement('h2');
                    roundCounter.textContent = "Round";
                    rcount.appendChild(roundCounter);
            const pscore = document.querySelector('.playerScore');
            pscore.textContent = "";
                const pscorep = document.createElement('h2');
                    pscorep.textContent = "Player Score";
                    pscore.appendChild(pscorep);
            const cscore = document.querySelector('.computerScore');
            cscore.textContent = "";
                const cscorec = document.createElement('h2');
                    cscorec.textContent = "Computer Score";
                    cscore.appendChild(cscorec);


            document.getElementById('restartBtn').remove();
        }
            
             
           game();
          
           