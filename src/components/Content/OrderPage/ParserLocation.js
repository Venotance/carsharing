export function locparser(count, props) {
    let location1;
    let location2;
    location1 = (props.location == '') ? '' : props.location.split(", ", 1);
    location2 = ((props.location == '') ? '' :
        (
            props.location.substring(((`${location1}, `).length),)
        ))
    if (count == 1) {
        return location1;
    } else if (count == 2) {
        return location2;
    }
}