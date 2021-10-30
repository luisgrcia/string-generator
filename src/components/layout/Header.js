import {ViewGridIcon} from "@heroicons/react/solid";
import React from "react";

export function Header() {

    function toggle(id) {
        if (document.getElementById(id).classList.contains('hidden')) {
            document.getElementById(id).classList.remove('hidden');
        } else {
            document.getElementById(id).classList.add('hidden');
        }
    }

    return (
        <header className={"fixed top-0 flex justify-between w-full h-14 text-white"}>
            <div className={"flex gap-2 items-center"}>
                <ViewGridIcon class={"h-14"}></ViewGridIcon>
                <a className={"text-3xl"}>String Generator</a>
            </div>
            <div className={"flex gap-4 text-2xl px-4"}>
                <a className={"cursor-pointer"} onClick={() => toggle('howtousesidemenu')}>How to use</a>
                {/*<a className={"cursor-pointer"} onClick={() => toggle('communitysidemenu')}>Community templates</a>*/}
            </div>
        </header>
    );
}
