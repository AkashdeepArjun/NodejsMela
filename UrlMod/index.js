import {URL} from "url"

const mylink= new URL("http://www.sample.com:8090/p/a/t/h?q=anythingstupid#potato")


console.log(mylink.searchParams);

//url.toString is same as url.toJSOn()

