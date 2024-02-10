import React from "react";

const API_KEY = ""


class Recipe extends React.Component {
    state = {
        activeRecipe : []
    }
    componentDidMount = () => {
        const title = this.props.location.state.recipe;
       
        const req = await fetch(``)
    
         const res = await req.json()

         this.setState({ activeRecipe: res.recipes[0] })
         
    }
    render() {
        return(
            <div className="container">
                <div className="active-recipe">
                    <img src="" alt=""/>
                </div>

            </div>
        )
    }
}

export default Recipe;