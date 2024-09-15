// import React from 'react'
import App from '../App'
import Popup from './popup'
import { useEffect,useState} from 'react';
// import { useParams} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Routes, Route,Link,useNavigate, useParams, Navigate} from "react-router-dom";
import { API } from '../global';
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CardContent } from '@mui/material';
import { ImageSearchRounded } from '@mui/icons-material';




// const movies=[
//     {
//         id:"100",
//         name:"Ironman2",
//         pic:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//         des:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.",
//         des1:"Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau and written by Justin Theroux, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Mickey Rourke, and Samuel L. Jackson. Six months after Iron Man, Tony Stark resists calls from the United States government to hand over the Iron Man technology, which is causing his declining health. Meanwhile, Russian scientist Ivan Vanko (Rourke) uses his own version of the technology to pursue a vendetta against the Stark family.",
//         trailer: "https://www.youtube.com/embed/wKtcmiifycU",
//     },
    
//     {   id:"101",
//         name:"Avengers Endgame",
//         pic:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//         des:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
//         des1:"Marvel's The Avengers (titled Marvel Avengers Assemble in the United Kingdom and Ireland and commonly referred to as simply The Avengers) is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[a] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
//         trailer: "https://www.youtube.com/embed/mbzjK3ykr-M",
//     },
    
//     {   id:"102",
//         name:"Ratatouille",
//         pic:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//         des:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//         des1:"Ratatouille (/ˌrætəˈtuːi/ RAT-ə-TOO-ee) is a 2007 American animated comedy-drama film[3] produced by Pixar Animation Studios for Walt Disney Pictures. The eighth film produced by Pixar, it was written and directed by Brad Bird and produced by Brad Lewis, from an original idea by Jan Pinkava,[4] who was credited for conceiving the film's story with Bird and Jim Capobianco. The film stars the voices of Patton Oswalt, Lou Romano, Ian Holm, Janeane Garofalo, Peter O'Toole, Brian Dennehy, Peter Sohn and Brad Garrett. The title refers to the French dish ratatouille, and also references the species of the main character, a rat. Set mostly in Paris, the plot follows a young rat Remy (Oswalt) who dreams of becoming a chef at Auguste Gusteau's (Garrett) restaurant and tries to achieve his goal by forming an unlikely alliance with the restaurant's garbage boy Alfredo Linguini (Romano).",
//         trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",

//     },
//     {id:"103",
//         name:"RRR",
//         pic:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//         des:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//         des1:"RRR (subtitled onscreen as Roudram Ranam Rudhiram) is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj.",
//         trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",

//     },
//     {id:"104",
//         name:"Jai Bhim",
//         pic:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//         des:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//         des1:"Jai Bhim (/dʒeɪ biːm/ transl. Victory to Bhim) is a 2021 Indian Tamil-language legal drama film that was directed by T. J. Gnanavel, and produced by Jyothika and Suriya under the banner of 2D Entertainment. The film stars Suriya, Lijomol Jose and Manikandan with Rajisha Vijayan, Prakash Raj, Guru Somasundaram, and Rao Ramesh in supporting roles. The film is about police bias and state violence against a marginalised community.[2] Jai Bhim is based on a 1993 Cuddalore incident that involves a legal case fought by Justice K. Chandru;[3][4] it revolves around Sengeni and Rajakannu, a couple from the Irular tribe.[5] Police arrested Rajakannu and he later went missing from the police station. Sengeni seeks the help of lawyer Chandru to seek justice for her husband.",
//         trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
//     },
//     {id:"105",
//         name:"Interstellar",
//         pic:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//         des:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//         des1:"Interstellar is a 2014 epic science fiction drama film directed by Christopher Nolan, who co-wrote it with his brother Jonathan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, and Matt Damon. Set in a dystopian future where Earth is suffering from catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.The screenplay had its origins in a script Jonathan developed in 2007, and was originally set to be directed by Steven Spielberg.",
//         trailer:"https://www.youtube.com/embed/r0synl-lI4I",

