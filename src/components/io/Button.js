export function Button(props) {
    return (
        <button
            className={"flex items-center gap-2 rounded w-min p-2 text-xl hover:opacity-60 duration-500"}
            style={{"background-color": "#1C232D"}}
            onClick={() => {if (props.clickAction != null) props.clickAction()}}
        >
            {props.children}
        </button>
    );
}
