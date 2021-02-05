import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props { }
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

}));
const pdfIcon = (props: Props) => {
    const classes = useStyles();

    return (
        <svg width="27" height="27" viewBox="0 0 27 27">
            <defs>
                <path id="b2iz51635a" d="M.9 0h9.395c.25 0 .49.104.66.288l5.905 6.367c.154.166.24.385.24.612V24.3c0 .497-.403.9-.9.9H.9c-.497 0-.9-.403-.9-.9V.9C0 .403.403 0 .9 0z" />
            </defs>
            <g fill="none" fill-rule="evenodd">
                <g>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <g transform="translate(-1236 -912) translate(745 794) translate(25 62) translate(0 49) translate(463 3) translate(3 4) translate(4.95 .9)">
                                            <mask id="qsc42nhvhb" fill="#fff">
                                                <use />
                                            </mask>
                                            <path stroke="#1E2447" stroke-opacity=".15" stroke-width=".9" d="M10.295-.45c.375 0 .734.157.99.432h0l5.905 6.367c.231.25.36.577.36.918h0V24.3c0 .373-.151.71-.395.955-.245.244-.582.395-.955.395h0H.9c-.373 0-.71-.151-.955-.395-.244-.245-.395-.582-.395-.955h0V.9c0-.373.151-.71.395-.955C.19-.299.527-.45.9-.45h9.395z" />
                                            <path fill="#FFF" stroke="#1E2447" stroke-opacity=".15" stroke-width=".9" d="M11.25.45h8.1v6.3H13.5c-.621 0-1.184-.252-1.591-.659-.407-.407-.659-.97-.659-1.591h0V.45z" mask="url(#qsc42nhvhb)" />
                                            <text fill="#37B24D" font-family="Lato-Bold, Lato" font-size="5.4" font-weight="bold" mask="url(#qsc42nhvhb)">
                                                <tspan x="3.328" y="22.1">PDF</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>


    )
};

export default pdfIcon;
