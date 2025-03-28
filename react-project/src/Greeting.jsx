export default function Greeting(props) {
    return (
        <div>
            <h1>Greeting component</h1>
            <h3>Hello, {props.fname}</h3>
            <h4>your ID , {props.myid}</h4>
        </div>
    )
}