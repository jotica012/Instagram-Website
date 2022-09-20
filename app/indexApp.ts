import HomeBar from "./components/HomeBar/HomeBar.js";
import "./components/indexComponents.js";
import MyProfile, { Attribute } from "./components/Profile/Profile.js";
import StoriesIG, {AttributeStories} from "./components/StoriesIG/StoriesIG.js";
import Suggestions, {AttributeSuggestions} from "./components/Suggestions/suggestions.js";
import data from "./data.js";

class AppContainer extends HTMLElement{
    homebar: HomeBar [] = [];
    profiles: MyProfile [] = [];
    stories: StoriesIG [] = [];
    suggestions: Suggestions [] = [];

    constructor(){
        super ();
        this.attachShadow({mode: "open"});

        const topbar = this.ownerDocument.createElement ("my-homebar") as HomeBar;
        this.homebar.push(topbar);

        data.forEach((profile) => {
            const profileCard = this.ownerDocument.createElement("my-profile") as MyProfile;
            profileCard.setAttribute(Attribute.user, profile.user ); 
            profileCard.setAttribute(Attribute.username, profile.username); 
            profileCard.setAttribute(Attribute.location, profile.location); 
            profileCard.setAttribute(Attribute.caption, profile.caption); 
            //profileCard.setAttribute(Attribute.likes, profile.likes); 
            //profileCard.setAttribute(Attribute.comments, profile.comments); 
            //profileCard.setAttribute(Attribute.days, profile.days);
            profileCard.setAttribute(Attribute.bg, profile.bg); 
    
            profileCard.addEventListener("click", () => console.log(profile));
            this.profiles.push(profileCard);

        });
        data.forEach((story) => {
            const stories = this.ownerDocument.createElement("stories-ig") as StoriesIG;
            stories.setAttribute(AttributeStories.username, story.username); 
            stories.setAttribute(AttributeStories.pic, story.pic); 
    
            stories.addEventListener("click", () => console.log(story));
            this.stories.push(stories);
        });
        data.forEach((suggestions) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions") as Suggestions;
            suggestionsCard.setAttribute(AttributeSuggestions.username, suggestions.username); 
            suggestionsCard.setAttribute(AttributeSuggestions.pic, suggestions.pic); 
            suggestionsCard.setAttribute(AttributeSuggestions.peopleFollowed, suggestions.peopleFollowed); 
    
            suggestionsCard.addEventListener("click", () => console.log(suggestions));
            this.suggestions.push(suggestionsCard);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile)=> {
                this.shadowRoot?.appendChild(profile);
            });
            this.stories.forEach((stories)=> {
                this.shadowRoot?.appendChild(stories);
            });
            this.suggestions.forEach((suggestions)=> {
                this.shadowRoot?.appendChild(suggestions);
            });
        }
    }
   
}

customElements.define("app-container", AppContainer);
