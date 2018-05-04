import App from '/dist/circular.js'

let app = new App();

app.component("navbar", {
    template: `
        <ul>
            <li c-for="link in links">
                <a c-on:click="active=link.label" c-bind:class="(active==link.label)?'active':'none'" c-bind:href="link.url">{{link.label}}</a>
            </li>
        </ul>
    `,

    model: {
        active: 'Home',
        links: [
            {
                label: 'Home',
                url: '#home'
            },
            {
                label: 'News',
                url: '#news'
            },
            {
                label: 'Contact',
                url: '#contact'
            },
            {
                label: 'About',
                url: '#about'
            }
        ]
    }
});

app.component("home", {
    template: `
        <div>
            <p>Home</p>
            <button c-on:click="count++">click me</button>
            <p>{{count}}</p>
        </div>
    `,
    model:{
        count: 0
    }
});

app.component("news", {
    template: `
        <p>News</p>
    `,
});

app.component("contact", {
    template: `
        <p>Contact</p>
    `,
});

app.component("about", {
    template: `
        <p>About</p>
    `,
});

app.mount("#app");