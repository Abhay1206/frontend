import {React,useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage=()=>{

  const [team,setTeam] =useState({matches:[]});
  const {teamName} =useParams();

  useEffect(
    ()=>{
      const fethcMatches = async ()=>{
           const response = await fetch(`http://localhost:8080/teams/${teamName}`);
           const data=await response.json();
        //   console.log(data)
        setTeam(data)
           
      }
      fethcMatches();
    },[teamName]
    
  )

  if(!team || !team.teamName){
    return (
      <div>
        <h1>Team not found</h1>
      </div>
    )
  }

    return (
      <div className="team_page">
            <h1> {team.teamName} </h1>
           <MatchDetailCard teamName={team.teamName} match={team.matches[0]}></MatchDetailCard>
         {team.matches.slice(1).map(match => <MatchSmallCard   teamName={team.teamName} match= {match} />)}
      </div>
    );
}