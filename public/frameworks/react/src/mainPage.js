class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div id='main-page'>
           <p class='description'>This is a simple single page application, that shows off features of react that I have an understanding of.</p>
           <div class='link-buttons'>
                <div className='link-button'>
                    Components
                </div>
                <div className='link-button'>
                    State
                </div>
                <div className='link-button'>
                    Optimization
                </div>
           </div>
        </div>
    }
}