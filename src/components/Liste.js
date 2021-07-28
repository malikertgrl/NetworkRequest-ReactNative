import React, { Component } from "react";
import axios from "axios";
import { ScrollView} from "react-native";
import Detay from "./Detay";



class Liste extends Component {
    state = {
        data: []
    }
    UNSAFE_componentWillMount() {
        axios.get("https://reqres.in/api/users")
            .then(response => this.setState({
                data: response.data.data
            
            }))
            // .catch(error => console.log("error"))

    }
    componentDidMount() {


    }

    renderData() {
        return this.state.data.map(responseData =>
            <Detay key = {responseData.id} data = {responseData}/>
        );
    }

    render() {
        console.log("render");
        return (

            <ScrollView>
                {this.renderData()}
            </ScrollView>
        )
    }
}

export default Liste;

