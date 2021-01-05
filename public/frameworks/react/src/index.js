'use strict';
import Components from './components.js'
import MainPage from './mainPage.js'
import State from './state.js'
import Props from './props.js'

let pages = ['main','components','state','props']
let pageIndex = 0;



class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {page:pages[pageIndex]}
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    next(){
        if(!pages[1+pageIndex]) return
        this.setState({page:pages[++pageIndex]});
    }

    prev(){
        if(!pageIndex) return;
        this.setState({page:pages[--pageIndex]});
    }
    
    setPage(page){
        if(page == 'main')
            return <MainPage goTo={this.goTo}/>
        if(page == 'components')
            return <Components/>
        if(page == 'state')
            return <State/>
        if(page == 'props')
            return <Props/>
    }

    goTo(name){
        pageIndex = pages.findIndex(x=>x==name) || 0;
        this.setState({page:pages[pageIndex]});
    }

    prevButton(){
        let greyOut = pageIndex == 0 ? 'grey-out' : '';
        return <div className={'prev button '+greyOut} onClick={this.prev}>Previous page</div>
    }

    nextButton(){
        let greyOut = pageIndex == pages.length-1 ? 'grey-out' : ''
        return <div className={'next button '+greyOut} onClick={this.next}>Next page</div>
    }

    render(){
        return <div>
            <div className='nav'>
                {this.prevButton()} 
                {this.nextButton()}
            </div>
            {this.setPage(this.state.page)}
        </div>
    }
}

ReactDOM.render(<Index/>,document.getElementById('react-comp'));
