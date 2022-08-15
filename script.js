//flag to keep refreshing once page has done it, maybe store it in local storage
// localStorage.setItem('started', 'no');

document.getElementById('refreshStart').addEventListener('click', refresh)
document.getElementById('refreshStop').addEventListener('click', stopRefresh)

function refresh(){
    localStorage.setItem('started', 'yes');
    while(localStorage.getItem('started' === 'yes')){
        window.setTimeout( function() {
            // window.location.reload();
            console.log('Page has been reloaded')
          }, 10000);
    }
    // console.log('Page has been reloaded')
}

function stopRefresh(){
    localStorage.setItem('started', 'no');
}