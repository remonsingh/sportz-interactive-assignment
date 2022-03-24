import React, { useState, useEffect } from "react";
import styling from "./RootDesign";
//import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import { FaSearch } from "react-icons/fa";
import { TextField } from "@material-ui/core";
import "./DisplayPlayers.css";
import AdoInput from "@material-ui/core/InputAdornment";
import Gridder from "@material-ui/core/Grid";
import FormatType from "@material-ui/core/Typography";
import "./DisplayPlayers.css";
//import ManageSearchIcon from '@mui/icons-material/ManageSearch';

function DisplayPlayers() {
  const attri = styling();
  const [descPlayer, setDescPlayer] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    playersListFetch();
  }, []);

  const playersListFetch = async () => {
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
      .then((res) => res.json())
      .then(
        (output) => {
          setDescPlayer(output.playerList.reverse());
        },
        (err) => {
          console.log("Error:", err);
        }
      );
  };

  const whenAltered = (event) => {
    const query = event.target.value.toLowerCase();

    setSearchResult(
      descPlayer.filter((player) => {
        return (
          player.PFName.toLowerCase().includes(query) ||
          player.TName.toLowerCase().includes(query)
        );
      })
    );
  };

  const players = searchResult.length ? searchResult : descPlayer;

  console.log(players);
  return (
    <div className={attri.root}>
      <header className="playerHeader">
        <p>Sportz Interactive Players</p>
      </header>

      <div className={attri.searchWrap}>
        <TextField
          label="Look for Players and Teams of Sportz Interactive"
          name="players"
          margin="normal"
          variant="standard"
          style={{ width: "50%", marginLeft: "10%" }}
          onChange={whenAltered}
          underlinecolor="#49b2cc"
          InputProps={{
            startAdornment: (
              <AdoInput className="search-input" position="end">
                <FaSearch />
              </AdoInput>
            ),
          }}
        />
      </div>

      <Gridder
        container
        spacing={4}
        alignItems="flex-end"
        style={{ backgroundColor: "#6BAF92" }}
      >
        {players.map((member, i) => (
          <Gridder item key={i} xs={12} md={6}>
            <Gridder item>
              <div className="playerGrid">
                <div style={{ width: "50%" }}>
                  {/* --------Player Image------------------- */}
                  <div className={attri.image}>
                    <img
                      className={attri.img}
                      alt="member"
                      src={`/img-players/${member.Id}.jpg`}
                    />
                  </div>
                </div>
                <div style={{ width: "70%" }}>
                  <Gridder item xs={12} sm container>
                    {/* ----------Player Details----------- */}
                    <Gridder item xs container direction="column" spacing={2}>
                      <Gridder item xs>
                        {/* ----------Player Name------- */}
                        <FormatType gutterBottom variant="subtitle1">
                          <b> {member.PFName} </b>
                        </FormatType>
                        <FormatType variant="body2" gutterBottom>
                          {member.SkillDesc}
                        </FormatType>
                        {/* ----------Upcoming Match--------- */}
                        <FormatType variant="body2" color="textSecondary">
                          Upcoming Match :
                          {member.UpComingMatchesList[0].CCode !== ""
                            ? member.UpComingMatchesList[0].CCode +
                              " vs. " +
                              member.UpComingMatchesList[0].VsCCode
                            : "-"}
                        </FormatType>
                        {/* -------Match Timming-------- */}
                        <FormatType variant="body2" color="textSecondary">
                          Match Time :{member.UpComingMatchesList[0].MDate}
                        </FormatType>
                      </Gridder>
                    </Gridder>

                    {/* --------------Player Value---------- */}
                    <Gridder item>
                      <FormatType className="playerValue" variant="subtitle1">
                        ${member.Value}
                      </FormatType>
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
