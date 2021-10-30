export function InputControlField(props) {
    return (
        <div className={"flex rounded h-10 pr-4"} style={{"background-color": "#303B4A"}}>
            <p style={{"background-color": "#1C232D"}} className={"rounded w-auto bg-white p-2"}>{props.title}</p>
            <input
                type={props.type}
                className={"w-full px-2 outline-none"}
                defaultValue={props.defaultValue}
                onChange={(e) => {
                    if (props.onChange != null) {
                        props.onChange(e.target.value);
                    }
                }}
            />
        </div>
    );
}
