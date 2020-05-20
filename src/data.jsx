import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import guitar from './guitar.png'
import Button from 'react-bootstrap/Button'
import Data_Viz from './Data_Viz'
import LightboxImage from './Lightbox'
import poster from './Poster.jpg'
import cnn from './cnn.png'





const data = {"Guitar Center" : <Container fluid className = 'single-project-container'><h3>A simple web interface to search and filter for guitars</h3>
<p>As guitarists my friend and I often tried to look up guitars online. We thus built an example search page for Guitar Center. The website allows users to browse guitars for sale and filter the offerings based on type (acoustic/electric) and brand, sort them based on price, and mark items as favorited. The goal of the website is to make the online guitar search/buying process as simple and efficient as possible for customers.</p>

 

<h4>Design</h4>

<p>Our website has a layout typical to many standard ecommerce sites. The jumbotron header at the top displays the website name. Underneath the header, the page is broken down into a 2-column grid. The right column takes up most of the screen and is itself a 3-column grid, displaying all of the guitars for sale in cells with a picture, name, and price, as well as a heart in the top right corner used to favorite an item. Once clicked, the heart outline becomes filled in, denoting that the user marked the item as favorited. The more-narrow left column contains all information and functions relevant to guitar sorting/filtering. The filtering, sorting and favoriting functions are broken down into drop down buttons and a toggle switch, all of which are clearly labeled. The mechanisms used for these actions are not only learnable for first-time users, but also memorable and efficient, as changing/resetting filters requires only another click of the drop down menu.

We used a predominantly white and gray color scheme with dark red accents. The neutral/white background of most of the site allows for the guitar images to really stand out of the page, pointing the user/customer’s attention to what they are looking for.</p>


<h4>React</h4>

<p>We used React to create the live searching feature of the website. Our data (list of guitar information) is stored in the App.js file and is passed as a prop to the FilteredList component. This creates the dropdowns for sorting and filtering, and passes the filtered/sorted data as a prop to the List component. The FavoritesFilter is a separate component that controls the functionality and state for the favorites filtering feature. The List component in turn creates Guitar components for each item, rendering each item cell. The user can select categories (Brand and Acoustic/Electric) to filter for or ways to sort using the dropdown menus which in turn trigger methods that change the state. This change in state thus triggers filtering and sorting mechanisms on the data. Similarly, the Favorites toggle behaves like a filter and causes a change in state only showing items that are favorited. Each Guitar component contains a state for favorite that changes whenever the item is “hearted”. Clicking the “heart” also triggers a function in FilteredList - the function is passed down as a prop to List and then to each Guitar component  - essentially changing the data to indicate the item is favorited.</p>
<Container fluid style={{textAlign: "center"}}> 
<LightboxImage image = {guitar}/>
<br></br><br></br>
<Button href = 'https://github.com/sumupitchayan/uiux-development' className = 'button-project'>Code</Button>
<Button href = 'https://agile-ocean-30189.herokuapp.com/' className = 'button-project'>Site</Button>

</Container>
</Container>,




"Football Dashboard": 
<Data_Viz/>,




"Government Policy Impact on the Coronavirus":
<Container fluid className = 'single-project-container'>

<h3>A study on how Governments changed the path of the Virus</h3>

    <p>My group and I worked on determining government impact on the Coronavirus using Hypothesis Testing and Regression. Our dataset consisted of government impact variables
        such as measures of government effectiveness, the human freedom index, the Oxford Stringency Index, and others. We were trying to see the effect of these variables on total cases
        per 1M people around the world. We used Multiple Regression to find the variables that have an impact on cases and investigated the impact using T-tests. The growth of cases over time 
        was also tracked with respect to these variables. Our results are given in the poster below. 
    </p>
    <Container fluid style={{textAlign: "center"}}> 

    <LightboxImage image = {poster}/>
    </Container>
</Container>,




"Contact":

<Container fluid className = 'single-project-container'>

    <p>Coming soon! </p>
</Container>,




"Crowd Counting":<Container fluid className = 'single-project-container'>

<h3>1,2,3 ... how many peopel? Crowd Counting using Computer Vision and Switch CNN</h3>

<p>There are several places in the world where we encounter crowds. From vigils to concert queues, people gathering has always held social, cultural and political significance. Analyzing data about crowds can give important insights into trends around people collecting together and sociocultural behavior. In this project, we treat counting the number of people in a place as a computer vision problem. Our hypothesis was that through the analysis of images of crowds, we would be able to produce an efficient counting system. In general, it is difficult to generate accurate counting results due to the nature of crowds. Usually, only heads are visible without distinctive facial features making it difficult to distinguish between individual heads. In addition to that, it is challenging to count heads as figures tend to merge with their surrounding environment. The biggest factor that needs to be taken into consideration when dealing with crowds is their density. An important characteristic, density helps us understand how crowded the area is and whether it is more spread out or concentrated. 

In our approach for counting the number of people in an image, we use density as our main parameter. We follow a process similar to the one outlined in a paper titled Switching Convolutional Neural Networks for Crowd Counting. In this process an image patch goes through a deep patch classifier that, based on the density of the crowd, determines which one of three total regressors it should be assigned to. Following that, the image patch is passed through the regressor. The output of the regressor is compared against the ground truth value of a count obtained from the density map of that image. 
</p>

<LightboxImage image = {cnn}/>
<Button href = "https://github.com/rsrivastava98/crowd-counting" className = 'button-project'>Code</Button>


</Container>,



"Computing Cluster User Management":
<Container fluid className = 'single-project-container'>

<h3>A user statistics and clustering tool to manage the CCV User Base</h3>

<p>Wrote scripts to scrub the user database of the computing cluster and create a dashboard like detailed report (PDF) for any user with statistics and visualizations for various SLURM variables (Python – Pandas, Numpy, Matplotlib, PyLatex). Used clustering techniques to classify users as per real world research groups (sklearn).</p>
<Button href = "https://github.com/chriscianfarani/CCV-User-Statistics" className = 'button-project'>Code</Button>
</Container>

}


export default data