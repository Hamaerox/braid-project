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
            kiad: ''
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
        console.log(this.kcho)
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
                        <p>Waynesboro system is currently down</p>
                    </div>
                <div className='washington'>
                    <p>washington</p>
                </div>
            </div>
        )
    }
}

export default Home