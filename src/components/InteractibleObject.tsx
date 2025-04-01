


interface objectProps {
    img: string;
}
export const IntObject = (props: objectProps) => {
    return (
    <div id='objectdiv'>
        <img id='objectimg' src={props.img}></img>
    </div>
    )
}