//     },
    // {id:"106",
    //     name:"Bahubali",
    //     pic:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    //     des:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    //     des1:"Baahubali: The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, and Nassar. The first of Duology, the film follows Sivudu, an adventurous young man who helps his love Avantika rescue Devasena, the former queen of Mahishmati who is now a prisoner under the tyrannical rule of king Bhallaladeva. The story concludes in Baahubali 2: The Conclusion.The film's story was written by Rajamouli's father V. Vijayendra Prasad,",
    //     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",

    // },
    // {id:"107",
    //     name:"96",
    //     pic:"https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
    //     des:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
    //     des1:"'96 is a 2018 Indian Tamil-language romantic drama film[4] written and directed by C. Prem Kumar in his directorial debut. Produced by S. Nanthagopal of Madras Enterprises, the film was distributed by Lalit Kumar under his banner, Seven Screen Studio. Vijay Sethupathi and Trisha Krishnan are in the prominent roles as Ram and Jaanu, while newcomers Gouri G. Kishan and Aadithya Bhaskar played the younger versions. The film also stars an ensemble cast including Bagavathi Perumal, Devadarshini, Aadukalam Murugadoss, and others. The film revolves around the reunion of former students from the batch of 1996, twenty-two years after their graduation. The reunion also serves as an opportunity for two former lovers, Ram and Jaanu, to resolve issues surrounding their separation.[5]Prem Kumar wrote the script in December 2015, during the period of Chennai floods and completed the entire script within 20 days, which revolved around his life at his high school reunion.",
    //     trailer:"https://www.youtube.com/embed/r0synl-lI4I",

    // },
    // {id:"108",
    //     name:"Dark knight",
    //     pic:"https://cdn.shopify.com/s/files/1/1057/4964/files/The-Dark-Knight-Vintage-Movie-Poster-Original-1-Sheet-27x41_58f02be9-1e4e-4884-95b2-1f1b0d7437a1_299x.jpg?v=1719429336",
    //     des:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
    //     des1:"The Dark Knight is a 2008 superhero film directed by Christopher Nolan, from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins (2005), and the second installment in The Dark Knight trilogy. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos. The ensemble cast includes Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman.Warner Bros. Pictures prioritized a sequel following the successful reinvention of the Batman film series with Batman Begins. ",
    //     trailer:"https://www.youtube.com/embed/EXeTwQWrcwY",

    // },
    // {id:"109",
    //     name:"M S Dhoni",
    //     pic:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
    //     des:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    //      des1:"M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film directed and co-written by Neeraj Pandey. It is based on the life of former Test, ODI and T20I captain of the Indian national cricket team, Mahendra Singh Dhoni. The film stars the late Sushant Singh Rajput as MS Dhoni, along with Disha Patani, Kiara Advani, and Anupam Kher. The film chronicles the life of Dhoni from a young age through a series of life events.The idea of the biopic was put forward by Dhoni's manager, Arun Pandey, after encountering an incident at an airport after the 2011 Cricket World Cup Final.",
    //      trailer:"https://youtu.be/G2zb_nbrnyU",

    //     },
    // {id:"110",
    //     name:"king kong",
    //     pic:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
    //     des:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. ",
    //     des1:"King Kong is a 2005 epic adventure monster film co-written, produced, and directed by Peter Jackson. It is the ninth entry in the King Kong franchise and the second remake of the 1933 film of the same title, the first being the 1976 remake. The film stars Naomi Watts, Jack Black, and Adrien Brody. Set in 1933, it follows the story of an ambitious filmmaker who coerces his cast and hired ship crew to travel to mysterious Skull Island. There they encounter prehistoric creatures and a legendary giant gorilla known as Kong, whom they capture and take to New York City.Development began in early 1995, when Universal Pictures approached Jackson to direct the remake of the original 1933 film.",
    //     trailer:"https://www.youtube.com/embed/9extfjDZCts",

    // },
    // {id:"111",
    //     name:"Ironman2",
    //     pic:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    //     des:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.",
    //     des1:"Marvel's The Avengers (titled Marvel Avengers Assemble in the United Kingdom and Ireland and commonly referred to as simply The Avengers) is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[a] it is the sixth film in the Marvel Cinematic Universe (MCU). Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, and Jeremy Renner as the Avengers, alongside Tom Hiddleston, Stellan Skarsgård, and Samuel L. Jackson. In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.",
    //     trailer: "https://www.youtube.com/embed/wKtcmiifycU",

    // },
    
    
// ]

// let a= false


