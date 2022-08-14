document.getElementById('refreshStart').addEventListener('click', refresh)

function refresh(){
    window.setTimeout( function() {
        window.location.reload();
      }, 30000);
    console.log('Page has been reloaded')
}