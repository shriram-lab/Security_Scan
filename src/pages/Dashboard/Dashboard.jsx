import React, { Component } from 'react';
import InputText from '../../components/InputText';
import Header from '../Header';
import Modal from '../../components/Modal'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            openModal:false
        }
    }

    // close Modal

    onCloseModal = event =>{
        this.setState({
            openModal:false
        })
    }
    //  open modal
    onOpenModal = event =>{
        this.setState({
            openModal:true
        })
    }

    render() {
        return (
            <div>
                <Header HeaderText="Security Scan" ButtonText="ADD +" handleOpenModal={this.onOpenModal}></Header>
                <Modal handleCloseModal = {this.onCloseModal} openModal={this.state.openModal}></Modal>
                <InputText></InputText>
            </div>
        )
    }
}