export default function Movieapp(){
    const[movi,setMovi]=useState([]);


    const[buttonPopup,setButtonPopup]= useState(false);
    const[des,setDes]= useState(movi[0]);
    const[pic,setPic]= useState(movi[0]);
    const[name,setName]= useState(movi[0]);
    // const[trailer,setTrailer]= useState(movies[0]);

const navigate=useNavigate();

useEffect(()=>{
  fetch(`${API}/movies`)
  .then((data)=>data.json())
  .then((movies)=>setMovi(movies));
},[]);

    return(
        
        <Card className='movie'>
             <div className='movp'>
             {/* <div  className='title'>Movie App</div> */}
             </div>
            
            {/* <a href="">🔍Search</a> */}
            {/* </div> */}

            <div className='movie-container'>
            {movi.map((mov)=>
            <div className='mm'key={mov.id} id={mov.id}>
            <div>
            <img onClick={()=>{setButtonPopup(true); setDes(mov.des1); setPic(mov.pic);setName(mov.name);}} className="movie-poster" src={mov.pic} alt={mov.name}/>
           <CardContent>
            <div className='movie-title'>{mov.name}</div>
             {/* <p className='des'>{mov.des}</p> */}
             <Button onClick={()=>navigate("/movies/"+mov.id)}variant="outlined">Watch Trailer</Button>
             </CardContent>
            </div>

            {/* <button onClick={()=>{setButtonPopup(true); setDes(mov.des)}}>click here </button> */}
            <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} >
            {/* {console.log(movies[i],"--------",i)} */}
            <div> <p className='pop-name'>{name}</p>
            

            <div className='popp'>
            <img onClick={()=>{setButtonPopup(true); }} className="movie-pop" src={pic}  alt={mov.name}/>
            <p className='pop-des' >{des}</p>
            {/* <button onClick={()=>{setButtonPopup(true);setTrailer(mov.trailer)}} className='trailer' src={trailer}>Trailer</button> */}
             </div>
            </div>
        
            </Popup>

            </div>
            
        // )
        )
        }
            </div>   
           
        </Card>

    )


   

    }


   export function Home(){
        return(
            <div className='inf'>  
                <div className='head'>               
                <h1>WELCOME TO MOVIE APP 🥳🎉</h1>
                 </div>
                 <div className='img'>
                 <img src='https://media1.tenor.com/m/cek_PQILGAgAAAAC/new-team.gif'></img>

                 </div>
            </div>

    
        
        )
    }

    
      
    export function About(){
        const navigate=useNavigate();

        return(
        
            <div className='about'>
            <p>This Movie App aims to develop an online movie (trailer) streaming platform. It will provide users with a convenient and
 reliable way to watch movie trailers, about movie(description).The goal of this project is to provide a platform that will enable users to access and view video content from any
place or device and develop a user-friendly interface with genre options for films. Users should be able to watch trailers and read descriptions with further information on the platform. This project is to provide
an easy and accessible way for users to find and watch movies from a variety of different sources. It aims to
create a user-friendly interface.</p>

<p>The project allows users access to a variety of movie trailers and movie description. It is an alternative to traditional
cable and satellite television, allowing users to watch movie trailers and other videos on their computers,
smartphones, tablets, smart TVs, and other Internet-enabled devices. It allows users to choose from a list of
movies.It is a Demo project of movie streaming apps like Hotstar, Netflix, Amazon prime using Js, ReactJs, Html and Css.</p>
            {/* <Button onClick={()=>navigate("/")}  variant="contained">Back</Button> */}
            </div>
            
        )
    }


    export  function Trailer({movies}){

        const[movi,setMovi]=useState({});

        const{id} = useParams();
        console.log(id)

        // const movie = movi[id];
        // const newMovie=[]

        useEffect(()=>{
            fetch(`${API}/movies/${id}`)
            .then((data)=>data.json())
            .then((mv)=>setMovi(mv)).then(()=>console.log(movi[0]));
          },[id]);

          const navigate=useNavigate();


        return(
            <div className='trail'>
                <div className='trailname'>
                <h1 > {movi.name}</h1>
                </div>
                <div  className='trailer'>
            <iframe width="900" height="430"
             src={movi.trailer} 
             title="you tube "
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <Button   variant="text"></Button>
              <Button onClick={()=>navigate(-1)}  variant="contained">Back</Button>
              {/* <Button onClick={()=>{}}>Add Movie</Button> */}


            

            </div>
        )
    }
    
    

    // export function AddMovie(){
    //     const navigate=useNavigate();

    //     return(
    //         <div>
    //         <h1>My Watch List</h1>
             
    //         <Button onClick={()=>navigate("/movies")}  variant="contained">Back</Button>
    //         </div>
    //     )
    // }