class Components extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div id='components'>
            <h3 className='title'>Components</h3>
            <p>Components are the easiest to understand</p>
            <p>Components are classes or functions that return a react element </p>
            <p>the syntax looks like html, using "﹤/﹥"</p>
            <p>You can simply write html and then return it to create a component example:</p>
            <div className='code'>
            function Welcome(props) ❴
                return ﹤h1﹥Hello, ❴props.name❵﹤/h1﹥;
            ❵
            </div>

        </div>
    }
}

export default Components