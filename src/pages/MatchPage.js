import {React,useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

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
    },[]
    
  )

    return (
      <div className="MatchPage">
           <h1>This is a matcj page</h1>

           {matches.map(match => <MatchDetailCard   teamName={teamName} match= {match} />)}
      </div>
    );
}