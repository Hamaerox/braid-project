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

    
    //  componentDidMount(){
    //      axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KCHO?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //         this.setState({
    //             kcho: res.data
    //         })    
    //         console.log(res.data['Wind-Speed'])
    //      })

    //      axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KVBW?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //         this.setState({
    //             kvbw: res.data
    //         }) 
    //      })

    //      axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KSHD?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //         this.setState({
    //             kshd: res.data
    //         })  
    //      })

    //      axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KGVE?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //         this.setState({
    //             kgve: res.data
    //         }) 
    //      })
    //         // BROEKN, NO DATA. CORS ERROR. FORWARDER DIDN'T WORK. GIVING UP ON FOR NOW FOR SAKE OF TIME
    //     //  axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KW13?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //     //     this.setState({
    //     //         kw13: res.data
    //     //     })    
    //     //  })

    //      axios.get(`/forwarder?url=https://wx.wearebraid.com/stations/KIAD?api_key=${process.env.REACT_APP_BRAID_KEY}`).then(res => {
    //         this.setState({
    //             kiad: res.data
    //         })  
    //      })
    //     }

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
        console.log(this.state.kcho)
        return(
            <div>
                <h1>Current Flying Conditions</h1>
                <div className='stationContainer'>
                    <div className='charlottesville'>
                        <h2>City: Charlottesville</h2>
                        <h2>Wind Speed: {this.state.kcho['Wind-Speed']}</h2>
                        <h2>Wind Direction: {this.state.kcho['Wind-Direction']}</h2>
                        <h2>Temperature: {this.state.kcho.Temperature}</h2>
                        {this.state.kcho.Visibility > 5 ?
                            <h2>Visibility is great</h2>
                        :
                            <h2>Visibility: {this.state.kiad.Visibility}</h2>
                        }
                    </div>
                        <div className='bridgewater'>
                            <h2>City: Bridgewater</h2>
                            <h2>Wind Speed: {this.state.kvbw['Wind-Speed']}</h2>
                            <h2>Wind Direction: {this.state.kvbw['Wind-Direction']}</h2>
                            <h2>Temperature: {this.state.kvbw.Temperature}</h2>
                            {this.state.kvbw.Visibility > 5 ?
                                <h2>Visibility is great</h2>
                            :
                                <h2>Visibility: {this.state.kiad.Visibility}</h2>
                            }
                        </div>
                            <div className='weyersCave'>
                                <h2>City: WeyersCave</h2>
                                <h2>Wind Speed: {this.state.kshd['Wind-Speed']}</h2>
                                <h2>Wind Direction: {this.state.kshd['Wind-Direction']}</h2>
                                <h2>Temperature: {this.state.kshd.Temperature}</h2>
                                {this.state.kshd.Visibility > 5 ?
                                    <h2>Visibility is great</h2>
                                :
                                    <h2>Visibility: {this.state.kiad.Visibility}</h2>
                                }
                        </div>
                            <div className='gordonsville'>
                                <h2>City: Gordonsville</h2>
                                <h2>Wind Speed: {this.state.kgve['Wind-Speed']}</h2>
                                <h2>Wind Direction: {this.state.kgve['Wind-Direction']}</h2>
                                <h2>Temperature: {this.state.kgve.Temperature}</h2>
                                {this.state.kgve.Visibility > 5 ?
                                    <h2>Visibility is great</h2>
                                :
                                    <h2>Visibility: {this.state.kiad.Visibility}</h2>
                                }
                            </div>
                        <div className='waynesboro'>
                            <h2>City: Waynesboro</h2>
                            <h2>SYSTEM CURRENTLY DOWN</h2>
                        </div>
                    <div className='washington'>
                        <h2>City: Washington</h2>
                        <h2>Wind Speed: {this.state.kiad['Wind-Speed']}</h2>
                        <h2>Wind Direction: {this.state.kiad['Wind-Direction']}</h2>
                        <h2>Temperature: {this.state.kiad.Temperature}</h2>
                        {this.state.kiad.Visibility > 5 ?
                        <h2>Visibility is great</h2>
                        :
                        <h2>Visibility: {this.state.kiad.Visibility}</h2>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home