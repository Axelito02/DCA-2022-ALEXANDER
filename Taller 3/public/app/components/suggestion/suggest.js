var Atributes;
(function (Atributes) {
    Atributes["username"] = "username";
    Atributes["name"] = "name";
})(Atributes || (Atributes = {}));
class ContainerSuggest extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.name = "";
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(Atributes);
    }
    attributeChangeCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/style/style.css">
        
        <div class="suggestion">
        <div class="contentSuggestion">
            <div class="titleSuggestion">
                <div>
                    <h6>
                        Suggestions for you
                    </h6>
                </div>
                <div class="titleSuggestion">
                    <h6>
                        View all
                    </h6>   
                </div>

            </div>

            <div class="contentmainSuggestProfile">
                <div class="profileSuggestMin">
                    <div class="contentProfile">
                        <div class="imgProfileMin">
                            <img src="./src/img/profile/a_r_v_132.jpg" id="test">
                        </div>
                        <div class="nameProfileMin">
                            <div class="username">
                                <h5>${this.username}</h5>
                            </div>
                            <div class="name">
                                <h5>${this.name}</h5>
                            </div>
                        </div>
                        <div class="btnProfileMin">
                            <h6>Follow</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        `;
    }
}
customElements.define('suggest-container', ContainerSuggest);
export default ContainerSuggest;
