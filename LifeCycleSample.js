import { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        count: 0, 
        color: this.props.color
    };
    
    handlerCount = () => {
        console.log('하나 증가 버튼 클릭!!!');
        this.setState({count: this.state.count + 1});
    };

    constructor(props) {
        super(props);
        console.log('constructor is called');
    }

    componentDidMount() {
        console.log('componentDidMount is called');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate is called');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount is called');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps is called');

        if (prevState.color !== nextProps.color) {
            return { color: nextProps.color };
        }
        return null;
    }
    
    render() {
        console.log('render is called');
        
        return (
            <div style={{border: '1px solid green', margin: 10, padding: 10}}>
                <h1>자식 컴포넌트</h1>
                <h2 style={{color: this.state.color}}>{this.state.count}</h2>
                <h2>color: {this.state.color}</h2>
                <button onClick={this.handlerCount}>하나 증가</button>
             
            </div>
        );
    }
}

export default LifeCycleSample;
