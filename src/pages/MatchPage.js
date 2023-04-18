import {React,useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import { MatchDetailCard } from '../components/MatchDetailCard';
import {YearSelector} from '../components/YearSelector'
//import { MatchSmallCard } from '../components/MatchSmallCard';
import './MatchPage.scss'

export const MatchPage=()=>{
  // const teamName="Delhi Capitals"

  const [matches,setMatches] =useState([]);
  const{teamName,year} =useParams();

   useEffect(
    ()=>{
      const fethcMatches = async ()=>{
           const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
           const data=await response.json();
        //   console.log(data)
        setMatches(data)
           
      }
      fethcMatches();
    },[teamName,year]
    
  )

    return (
      <div className="MatchPage">
           
           <div className="year-selector">
            <h4>Select year</h4>
           <YearSelector teamName={teamName}></YearSelector>
           </div>
           
           <div>
            <h1 className="page-heading"> {teamName} matches in {year} </h1>
           {matches.map(match => <MatchDetailCard  key={match.id} teamName={teamName} match= {match} />)}
           </div>
      </div>
    );
}