import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import ProgressLevel from './ProgressLevel';
import im from "./im.png"

function ProgressBars(props) {
    const level = {
        marginTop:"22%",
        width:"10%",
        // height:"10%"
    }
    return (
        <div>
            <ProgressBar
                percent={15}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                height={30}
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="70"
                            alt={""}
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                        />
                    )}
                </Step>
                <div style={level}>
                    <ProgressLevel img={im} num={"100,000"} />
                </div>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="70"
                            alt={""}
                            src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                        />
                    )}
                </Step>
                <div style={level}>
                    <ProgressLevel img={im} num={"150,000"}/>
                </div>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="70"
                            alt={""}
                            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                        />
                    )}
                </Step>
                <div style={level}>
                    <ProgressLevel img={im} num={"200,000"}/>
                </div>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="70"
                            alt={""}
                            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                        />
                    )}
                </Step>
                <div style={level}>
                    <ProgressLevel img={im} num={"250,000"}/>
                </div>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="70"
                            alt={""}
                            src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                        />
                    )}
                </Step>
                <div style={level}>
                    <ProgressLevel img={im} num={"300,000"}/>
                </div>
            </ProgressBar>
        </div>
    );
}

export default ProgressBars;