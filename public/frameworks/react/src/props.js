let propDemo = ['new thing','another thing','i am running out of things','im going to start numbering'];
let ind = 0;

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state = ['my-prop-value']
        this.add = this.add.bind(this);
    }

    add(){
        this.setState([...this.state, propDemo[ind++]||ind])
    }

    render(){
        return <div className='page-container'>
            <p>props are fairly easy to understand. Simply to add a prop simply add it like an attribute.</p>
            <div className='code'>﹤Mycomponent MyProp=❴'my-prop-value'❵﹥</div>
            <p>This prop can be simple things like strings, and numbers, or more advanced things like and functions</p>
            <p>Here is a the code for a component that takes a prop that is used to fill the h1 tag. when you click add it will make a new component</p>
            <div className='code'>
                {`class DemoComp extends Component{
                    constructor(props){
                        super(props)
                    }
                    return(){
                        return <div>
                            <h1>{this.props.MyProp}</h1>
                        </div>
                    }
                }`}</div>
            
            <button>Add new component</button>

        </div>
    }
}

class DemoComp extends React.Component{
    constructor(props){
        super(props)
    }
    return(){
        return <div>
            <h1>{this.props.MyProp}</h1>
        </div>
    }
}

export default MainPage