import "./components/indexComponents.js";
import { Attribute } from "./components/Profile/Profile.js";
import { AttributeStories } from "./components/StoriesIG/StoriesIG.js";
import { AttributeSuggestions } from "./components/Suggestions/suggestions.js";
import data from "./data.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.homebar = [];
        this.profiles = [];
        this.stories = [];
        this.suggestions = [];
        this.attachShadow({ mode: "open" });
        const topbar = this.ownerDocument.createElement("my-homebar");
        this.homebar.push(topbar);
        data.forEach((profile) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.user, profile.user);
            profileCard.setAttribute(Attribute.username, profile.username);
            profileCard.setAttribute(Attribute.location, profile.location);
            profileCard.setAttribute(Attribute.caption, profile.caption);
            profileCard.setAttribute(Attribute.likes, String(profile.likes));
            profileCard.setAttribute(Attribute.comments, String(profile.comments));
            profileCard.setAttribute(Attribute.days, String(profile.days));
            profileCard.setAttribute(Attribute.bg, profile.bg);
            profileCard.addEventListener("click", () => console.log(profile));
            this.profiles.push(profileCard);
        });
        data.forEach((story) => {
            const stories = this.ownerDocument.createElement("stories-ig");
            stories.setAttribute(AttributeStories.username, story.username);
            stories.setAttribute(AttributeStories.pic, story.pic);
            stories.addEventListener("click", () => console.log(story));
            this.stories.push(stories);
        });
        data.forEach((suggestions) => {
            const suggestionsCard = this.ownerDocument.createElement("my-suggestions");
            suggestionsCard.setAttribute(AttributeSuggestions.username, suggestions.username);
            suggestionsCard.setAttribute(AttributeSuggestions.pic, suggestions.pic);
            suggestionsCard.setAttribute(AttributeSuggestions.peopleFollowed, suggestions.peopleFollowed);
            suggestionsCard.addEventListener("click", () => console.log(suggestions));
            this.suggestions.push(suggestionsCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.stories.forEach((stories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(stories);
            });
            this.suggestions.forEach((suggestions) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestions);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
