interface DialogueProps {
    msg: string
}

export const Dialogue = (props: DialogueProps) => {
    // Add function to "type" dialogue instead of showing it all at once
    return (    
        <div id="dialogue">
            {props.msg.length && 
            <h2>{props.msg}</h2>
            }
        </div>
    )
}