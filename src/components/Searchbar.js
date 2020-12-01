import React, { Component } from 'react'

export default class Searchbar extends Component {
    handleSubmit = e => e.preventDefault();

    
    render() {
        return (
            <div>
                <form  className="search" action="submit" onSubmit={this.handleSubmit}>
                <input
                id="searchName"
                 className="search-input"
                  type="text"
                  value={this.props.searchName}
                   onChange={this.props.handleSearchChange}
                    placeholder="Search By Name"
                     />

                     <input id="searchTag" className="search-bytag-input" type="text" placeholder="Search By Tag" value={this.props.searchTag} onChange={this.props.handleSearchChange} />


                </form>
            </div>
        )
    }
}
