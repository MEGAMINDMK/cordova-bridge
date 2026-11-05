<script>
function openExternal(url) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.cordova_iab) {
        window.webkit.messageHandlers.cordova_iab.postMessage(
            JSON.stringify({
                action: "openChrome",
                url: url
            })
        );
    } else {
        window.open(url, "_blank");
    }
}
</script>
<script>
function openExternal(url) {
    window.webkit.messageHandlers.cordova_iab.postMessage(
        JSON.stringify({
            action: "openChrome",
            url: url
        })
    );
}
</script>
