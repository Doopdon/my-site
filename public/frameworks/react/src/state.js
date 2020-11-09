class State extends React.Component{
    constructor(props) {
        super(props);
        this.thing = 'asdf'
        this.state = {name:'Gannon',date:'1991',list:['red','turnip','snow','quantum entanglement']}
        const defaultVal = JSON.stringify(this.state);
        this.update = this.update.bind(this);
        this.textArea = <textarea defaultValue={defaultVal} onChange={this.update}></textarea>
    }

    update(evt){
        let state = {};
        try{
            var temp = JSON.parse(evt.target.value);
            if(temp && typeof temp === "object")
            state = temp;
        }catch(e){
            state = this.state
        }
        this.setState(state);
    }

    render(){
        return <div>
            <h1>State</h1>
            <h2>State allows you to tie data objects to the view. This stops the need for multiple updates to multiple elements when you change an object</h2>
            <p>State is simply an object that react uses to build components, when the object changes the components are re-rendered</p>
            <p>Here I have a json object that defines a name, a date and a list, feel free to change it, when you hit "update" the state will be set to the new object</p>
            {this.textArea}
            <h2>Name:{this.state.name}</h2>
            <h2>Date:{this.state.date}</h2>
            <ul>
                {this.state.list.map((item,i)=>{
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    }
}