import './App.css';
import React from "react";
import {AiOutlineDownload, VscRunAll} from "react-icons/all";
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";
import {Button} from "./components/io/Button";
import {InputControlField} from "./components/io/InputControlField";
import CommunitySideMenu from "./components/layout/side/community/CommunitySideMenu";
import HowToUseSideMenu from "./components/layout/side/howtouse/HowToUseSideMenu";

/*
 *
 * Patterns:
 *
 * char generators:
 * \d - random digit
 * \l - random lowercase alphabetic letter
 * \u - random uppercase alphabetic letter
 *
 * char generator arguments:
 * \(any char generator){any number: n} - char generator generates n chars
 * \(any char generator){any number: m, any number: n} - char generator generates random chars in range of m and n
 *
 */

const SETTINGS = {
    amount: 1,
    coloredSyntax: true
};

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const letters = [...lowercaseLetters,...uppercaseLetters];
const alphanumeric = [...numbers, ...letters];

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const CHAR_GENERATORS = [
    {
        name: "random digit",
        regex: /\\d({[\d,]+})?/g, // \d{n}
        charGenerator: () => {
            return getRandomInt(0, 9);
        }
    },
    {
        name: "random lowercase letter",
        regex: /\\l({[\d,]+})?/g, // \d{n}
        charGenerator: () => {
            return lowercaseLetters[getRandomInt(0, lowercaseLetters.length - 1)];
        }
    },
    {
        name: "random uppercase letter",
        regex: /\\u({[\d,]+})?/g, // \d{n}
        charGenerator: () => {
            return uppercaseLetters[getRandomInt(0, uppercaseLetters.length - 1)];
        }
    },
    {
        name: "random alphabetic letter",
        regex: /\\a({[\d,]+})?/g, // \d{n}
        charGenerator: () => {
            return letters[getRandomInt(0, letters.length - 1)];
        }
    },
    {
        name: "random alphanumberic letter",
        regex: /\\.({[\d,]+})?/g, // \d{n}
        charGenerator: () => {
            return alphanumeric[getRandomInt(0, alphanumeric.length - 1)];
        }
    }
];

const CHAR_GENERATOR_ARGUMENTS = [
    {
        regex: /{\W*(\d+)\W*,\W*(\d+)\W*}/,
        generator: (char, arr) => {
            return generateString(char, arr[0]);
        }
    },
    {
        regex: /{\W*\d+\W*}/,
        generator: (char, arr) => {
            return generateString(char, arr[0].replace(/[\W{}]/g, ''));
        }
    }
]

function generateString(charGenerator, length) {
    let output = "";
    for (let i = 0; i < length; i++) {
        output += charGenerator();
    }
    return output;
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        let display = "";

        for (let i = 0; i < SETTINGS.amount; i++) {
            let tDisplay = value;

            CHAR_GENERATORS.forEach(gen => {
                const genMatch = value.match(gen.regex);
                if (genMatch != null) {
                    genMatch.filter(match => match != null).forEach(match => {
                        let found;
                        for (let i = 0; i < CHAR_GENERATOR_ARGUMENTS.length; i++){
                            const argument = CHAR_GENERATOR_ARGUMENTS[i];
                            const argMatch = match.match(argument.regex);
                            if (argMatch != null) {
                                const generatedStr = argument.generator(gen.charGenerator, argMatch);
                                tDisplay = tDisplay.replace(match, generatedStr);
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            const generatedStr = gen.charGenerator();
                            tDisplay = tDisplay.replace(match, generatedStr);
                        }
                    });
                }
            });
            display += tDisplay + '\n';
        }

        this.setState({
            value: display
        });
    }

    render() {
        return (
            <>
                <Header/>
                <main className={"flex w-auto h-full items-center justify-center align-center text-white py-10 z-0"}>
                    <div className={"flex w-full justify-center align-center"}>
                        <div className={"flex flex-col px-2 w-1/5 gap-2"}>
                            <div className={"flex flex-col"}>
                                <span>Input</span>
                                <input id={"input"} className={"rounded h-10 px-2"} placeholder={"Pattern"} onInput={this.handleChange}/>
                            </div>
                            <div className={"flex flex-col"}>
                                <span>Output options</span>
                                <InputControlField title={"Amount"} type={"number"} defaultValue={SETTINGS.amount} onChange={(value) => {SETTINGS.amount = value}}></InputControlField>
                            </div>
                            <Button clickAction={() => {this.handleChange({target: document.getElementById("input")})}}><VscRunAll color={"#ffffff"}></VscRunAll> Generate</Button>
                        </div>
                        <div className={"flex flex-col px-2 w-1/5 gap-2"}>
                            <div className={"flex flex-col"}>
                                <span>Output</span>
                                <textarea className={"rounded"} defaultValue={this.state.value}></textarea>
                            </div>
                            {/*<Button><AiOutlineDownload></AiOutlineDownload> Download</Button>*/}
                        </div>
                    </div>
                    {/*<CommunitySideMenu />*/}
                    <HowToUseSideMenu />
                    {/*<div className={"fixed top-0 right-0 h-screen w-1/4 p-4"} style={{"background-color": '#1C232D'}}>
                        <div className={"flex justify-between mb-10"}>
                            <h2 className={"text-2xl"}>How to use</h2>
                            <a><AiFillCloseCircle></AiFillCloseCircle></a>
                        </div>
                        <div className={"flex flex-col gap-2"}>
                            <CommunityCard title={"Phone number"} example={"0 111-111 111"}></CommunityCard>
                            <CommunityCard title={"Phone number"} example={"0 111-111 111"}></CommunityCard>
                            <CommunityCard title={"Phone number"} example={"0 111-111 111"}></CommunityCard>
                            <CommunityCard title={"Phone number"} example={"0 111-111 111"}></CommunityCard>
                        </div>
                    </div>*/}
                </main>
                <Footer/>
            </>
            );
    }
}

export default App;
