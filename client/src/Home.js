import React, {Component} from 'react'
import axios from 'axios'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            kcho: {},
            kvbw: {},
            kshd: {},
            kgve: {},
            kiad: {}
        }
    }

    async componentDidMount(){
        const kcho = await axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KCHO?api_key=${process.env.REACT_APP_BRAID_KEY}`)
        const kvbw = await axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KVBW?api_key=${process.env.REACT_APP_BRAID_KEY}`)
        const kshd = await axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KSHD?api_key=${process.env.REACT_APP_BRAID_KEY}`)
        const kgve = await axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KGVE?api_key=${process.env.REACT_APP_BRAID_KEY}`)
        const kiad = await axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KIAD?api_key=${process.env.REACT_APP_BRAID_KEY}`)
        const newObj = {
            kcho: kcho.data,
            kvbw: kvbw.data,
            kshd: kshd.data,
            kgve: kgve.data,
            kiad: kiad.data
        }
        this.setState(newObj)
    }


    render(){
        const KCHO = this.state.kcho
        const KVBW = this.state.kvbw
        const KSHD = this.state.kshd
        const KGVE = this.state.kgve
        const KIAD = this.state.kiad
        return(
            <div>
                <h1>Current Flying Conditions</h1>
                <div className='stationContainer'>
                    <div className='charlottesville'>
                        <h2>City: Charlottesville</h2>
                        <h2>Wind Speed: {KCHO['Wind-Speed']}</h2>
                        <h2>Wind Direction: {KCHO['Wind-Direction']}</h2>
                        <h2>Temperature: {KCHO.Temperature}</h2>
                        {KCHO.Visibility > 5 ?
                            <h2>Visibility is great</h2>
                        :
                            <h2>Visibility: {KCHO.Visibility}</h2>
                        }
                    </div>
                        <div className='bridgewater'>
                            <h2>City: Bridgewater</h2>
                            <h2>Wind Speed: {KVBW['Wind-Speed']}</h2>
                            <h2>Wind Direction: {KVBW['Wind-Direction']}</h2>
                            <h2>Temperature: {KVBW.Temperature}</h2>
                            {KVBW.Visibility > 5 ?
                                <h2>Visibility is great</h2>
                            :
                                <h2>Visibility: {KVBW.Visibility}</h2>
                            }
                        </div>
                            <div className='weyersCave'>
                                <h2>City: WeyersCave</h2>
                                <h2>Wind Speed: {KSHD['Wind-Speed']}</h2>
                                <h2>Wind Direction: {KSHD['Wind-Direction']}</h2>
                                <h2>Temperature: {KSHD.Temperature}</h2>
                                {KSHD.Visibility > 5 ?
                                    <h2>Visibility is great</h2>
                                :
                                    <h2>Visibility: {KSHD.Visibility}</h2>
                                }
                        </div>
                            <div className='gordonsville'>
                                <h2>City: Gordonsville</h2>
                                <h2>Wind Speed: {KGVE['Wind-Speed']}</h2>
                                <h2>Wind Direction: {KGVE['Wind-Direction']}</h2>
                                <h2>Temperature: {KGVE.Temperature}</h2>
                                {KGVE.Visibility > 5 ?
                                    <h2>Visibility is great</h2>
                                :
                                    <h2>Visibility: {KGVE.Visibility}</h2>
                                }
                            </div>
                        <div className='waynesboro'>
                            <h2>City: Waynesboro</h2>
                            <h2>SYSTEM CURRENTLY DOWN</h2>
                        </div>
                    <div className='washington'>
                        <h2>City: Washington</h2>
                        <h2>Wind Speed: {KIAD['Wind-Speed']}</h2>
                        <h2>Wind Direction: {KIAD['Wind-Direction']}</h2>
                        <h2>Temperature: {KIAD.Temperature}</h2>
                        {KIAD.Visibility > 5 ?
                        <h2>Visibility is great</h2>
                        :
                        <h2>Visibility: {KIAD.Visibility}</h2>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home