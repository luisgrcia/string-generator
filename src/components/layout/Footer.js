import {AiFillGithub} from "react-icons/all";
import React from "react";

export function Footer() {
    return (
        <footer className={"fixed bottom-0 flex justify-end w-full h-auto text-white z-0"}>
            <AiFillGithub size={40}></AiFillGithub>
        </footer>
    );
}
