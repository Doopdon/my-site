class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    sectionNames = ['components','state','props'];
    render(){
        return <div id='main-page' className='page-container'>
           <p className='description'>This is a simple react single page app demo. It contains demonstrations of:</p>
           <div className='link-buttons'>
               {this.sectionNames.map((name,i)=>{
                   return  (<div key = {i} className='link button' onClick={()=>this.props.goTo(name)}>
                                {name}
                            </div>)
               })}
                {/* <div className='link-button' onClick={()=>this.props.goTo('components')}>
                    Components
                </div>
                <div className='link-button' onClick={()=>this.props.goTo('state')}>
                    State
                </div>
                <div className='link-button' onClick={()=>this.props.goTo('props')}>
                    props
                </div> */}
           </div>
        </div>
    }
}

export default MainPage