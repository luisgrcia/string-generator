import CommunityCard from "./CommunityCard";
import {AiFillCloseCircle} from "react-icons/all";

export default function CommunitySideMenu() {

    function toggle(id) {
        if (document.getElementById(id).classList.contains('hidden')) {
            document.getElementById(id).classList.remove('hidden');
        } else {
            document.getElementById(id).classList.add('hidden');
        }
    }

    return (
        <div id={"communitysidemenu"} className={"fixed h-full w-1/5 right-0 top p-5 pr-0 z-10 hidden"} style={{"background-color": "#1C232D"}}>
            <div className={"grid grid-cols-5 gap-10"}>
                <h2 className={"text-3xl col-span-4"}>Community templates</h2>
                <a className={"col-span-1 cursor-pointer"} onClick={() => toggle('communitysidemenu')}><AiFillCloseCircle color={"#ffffff"}></AiFillCloseCircle></a>
            </div>
            <div className={"h-full flex flex-col gap-4 my-4 overflow-auto pb-10"}>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
                <CommunityCard title={"Test"} example={"Test"}/>
            </div>
        </div>
    );
}
