var image_index = 0

function fetchId(){
    var current_id = "image_" + image_index
    return document.getElementById(current_id)
}

function browseLeft() {
    fetchId().style.display = "none"
    switch(image_index){
        case 0:
            image_index = 11
            break
        default:
            image_index--
            break;
    }
    fetchId().style.display = "block"
}

function browseRight() {
    fetchId().style.display = "none"
    switch(image_index){
        case 11:
            image_index = 0
            break
        default:
            image_index++
            break;
    }
    fetchId().style.display = "block"
}
