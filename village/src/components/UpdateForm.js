import React from 'react'

class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item:this.props.activeItem
        }
    }

    handleInputChange = (event) =>{
        event.persist();
        this.setState(prevState => ({
            item:{...prevState.item,
            [event.target.name]:event.target.value
        }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.updateItem(this.state.item)
        
    }

    render() {
        console.log(this.state.item)
        return (
            <div className="SmurfForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.item.name}
                        name="name"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.item.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.item.height}
                        name="height"
                    />
                    <button type="submit">Update Smurf</button>
                </form>
            </div>
        )
    }
}
export default UpdateForm