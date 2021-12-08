import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Persib',
    AwayTeam:'Persija',HomeScore:1,AwayScore:3,
    RefName:'Rizki',notes:'Pertandingan Elclasico Indonesia'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Persipura',
    AwayTeam:'Persiwa Wawena',HomeScore:4,AwayScore:2,
    RefName:'Tejo',notes:'Pertandingan Tanah Papua'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Persebaya',
    AwayTeam:'Arema',HomeScore:2,AwayScore:4,
    RefName:'Donny',notes:'Derby Jawa'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'Persik',
    AwayTeam:'Persiba',HomeScore:2,AwayScore:4,
    RefName:'Diki',notes:'Pertandingan Liga 2'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Sriwijaya',
    AwayTeam:'Pesis Solo',HomeScore:2,AwayScore:3,
    RefName:'Thoriq',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'Persib',type:'Over 30'},
    {id:2,name:'Persiha',type:'Over 30'},
    {id:3,name:'Persipura',type:'Over 30'},
    {id:4,name:'Persiwaa',type:'Over 30'},
    {id:5,name:'Arema',type:'Over 30'},
    {id:6,name:'Persik',type:'Over 30'},
]