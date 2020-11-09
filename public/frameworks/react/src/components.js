class Components extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <h1>Components are the easiest to understand</h1>
            <h2>Components are classes or functions that return a react element </h2>
            <h2>the syntax looks like html, using "﹤/﹥" (By the way these are unicode characters "﹤/﹥" so I do not get compile errors)</h2>
            <h2>You can simply write html and then return it to create a component example:</h2>
            <p>
            function Welcome(props) ❴
                return ﹤h1﹥Hello, ❴props.name❵﹤/h1﹥;
            ❵
            </p>

        </div>
    }
}