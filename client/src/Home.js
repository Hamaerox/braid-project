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
    //         // BROEKN, NO DATA. CORS ERROR. FORWARDER DIDN'T WORK.
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
            
            <div className='stationContainer'>
                <div className='charlottesville'>
                    <p>City: Charlottesville</p>
                    <p>Wind Speed: {this.state.kcho['Wind-Speed']}</p>
                    <p>Wind Direction: {this.state.kcho['Wind-Direction']}</p>
                    <p>Temperature: {this.state.kcho.Temperature}</p>
                    {this.state.kcho.Visibility > 5 ?
                        <p>Visibility is great</p>
                    :
                        <p>Visibility: {this.state.kiad.Visibility}</p>
                    }
                </div>
                    <div className='bridgewater'>
                        <p>City: Bridgewater</p>
                        <p>Wind Speed: {this.state.kvbw['Wind-Speed']}</p>
                        <p>Wind Direction: {this.state.kvbw['Wind-Direction']}</p>
                        <p>Temperature: {this.state.kvbw.Temperature}</p>
                        {this.state.kvbw.Visibility > 5 ?
                            <p>Visibility is great</p>
                        :
                            <p>Visibility: {this.state.kiad.Visibility}</p>
                        }
                    </div>
                        <div className='weyersCave'>
                            <p>City: WeyersCave</p>
                            <p>Wind Speed: {this.state.kshd['Wind-Speed']}</p>
                            <p>Wind Direction: {this.state.kshd['Wind-Direction']}</p>
                            <p>Temperature: {this.state.kshd.Temperature}</p>
                            {this.state.kshd.Visibility > 5 ?
                                <p>Visibility is great</p>
                            :
                                <p>Visibility: {this.state.kiad.Visibility}</p>
                            }
                       </div>
                        <div className='gordonsville'>
                            <p>City: Gordonsville</p>
                            <p>Wind Speed: {this.state.kgve['Wind-Speed']}</p>
                            <p>Wind Direction: {this.state.kgve['Wind-Direction']}</p>
                            <p>Temperature: {this.state.kgve.Temperature}</p>
                            {this.state.kgve.Visibility > 5 ?
                                <p>Visibility is great</p>
                            :
                                <p>Visibility: {this.state.kiad.Visibility}</p>
                            }
                        </div>
                    <div className='waynesboro'>
                        <p>City: Waynesboro</p>
                        <p>SYSTEM CURRENTLY DOWN</p>
                    </div>
                <div className='washington'>
                    <p>City: Washington</p>
                    <p>Wind Speed: {this.state.kiad['Wind-Speed']}</p>
                    <p>Wind Direction: {this.state.kiad['Wind-Direction']}</p>
                    <p>Temperature: {this.state.kiad.Temperature}</p>
                    {this.state.kiad.Visibility > 5 ?
                    <p>Visibility is great</p>
                    :
                    <p>Visibility: {this.state.kiad.Visibility}</p>
                    }
                </div>
            </div>
        )
    }
}

export default Home