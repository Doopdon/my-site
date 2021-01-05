class State extends React.Component{
    constructor(props) {
        super(props);
        this.thing = 'asdf'
        this.state = {name:'Gannon',date:'1991',list:['red','turnip','snow','quantum entanglement']}
        const defaultVal = JSON.stringify(this.state);
        this.update = this.update.bind(this);
        this.textArea = <textarea className='state-box' defaultValue={defaultVal} onChange={this.update}></textarea>
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
        return <div id='state-demo' className='page-container'>
            <h1>State</h1>
            <p>State allows you to tie data objects to the view. This stops the need for multiple updates to multiple elements when you change an object</p>
            <p>State is simply an object that react uses to build components, when the object changes the components are changed</p>
            <p className='state-p'>Here I have a JSON object that defines a name with a value of <a>{this.state.name}</a>, a date, in this case <a>{this.state.date}</a> and a list with <a>{this.state.list.length}</a> items in it. Feel free to change it, you will see it reflected in the various elements</p>
            {this.textArea}
            <div className='state-display'>
                <h2>Name:{this.state.name}</h2>
                <h2>Date:{this.state.date}</h2>
                <ul>
                    {this.state.list.map((item,i)=>{
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default State