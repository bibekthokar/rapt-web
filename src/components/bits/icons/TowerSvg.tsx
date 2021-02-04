import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));
const TowerSvg = (props: Props) => {
    const classes = useStyles();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <path d="M0 0H26V26H0z" transform="translate(-294 -11) translate(272) translate(22 11)" />
                            <g fill="#FFF" fill-rule="nonzero" stroke="#FFF" stroke-width=".3">
                                <path d="M9.967 13.323c.18.023.312.186.306.377.18 3.304.369 6.609.567 9.914.013.217-.215.386-.508.386h0H8.83c-.292 0-.507-.17-.507-.386l.216-3.89.031-.565c.152-2.727.297-5.327.297-5.46 0-.21.128-.351.306-.376h0zm-2.27-2.203l.002.145c.025.434.233.838.57 1.098-.94.75-1.945 1.404-3.004 1.954h0l-.4.214C3.388 15.294 1.8 15.793.162 16.01c-.06.01-.121-.021-.151-.078h0L0 15.885c-.004-.046.011-.092.043-.126.524-.628 1.118-1.187 1.768-1.665.818-.612 1.68-1.154 2.58-1.622.895-.474 1.825-.871 2.78-1.189.18-.063.354-.135.526-.163h0zm3.605 0c.172.028.345.1.525.163.956.318 1.886.715 2.781 1.19.9.467 1.762 1.009 2.58 1.62.65.479 1.244 1.038 1.768 1.666.032.034.047.08.043.126l-.01.046c-.03.057-.09.088-.15.078-1.638-.216-3.227-.715-4.704-1.478l-.4-.214c-1.059-.55-2.065-1.204-3.005-1.954.338-.26.546-.664.57-1.098l.002-.145zm-1.83-1.086l.113.005c.565.06.98.59.93 1.187-.05.596-.548 1.033-1.113.976h0l-.116-.018c-.228-.051-.434-.182-.585-.374-.175-.224-.26-.512-.234-.8.053-.596.553-1.03 1.118-.97zM9.85 0l.044.011c.042.018.074.056.087.103.532 1.826.747 3.736.633 5.635h0l-.022.537c-.059 1.073-.201 2.138-.427 3.184-.19-.12-.404-.189-.624-.201h0-.131c-.175.009-.346.054-.504.134h0l-.101-.585c-.113-1.056-.15-2.119-.112-3.179.034-1.061.145-2.118.332-3.16.142-.82.373-1.619.689-2.38.02-.061.075-.1.136-.099h0z" transform="translate(-294 -11) translate(272) translate(22 11) translate(3.5 1)" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
};

export default TowerSvg;