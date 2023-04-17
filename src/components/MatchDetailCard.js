import {React} from "react"
import { Link } from "react-router-dom";

export const MatchDetailCard=({teamName,match})=>{
  if(!match)return null;
  const otherTeam = match.team1 ===teamName?match.team2:match.team1;
   const otr =`/teams/${otherTeam}`;
    return (
      <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
             
              <h1>  vs <Link to={otr}> {otherTeam}</Link></h1>
              <h2> on {match.date}</h2>
              <h2>at {match.venue}</h2>
              <h2> {match.matchWinner} won by {match.resultMargin} {match.result} </h2>

      </div>
    );
}