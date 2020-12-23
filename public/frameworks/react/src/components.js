class Components extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div id='components' className='page-container'>
            <h3 className='title'>Components</h3>
            <p>Components are the base unit of a react application</p>
            <p>Components are a set of code that creates an element. This creates reusable building blocks that React can make web pages from.</p>
            <p>the syntax looks similar to the html characters "﹤/﹥" </p>
            <p>You can simply write html and then return it to create a component. example:</p>
            <div className='code'>
            function Welcome(props) ❴
                return ﹤h1﹥Hello, ❴props.name❵﹤/h1﹥;
            ❵
            </div>
        </div>
    }
}

export default Components