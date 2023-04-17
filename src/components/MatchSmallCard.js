import {React} from "react"
import { Link } from "react-router-dom";
import './MatchSmallCard.scss';

export const MatchSmallCard=({teamName,match})=>{

   const otherTeam = match.team1 ===teamName?match.team2:match.team1;
   const otr =`/teams/${otherTeam}`;
   const isMatchwin = teamName===match.matchWinner;
    return (
      <div  className={isMatchwin? 'MatchSmallCard won-card':'MatchSmallCard lost-card'}>

        <span className="vs">vs</span>
           <h2> <Link to={otr}> {otherTeam}</Link> </h2>
          
            <p className="match-result"> {match.matchWinner} won by {match.resultMargin} {match.result} </p>
      </div>
    );
}