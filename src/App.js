import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

class App extends Component {
    state = {
        data:{},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({
            data:fetchedData
        })
    }
    handleCountryChange = async (country) =>{
        //fetch the data
        const fetchData = await fetchData(country);
        //set the data
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
               <Cards  data={data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart />               
            </div>
        )
    }
}
export default App;