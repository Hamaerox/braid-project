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

    async componentDidMount(){
        const kcho = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KCHO?api_key=${process.env.REACT_APP_APIKEY}`)
        const kvbw = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KVBW?api_key=${process.env.REACT_APP_APIKEY}`)
        const kshd = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KSHD?api_key=${process.env.REACT_APP_APIKEY}`)
        const kgve = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KGVE?api_key=${process.env.REACT_APP_APIKEY}`)
        const kw13 = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KW13?api_key=${process.env.REACT_APP_APIKEY}`)
        const kiad = await axios.get(`/unblocker?url=https://wx.wearebraid.com/stations/KIAD?api_key=${process.env.REACT_APP_APIKEY}`)
        const newObj = {
            kcho : kcho.data,
            kvbw: kvbw.data,
            kshd: kshd.data,
            kgve: kgve.data,
            kw13: kw13.data,
            kiad: kiad.data
        }
        this.setState(newObj)
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