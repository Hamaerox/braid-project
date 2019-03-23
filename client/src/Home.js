import React, {Component} from 'react'
import axios from 'axios'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            kcho: '',
            kvbw: '',
            kshd: '',
            kgve: '',
            kw13: '',
            kiad: ''
        }
    }

    
     componentDidMount(){
         axios.get(`https://wx.wearebraid.com/stations/KCHO?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
            this.setState({
                
            })    
         console.log(res)
         })

        }


    render(){
        return(
            <div className='stationContainer'>
                <div className='charlottesville'>
                    <p>charlottesville</p>
                </div>
                    <div className='bridgewater'>
                        <p>bridgewater</p>
                    </div>
                        <div className='weyersCave'>
                            <p>weyersCave</p>
                        </div>
                        <div className='gordonsville'>
                            <p>gordonsville</p>
                        </div>
                    <div className='waynesboro'>
                        <p>waynesboro</p>
                    </div>
                <div className='washington'>
                    <p>washington</p>
                </div>
            </div>
        )
    }
}

export default Home