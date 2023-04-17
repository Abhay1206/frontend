import {React,useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';

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
      <div className="TeamPage">
           <div className="team-name-section"> <h1 className="team-name"> {team.teamName} </h1></div>
           <div className="win-loss-section">
            
            Winsvslosses
            <PieChart
  data={[
    { title: 'Loss', value: team.totalMatches-team.totalWins, color: '#a34d5d' },
    { title: 'Win', value: team.totalWins, color: '#4da375' },
    
   
  ]}
/>
           
           </div>
           <div className="match-detail-section">
             <h3>Latest Matches</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}></MatchDetailCard>
            </div>
         {team.matches.slice(1).map(match => <MatchSmallCard   teamName={team.teamName} match= {match} />)}
         <div className="more-link">
           <a href="#">More </a>
           </div>
      </div>
    );
}