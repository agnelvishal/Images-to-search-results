async function ogData(url) {
    try {
        htmlB = await fetch(url);
        htmlT = await htmlB.text();
        var parser = new DOMParser();
        htmlDoc = parser.parseFromString(htmlT, 'text/html');
        console.log(htmlDoc.querySelector("meta[property='og:image']").content);
    } catch (err) {
        console.log("Error is " + err + " for site " + url);
    }
}


function main() {
    links = document.querySelectorAll(".r a[target='_blank']:not(.fl)");
    for (var i = 0; i < links.length; i++) {
        ogData(links[i].href)
    }
}
main();