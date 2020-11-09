'use strict';


let pages = ['main','components','state']
let pageIndex = 0;



class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {page:pages[pageIndex]}
        this.click = this.click.bind(this);
    }

    click(){
        this.setState({page:pages[++pageIndex]});
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
            <button onClick={this.click}>Next page</button>
            {this.setPage(this.state.page)}
        </div>
    }
}

ReactDOM.render(<Index/>,document.getElementById('react-comp'));
