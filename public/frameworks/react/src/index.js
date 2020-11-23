'use strict';
import Components from './components.js'


let pages = ['main','components','state']
let pageIndex = 0;



class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {page:pages[pageIndex]}
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next(){
        this.setState({page:pages[++pageIndex]});
    }

    prev(){
        this.setState({page:pages[--pageIndex]});
    }
    
    setPage(page){
        if(page == 'main')
            return <MainPage/>
        if(page == 'components')
            return <Components/>
        if(page == 'state')
            return <State/>
    }

    render(){
        return <div>
            <button onClick={this.prev}>Previous page</button>
            <button onClick={this.next}>Next page</button>
            {this.setPage(this.state.page)}
        </div>
    }
}

ReactDOM.render(<Index/>,document.getElementById('react-comp'));
