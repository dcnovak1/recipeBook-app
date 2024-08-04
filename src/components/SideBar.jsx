import React from 'react'

const SideBar = () => {
  return (
    <div className="SideBar">
        <a id="HomeButton" href='/' className="SideBar-Button">Home</a>
        <a id="BrowseButton" href='/BrowseRecipes' className="SideBar-Button">Browse</a>
        <div id="Popular" className="SideBar-Button">Popular</div>
        <div id="Categories" className="SideBar-Button">Categories</div>
        <div id="Search" className="SideBar-Button">Search</div>
        <div id="Help" className="SideBar-Button">Help</div>
        <a href='/CreateRecipe' id="CreateButton" className="SideBar-Button">Create</a>
    </div>
  )
}

export default SideBar