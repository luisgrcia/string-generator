import HowToUseCard from "./HowToUseCard";
import {AiFillCloseCircle} from "react-icons/all";

export default function HowToUseSideMenu() {

    function toggle(id) {
        if (document.getElementById(id).classList.contains('hidden')) {
            document.getElementById(id).classList.remove('hidden');
        } else {
            document.getElementById(id).classList.add('hidden');
        }
    }

    return (
        <div id={"howtousesidemenu"} className={"fixed h-full w-1/5 right-0 top p-5 pr-0 z-10 hidden"} style={{"background-color": "#1C232D"}}>
            <div className={"grid grid-cols-5 gap-10"}>
                <h2 className={"text-3xl col-span-4"}>How to use</h2>
                <a className={"col-span-1 cursor-pointer"} onClick={() => toggle('howtousesidemenu')}><AiFillCloseCircle color={"#ffffff"}></AiFillCloseCircle></a>
            </div>
            <div className={"h-full flex flex-col gap-4 my-4 overflow-auto pb-10"}>
                <HowToUseCard title={"What is String Generator?"}>
                    <p>String Generator generates strings you need. You can specify how they should be generated. I.e. you can choose if chars should generated randomly, how long they have to and in which pattern they should be.</p>
                </HowToUseCard>
                <HowToUseCard title={"Which patterns exist?"}>
                    <p>String Generator has generator and generator arguments. An generator says what should be randomly generated. An generator argument says how the generator should generate i.e. how long a specific character group should be. Each generator may have an argument. Generator argumens don’t stand alone.</p>
                    <table className={"table-auto text-left"}>
                        <tr>
                            <th>Generator</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>\d</td>
                            <td>Random digit</td>
                        </tr>
                        <tr>
                            <td>\l</td>
                            <td>Random lowercase alphabetic letter</td>
                        </tr>
                        <tr>
                            <td>\u</td>
                            <td>Random uppercase alphabetic letter</td>
                        </tr>
                        <tr>
                            <td>\a</td>
                            <td>Random alphabetic letter</td>
                        </tr>
                        <tr>
                            <td>\.</td>
                            <td>Random alphanumeric letter</td>
                        </tr>
                    </table>
                    <table className={"table-auto text-left"}>
                        <tr>
                            <th>Argument</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>{"{n}"}</td>
                            <td>Generates exactly n times</td>
                        </tr>
                        <tr>
                            <td>{"{m,n}"}</td>
                            <td>Generates between m and n times (randomly)</td>
                        </tr>
                    </table>
                </HowToUseCard>
                <HowToUseCard title={"How can I add an template?"}>
                    <p>If you want to add an template into the community template section, you have to follow these steps on Github and create a pull request.</p>
                </HowToUseCard>
            </div>
        </div>
    );
}
