import div, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = product =>{    
       // console.log(product);    
        this.setState({ value: this.state.value +1 })
    };

    handleDelete = product =>{
        this.setState({value: this.state.value -1})
    };

    render() {      
        //console.log("props", this.props);  

        return (
            <div>
                <h4> Counter {this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement({ id : 1})} 
                    className="btn btn-secondary btn-sm">Increment
                </button>
                <button 
                    onClick={() => this.handleDelete({id : 1})} 
                    className="btn btn-danger btn-sm m-2">Delete
                </button>            
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;