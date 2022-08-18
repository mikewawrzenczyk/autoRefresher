//ISSUES: Chrome extension works but the refresh is happening to the pop up or my innner index.html not the actual web page I am on.
document.getElementById('refreshStart').addEventListener('click', startRefresh)
document.getElementById('refreshStop').addEventListener('click', stopRefresh)


// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }

async function refresh(){
    if(localStorage.getItem('started') === 'yes'){
        window.setTimeout( function() {
            console.log('Page has been reloaded')
            // window.location.reload();
            chrome.tabs.reload()
        }, 10000);
    }
}

refresh()

function startRefresh(){
    console.log('Click worked START')
    localStorage.setItem('started', 'yes');
    refresh()

}

function stopRefresh(){
    console.log('Click worked STOP')
    localStorage.setItem('started', 'no');
}