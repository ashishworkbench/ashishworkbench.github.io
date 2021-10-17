class MyHeader extends HTMLElement {
    connectedCallback {
        this.innerHTML = ' <div class="header">
        <div class="innerheader">

            <div class="logocontainer">
                <a href="reference.html" class="logoahref">
                    <h1>ashish<span>Workbench</span></h1>
                </a>
            </div>
            <ul class="navigation">

                <li><a href="index.html" class="active">home</a></li>
                <li><a href="reference.html" class="active">about me</menu></a></li>
                <li><a href="#" class="active">portfolio</a></li>
                <li><a href="#" class="active">projects</a></li>
                <li><a href="#" class="active">blog</a></li>
            </ul>
        </div>
     </div>' 
            
    }
}

customElements.define('my-header', MyHeader)