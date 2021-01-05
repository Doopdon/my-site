////npx babel --watch src --out-dir scripts --presets react-app/prod
let propDemo = ['','New Component with this prop','Another prop','This prop has a 🚀 symbol ','Now I will just use numbers as a prop.'];
let ind = 0;

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {list:[]}
        this.add = this.add.bind(this);
        this.index = 0;
    }

    add(){
        ind++;
        this.setState({list:[...this.state.list, propDemo[ind]||ind]});
        window.scrollTo(0,document.body.scrollHeight);
    }

    render(){
        return <div className='page-container' id='props'>
            <p>props are fairly easy to understand. To add a prop simply add it like an attribute.</p>
            <div className='code'>{`﹤`}<a className='class'>{'Mycomponent'}</a>{` MyProp={`}<a className='string'>{`'my-prop-value'`}</a>{`}/>`}</div>
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
            
            <div className='button action' onClick={this.add}>Add new component</div>
            {this.state.list.map((item)=>(<DemoComp MyProp={item} key={this.index++}/>))}
        </div>
    }
}

class DemoComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <h1>{this.props.MyProp}</h1>
        </div>
    }
}

export default MainPage