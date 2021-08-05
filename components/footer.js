const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<style>

/* Fonts added Heebo- variable; ProSans - normal, bold, italic*/
@font-face {
    font-family: Heebo;
    src: url(./fonts/Heebo-VariableFont_wght.ttf);}

@font-face {
    font-family: ProSans;
    src: url(./fonts/SourceSansPro-Regular.ttf)
}

:root {
    
    /* Defining the 2021 colors in the root as variables*/

    --pear: #cde43a ;
    --seagreen: #58bc82 ;
    --prussian: #13293d;
    --uranian: #c4e3fd;
    --dodger: #4895ef;
    --cobalt: #1446a0;
}

/* General element styles begin */

body {
    margin: 0px;
    border: 0px;
    padding: 0px;
}


h1, h2, h3, h4, h5, h6 {
    font-family: Heebo;
}

p {
    font-family: ProSans;
    font-size:larger;
}

a:link {color:var(--pear);text-decoration:none;}
a:visited {color:var(--pear);text-decoration:none;}
a:hover {color: var(--dodger) ;text-decoration:underline;}


/* General element styles end */

/* Footer element styling */


.footer-container {
    border-color: white;
    border-style: solid;
    padding: 0.5rem;
    background-color: var(--prussian);
    position: absolute;
    width: 98vw;
    bottom: 0px;
    left: 0px;
}

.footer {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat( auto-fit , minmax(240px, 1fr));
    justify-content: space-evenly;
}

.footer-heading {
    grid-column: span 1;
    background-color: var(--prussian);
    padding: 0.25rem;
    gap: 2px;
}

.footer-heading ul {
    list-style-type: none;
    list-style-position: inside;
    padding: 0.1rem;
    margin-inline-start: 0px;
    text-align: right;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.footer-heading p {
    text-align: center;
    font-size: 20px;
    font-family: Heebo;
    color: var(--pear);
}

.social {
    grid-column: span 2;
    background-color: var(--prussian);
    display: grid;
    grid-template-rows: 1fr 0.5fr 1.5fr;
}

.social p{
    text-align: center;
}

.social-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.social-box p {
    flex-grow: 1;
    font-size: 20px;
    font-family: Heebo;
    color: var(--pear);
}

.social-box ul {
    flex-grow: 4;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    list-style-type: none;
    list-style-position: inside;
    padding: 0.1rem;
    margin-inline-start: 0px;
    text-align: center;
}

.social-photo{
    background-color: var(--prussian);
    background-repeat: no-repeat;
    background-position: center;
}

.team-photo {
    background-image: url(./footer_elements/teamlarge.jpeg);
    background-size: cover;
    margin: 2px;
}

.renervate-photo {
    background-image: url(./footer_elements/longlogo.png);
    background-size: contain;
}


.icon {
    width: 20px;
    height: 20px;
    filter: invert(62%) sepia(26%) saturate(710%) hue-rotate(92deg) brightness(99%) contrast(92%);
    border-style: solid;
    border-color: var(--dodger);
    padding: 0.3rem;
    border-width: 0.1rem;
}

.icon:hover {
    /* This filter method need the conversion from here: https://codepen.io/sosuke/pen/Pjoqqp */
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
    border-style: dashed;
}

.icon2:hover {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

#ltxt:hover  #licn {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

</style>

<footer>
<div class="footer-container">
<div class="footer">
    <div class="footer-heading navlinks">   
            <p>Pages</p>
        <ul>
        <li id = 'ltxt'>    <a href="#" target="_blank">Home                                <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Team Members                        <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Project Description                 <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Project Design                      <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Model                               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Parts                               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Proposed Implementation             <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Human Practices                     <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Inclusivity Research                <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Science Communication               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Biologix Competition                <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Judging Form                        <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        </ul>
    </div>
    <div class="footer-heading sponsors">
            <p>Sponsors</p>
        <ul>
        <li id = 'ltxt'>    <a href="#" target="_blank">King's College London               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Wellcome                            <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Promega                             <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">KCLSU                               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">BBSRC                               <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">SnapGene                            <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">Benchling                           <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">BGM Lab Tech                        <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        <li id = 'ltxt'>    <a href="#" target="_blank">IDT                                 <img id = 'licn' src="./footer_elements/arrow-up-right-circle.svg" class = "icon2"/>    </a>        </li>
        </ul>
    </div>
    <div class="social">
        <a class="social-photo renervate-photo" href="#" target="_top"></a>
        <div class="social-box">
            <p>Contact Us</p>
            <ul>
        <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/instagram.svg">    </a> </li>                           
        <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/twitter.svg">      </a> </li>                             
        <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/facebook.svg">     </a> </li>                            
        <li>        <a href="#" target="_blank"><img class="icon" src="./footer_elements/envelope.svg">     </a> </li>
            </ul>                               
        </div>
        <a class="social-photo team-photo" href="#" target="_top"></a>
        
    </div>
</div>


</div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);