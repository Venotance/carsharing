export function locparser1(count, props) {
    let location1;
    let location2;
    location1 = (props == '') ? '' : props.split(", ", 1);
    location2 = ((props == '') ? '' :
        (
            props.substring(((`${location1}, `).length),)
        ))
    if (count == 1) {
        return location1[0];
    } else if (count == 2) {
        return location2;
    }
}