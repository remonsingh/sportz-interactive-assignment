import React, {useState, useEffect} from "react";
import styling from './RootDesign'
import { FaSearchPlus } from "react-icons/fa";
import { TextField } from '@material-ui/core';
import './DisplayPlayers.css';
import AdoInput from '@material-ui/core/InputAdornment';
import Gridder from '@material-ui/core/Grid';
import FormatType from '@material-ui/core/Typography';


   function DisplayPlayers() {
    const attri = styling();
    const [descPlayer, setDescPlayer] = useState([])

    useEffect(() => {
      playersListFetch()
    }, [])

    let arr = []

const playersListFetch = async () => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then(res => res.json())
        .then( (output) => { output.playerList.forEach(data => {
           let playersImg = "";
          try {  
             playersImg = require("../Imgs/ImgPlayers/"+ data.Id +".jpg").default; 
               } catch(err){  playersImg = require("../Imgs/imgNotFound/imgnotfnd.png").default;
        } 
          data.playersImg = playersImg
        arr.push(data)
        setDescPlayer([...arr])
      });
          setDescPlayer(arr.reverse())
      },
      (err) => {
       console.log("Error:", err);
    }
  )
    }

         const whenAltered = (event) => { const objs = arr.filter((content) => {
          if(event.target.value === "")
              return content
          else if(content.PFName.toLowerCase().includes(event.target.value.toLowerCase()) || content.TName.toLowerCase().includes(event.target.value.toLowerCase())){
              return content
          }
        })
            setDescPlayer(objs)
  }

  return ( 
               <div className={attri.root}>
             <header className="App-header">
                <p>Players List</p>
            </header>

            <div className={attri.searchWrap}>
                <TextField label="Look for players/Team" name="players" margin="dense" variant="outlined" style={{width:'70%', marginLeft:'15%'}} onChange={whenAltered} underlinecolor="#49b2cc"
                    InputProps={{ startAdornment: (<AdoInput position="start"> <FaSearchPlus/> </AdoInput>
                        ),
                        }}
                />
            </div>




            <Gridder container spacing={2} alignItems="flex-end" style={{backgroundColor:"lightgray" }}>
            {descPlayer.map((player, i) => (
                <Gridder item key={i} xs={12} md={6} >
                    <Gridder item>
                        <div className="App-grid">
                            <div style={{width:"30%"}}>
                            {/* --------Player Image------------------- */}
                                <div className={attri.image}>
                                    <img className={attri.img} alt="player" src={player.playersImg} /> 
                                </div>
                            </div>
                            <div style={{width:"70%"}}>
                                <Gridder item xs={12} sm container>

                                    {/* ----------Player Details----------- */}
                                    <Gridder item xs container direction="column" spacing={2}>
                                        <Gridder item xs>
                                        {/* ----------Player Name------- */}
                                            <FormatType gutterBottom variant="subtitle1">
                                               <b> {player.PFName} </b>
                                            </FormatType>
                                            <FormatType variant="body2" gutterBottom>
                                                {player.SkillDesc}
                                            </FormatType>
                                            {/* ----------Upcoming Match--------- */}
                                            <FormatType variant="body2" color="textSecondary">
                                                Upcoming Match : {player.UpComingMatchesList[0].CCode !== "" ? player.UpComingMatchesList[0].CCode + " vs. " + player.UpComingMatchesList[0].VsCCode : "-"}
                                            </FormatType>
                                            {/* -------Match Timming-------- */}
                                            <FormatType variant="body2" color="textSecondary">
                                                Match Time : {player.UpComingMatchesList[0].MDate !== "" ? new Date(player.UpComingMatchesList[0].MDate+" GMT").toLocaleString() : "-"}
                                            </FormatType>
                                            
                                        </Gridder>
                                    </Gridder>

                                    {/* --------------Player Value---------- */}
                                    <Gridder item>
                                        <FormatType className="playerValue" variant="subtitle1">${player.Value}</FormatType>
                                    </Gridder>
                                </Gridder>
                            </div>
                        </div>
                    </Gridder>
                    
                </Gridder> 
            ))}
        </Gridder>
    </div>
  );
  }

  export default DisplayPlayers;