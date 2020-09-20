import React from 'react'

class Products extends React.Component {
    constructor () {
        super()
        this.state = {
            response : []
        }
    }

    componentDidMount() {
        this.callApi()
        .then((response) => { 
            this.setState({ response: response.body }) 
        } )
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('http://localhost:5000/');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        
        return body;
    };

    render ()  {
        const data = this.state.response
        console.log(data)
        return (
            <div>
                <div>Products Place holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Products