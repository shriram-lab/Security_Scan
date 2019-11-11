import React, { Component } from 'react';
import InputText from '../../components/InputText';
import Header from '../Header';
import Modal from '../../components/Modal';
import Selects from '../../components/Select';
import Cards from '../../components/Card';
import Container from '@material-ui/core/Container';
import * as yup from 'yup';
// validations schema

const formSchema = yup.object().shape({
    repo_name: yup.string()
        .min(3)
        .required("Repository Name field is required."),
    status: yup.string()
        .required("Status field is required.")
})

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            options: [{
                value: "",
                label: "Select Status"
            }, {
                value: "Queued",
                label: "Queued"
            }, {
                value: "Inprocess",
                label: "Inprocess"
            }],
            repo_name: "",
            status: "",
            errors: "",
        }
    }

    // close Modal

    onCloseModal = event => {
        this.setState({
            openModal: false
        })
    }
    //  open modal
    onOpenModal = event => {
        this.setState({
            openModal: true
        })
    }

    // validations function

    onErrors = (err) => {
        console.log(err);
        this.setState({
            errors: err
        })
    }

    onValiate = ({ repo_name, status }) => {
        formSchema.validate({ repo_name, status }).then(function (res) {
        }).catch(function (err) {
            console.log(err.name);
            console.log(err.errors);
        });
    }



    onChange = event => {
        const field = event.target.name;
        this.setState({
            [field]: event.target.value
        }, () => {
            console.log(this.state)
            this.onValiate(this.state);
        })
    }

    render() {
        return (
            <div>
                <Header HeaderText="Security Scan" ButtonText="ADD +" handleOpenModal={this.onOpenModal}></Header>
                <Container><Cards></Cards><Cards></Cards></Container>
                <Modal handleCloseModal={this.onCloseModal} openModal={this.state.openModal} Heading="Add Security Scan">
                    <InputText error={this.state.errors} Label="Repository Name" Type="text" Name="repo_name" Placeholder="Repository Name" handleChange={this.onChange}></InputText>
                    <Selects error={this.state.errors} Label="Status" Placeholder="Status" Name="status" Options={this.state.options} handleChange={this.onChange} defaultText="Select Status" ></Selects>
                </Modal>
            </div>
        )
    }
}
