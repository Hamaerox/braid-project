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

    
    // async componentDidMount(){
    //     const kcho = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KCHO?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const kvbw = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KVBW?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const kshd = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KSHD?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const kgve = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KGVE?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const kw13 = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KW13?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const kiad = await axios.get(`/forwader?url=https://wx.wearebraid.com/stations/KIAD?api_key=${process.env.REACT_APP_BRAID_KEY}`)
    //     const newObj = {
    //         kcho : kcho.data,
    //         kvbw: kvbw.data,
    //         kshd: kshd.data,
    //         kgve: kgve.data,
    //         kw13: kw13.data,
    //         kiad: kiad.data
    //     }
    //     console.log(kcho)
    //     this.setState(newObj)
    // }


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