import {Component} from '../component/index.js';
import {Router} from '../router/index.js';

export default class App
{
    constructor()
    {
        this.components = {};
        this.router = new Router();
    }

    component(tagName, data)
    {
        this.components[tagName] = new Component(data);
    }

    mount(selector)
    {
        this.node = document.querySelector(selector || "body");

        for (let tag in this.components)
        {
            let nodes = this.node.querySelectorAll(tag);
            let component = this.components[tag];

            for (let node of nodes)
            {
                let route = node.attributes["c-route"];

                if (route)
                    this.router.addRoute(route.value, component, node);
                else
                    component.clone(node);
            }
        }
    }
}